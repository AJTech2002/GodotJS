#!/usr/bin/env node

import { watch } from "chokidar";
import { resolve, join, basename } from "path";
import { readFile, writeFile, unlink, mkdir, readdir } from "fs/promises";
import { existsSync } from "fs";
import { argv } from "process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as parser from "./tscn.js";

// Parse CLI arguments
const args = yargs(hideBin(argv))
  .option("input", {
    alias: "i",
    describe: "Input directory to watch",
    type: "string",
    default: "../godot",
  })
  .option("output", {
    alias: "o",
    describe: "Output directory for JSON files",
    type: "string",
    default: "../src/scene",
  })
  .help().argv;

const inputDir = resolve(args.input);
const outputDir = resolve(args.output);

// Ensure the output directory exists
if (!existsSync(outputDir)) {
  await mkdir(outputDir, { recursive: true });
}

// Placeholder parse function
function parseTscnFile(content) {
  return parser.peg$parse(content);
}

// Function to process a .tscn file
async function processTscnFiles(inputDir, outputDir) {
  try {
    const files = await readdir(inputDir);
    const scenes = [];

    for (const file of files) {
      if (file.endsWith(".tscn")) {
        const filePath = join(inputDir, file);
        const data = await readFile(filePath, "utf8");
        const parsedData = parseTscnFile(data);

        scenes.push({
          name: basename(file, ".tscn"),
          content: parsedData,
        });
      }
    }

    // Output consolidated JSON
    const outputPath = join(outputDir, "scenes.json");
    await writeFile(outputPath, JSON.stringify({ scenes }, null, 2), "utf8");

    console.log(`Processed ${scenes.length} scenes -> ${outputPath}`);
  } catch (err) {
    console.error("Error processing .tscn files:", err);
  }
}

// Watcher setup
const watcher = watch(inputDir, {
  ignored: /(^|[\/\\])\../, // Ignore dotfiles
  persistent: true,
});

watcher
  .on("add", async (filePath) => {
    //if (filePath.endsWith(".tscn")) {
    //  console.log(`Detected new file: ${filePath}`);
    //  await processTscnFiles(inputDir, outputDir);
    //}
  })
  .on("change", async (filePath) => {
    console.log(`File changed: ${filePath}`);
    await processTscnFiles(inputDir, outputDir);
  })
  .on("unlink", async (filePath) => {
    console.log(`File removed: ${filePath}`);
    await processTscnFiles(inputDir, outputDir);
  });

console.log(`Watching directory: ${inputDir}`);
