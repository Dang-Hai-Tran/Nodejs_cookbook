import * as fs from "fs";

const rs = fs.createReadStream("./file.txt");
rs.on("data", function (data) {
    console.log(`Read chuck: ${data}`);
});
rs.on("end", function () {
    console.log("No more data");
});
