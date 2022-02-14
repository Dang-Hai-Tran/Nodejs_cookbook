import * as fs from "fs";

const rs = fs.createReadStream("./file.txt");
rs.on("readable", function () {
    // readable stream is in paused mode
    let data = rs.read();
    while (data !== null) {
        console.log(`Read chuck: ${data}`);
        data = rs.read(); // in paused mode, need read() method to consume the stream data.
    }
});
rs.on("end", function () {
    console.log(`No more data.`);
});
