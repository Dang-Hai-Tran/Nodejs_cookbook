import * as fs from "fs/promises";
import * as path from "path";
import * as process from "process";

const filePath = path.join(process.cwd(), "hello.txt");
async function readWriteFile() {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    console.log(`File content: ${content}`);
  } catch (err) {
    console.log(err);
  }
}
readWriteFile();
setInterval(() => process.stdout.write("**** \n"), 1).unref();// Test asynchronous
