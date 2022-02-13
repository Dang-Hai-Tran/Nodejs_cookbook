import * as fs from "fs";

const rs = fs.createReadStream("./file.txt");
let size = 0;
rs.on("data", function (data: Buffer) {
    size += data.length;
    console.log(`File size: ${size}`);
});
