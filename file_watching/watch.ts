import * as fs from "fs";
import moment from "moment";

const file = "./file.txt";
fs.watchFile(file, (current, previous) => {
  console.log(`${file} updated ${current.mtime}`);
});

fs.watch(file, (eventType, filename) => {
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");
  console.log(`${filename} updated ${time}`);
});
