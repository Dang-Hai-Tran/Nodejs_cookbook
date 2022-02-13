// Import fs
import * as fs from "fs";

const file = fs.createWriteStream(`./file.txt`);
for (let i = 0; i < 1000; i++) {
    file.write(`Node.js is a JavaScript runtime on Google Chrome's V8 JavaScript engine.\n`);
}
