// The World Today — Sunday, 22 November 2026
//
// Entry program for the make.fun "news-image-20261122" bounty:
// "Sum up 22 November's world news in one image".
//
// The program copies the pre-rendered front page (entry.png, 1024x1024)
// from this repository into $MAKEFUN_OUTPUT_DIR/entry.png, then validates
// the copy: PNG signature, dimensions, file size (<= 1 MiB) and SHA-256
// checksum against the source file. Deterministic, stdlib only, no network.
//
// The front page itself (compose.html -> entry.png) was designed and
// rendered in this repository: a newspaper front page with a big masthead,
// the date SUNDAY, 22 NOVEMBER 2026, and six verified news stories of the
// day, each with a hand-drawn SVG pictogram.

import { copyFileSync, existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1_048_576; // 1 MiB
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

function sha256Hex(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

// Read the PNG dimensions (IHDR chunk) without any dependency.
function pngDimensions(buf: Buffer): { width: number; height: number } {
  const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buf.length < 33 || !buf.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error("not a PNG file: bad signature");
  }
  if (buf.toString("ascii", 12, 16) !== "IHDR") {
    throw new Error("not a PNG file: missing IHDR chunk");
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function main(): void {
  const repoDir = dirname(fileURLToPath(import.meta.url));
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outputDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }

  const source = join(repoDir, "entry.png");
  if (!existsSync(source)) {
    throw new Error(`entry.png not found in ${repoDir}`);
  }

  const sourceBytes = readFileSync(source);
  const { width, height } = pngDimensions(sourceBytes);
  if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
    throw new Error(`unexpected dimensions ${width}x${height}, expected 1024x1024`);
  }
  if (sourceBytes.length > MAX_BYTES) {
    throw new Error(`entry.png is ${sourceBytes.length} bytes, over the 1 MiB limit`);
  }

  const dest = join(outputDir, "entry.png");
  copyFileSync(source, dest);

  // Validate the copy, not just the source.
  const copiedBytes = readFileSync(dest);
  const copiedDims = pngDimensions(copiedBytes);
  if (copiedDims.width !== EXPECTED_WIDTH || copiedDims.height !== EXPECTED_HEIGHT) {
    throw new Error("copied entry.png has wrong dimensions");
  }
  if (copiedBytes.length > MAX_BYTES) {
    throw new Error("copied entry.png exceeds the 1 MiB limit");
  }
  const sourceHash = sha256Hex(source);
  const copiedHash = sha256Hex(dest);
  if (sourceHash !== copiedHash) {
    throw new Error("SHA-256 mismatch after copy");
  }
  // Cross-check the on-disk size of the copy as well.
  const copiedSize = statSync(dest).size;
  if (copiedSize !== copiedBytes.length) {
    throw new Error("copied entry.png size mismatch");
  }

  console.log(`entry.png -> ${dest}`);
  console.log(`dimensions: ${width}x${height}`);
  console.log(`size: ${copiedBytes.length} bytes`);
  console.log(`sha256 (source): ${sourceHash}`);
  console.log(`sha256 (output): ${copiedHash}`);
  console.log("OK");
}

main();
