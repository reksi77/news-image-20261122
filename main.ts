// SPDX-License-Identifier: MIT
// main.ts — news-image-20261122
//
// Entry point for the make.fun "news-image" bounty.
// The entry is a single pre-rendered 1024x1024 newspaper front page
// (entry.png, 35 stories covering the full day of 22 Nov 2026).
// This program copies entry.png into $MAKEFUN_OUTPUT_DIR/entry.png and
// validates the copy: PNG signature, IHDR dimensions (1024x1024),
// file size, and a SHA-256 equality check between source and copy.
//
// Node 22, stdlib only, no network, fully deterministic.

import { copyFileSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const MAX_BYTES = 1048576; // 1 MiB

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

function sha256Hex(data: Buffer): string {
  return createHash("sha256").update(data).digest("hex");
}

// Parse width/height out of the PNG IHDR chunk (bytes 16..23).
function pngDimensions(data: Buffer): { width: number; height: number } {
  if (data.length < 33) {
    throw new Error(`PNG too short to hold an IHDR chunk (${data.length} bytes)`);
  }
  if (!data.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error("invalid PNG signature");
  }
  if (data.toString("ascii", 12, 16) !== "IHDR") {
    throw new Error("first PNG chunk is not IHDR");
  }
  return {
    width: data.readUInt32BE(16),
    height: data.readUInt32BE(20),
  };
}

function validatePng(data: Buffer, label: string): { width: number; height: number } {
  const { width, height } = pngDimensions(data);
  if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
    throw new Error(
      `${label}: expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}, got ${width}x${height}`,
    );
  }
  if (data.length > MAX_BYTES) {
    throw new Error(`${label}: size ${data.length} exceeds ${MAX_BYTES} bytes`);
  }
  return { width, height };
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outputDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }

  const repoDir = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(repoDir, "entry.png");
  const destPath = join(outputDir, "entry.png");

  const source = readFileSync(sourcePath);
  const sourceStat = statSync(sourcePath);
  if (sourceStat.size !== source.length) {
    throw new Error("source size changed while reading");
  }
  const dims = validatePng(source, "source entry.png");
  const sourceHash = sha256Hex(source);

  copyFileSync(sourcePath, destPath);

  // Confirm the destination file on disk is exactly the size we copied.
  const destStat = statSync(destPath);
  if (destStat.size !== source.length) {
    throw new Error(
      `copied size ${destStat.size} differs from source size ${source.length}`,
    );
  }

  const copied = readFileSync(destPath);
  const copiedDims = validatePng(copied, "copied entry.png");
  if (copiedDims.width !== dims.width || copiedDims.height !== dims.height) {
    throw new Error("copied dimensions differ from source");
  }
  const copiedHash = sha256Hex(copied);
  if (copiedHash !== sourceHash) {
    throw new Error("SHA-256 mismatch between source and copy");
  }

  console.log(`output: ${destPath}`);
  console.log(`dimensions: ${dims.width}x${dims.height}`);
  console.log(`bytes: ${copied.length}`);
  console.log(`sha256: ${copiedHash}`);
  console.log("OK");
}

main();
