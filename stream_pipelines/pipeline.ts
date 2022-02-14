import * as fs from "fs";
import { pipeline, Transform } from "stream";

const upperCase = new Transform({
    transform(chunk, encode, callback) {
        callback(null, chunk.toString().toUpperCase());
    },
});
pipeline(fs.createReadStream("./file.txt"), upperCase, fs.createWriteStream("./newFile.txt"), (err) => {
    if (err) {
        console.log(`Pipe failed. ${err}`);
    } else {
        console.log(`Pipe succeeded.`);
    }
});
//pipeline() method forward errors occur in the stream by the callback, therefore its over the pipe() method.