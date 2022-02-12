import * as fs from "fs";
import * as path from "path";
import * as process from "process";

const filepath = path.join(process.cwd(), "hello.txt");
fs.readFile(filepath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  } else {
    console.log(`File data: ${content}`);
  }
  const upperContent = content.toUpperCase();
  fs.writeFile(filepath, upperContent, "utf-8", (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`File updated`);
    }
  });
});
setInterval(() => process.stdout.write("**** \n"), 1).unref();