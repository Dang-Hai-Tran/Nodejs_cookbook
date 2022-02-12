import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as process from "node:process";

const file_path = path.join(process.cwd(), "hello.txt");
fs.readFile(file_path, "utf-8").then((content) => {
  console.log(`File content: ${content}`);
});
