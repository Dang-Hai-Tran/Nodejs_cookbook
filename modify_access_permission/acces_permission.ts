import * as fs from "fs/promises";
async function changeAccess(file: string) {
  await fs.chmod(file, 0o764);
  console.log(`${file} modified access permission.`);
}

changeAccess('./testfile.txt');
