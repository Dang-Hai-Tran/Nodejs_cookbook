import { PathLike } from "fs";
import * as fs from "fs/promises";

const file = process.argv[2];
async function printMetadata(file: PathLike) {
  try {
    const fileStats = await fs.stat(file);
    console.log(fileStats);
  } catch (err) {
    console.log(`Error reading file: ${file}`);
    console.log(err);
  }
}
printMetadata(file);
