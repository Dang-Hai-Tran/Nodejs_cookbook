import * as fs from "fs";
import { Transform } from "stream";

const rs = fs.createReadStream("./file.txt");
const newFile = fs.createWriteStream("./newFile.txt"); // Create a stream to write data to new file.
const upperCase = new Transform({
    // Create a stream to transform data to uppercase
    transform(chunk, encoding, callback) {
        // Data processing
        callback(null, chunk.toString().toUpperCase());
    },
});
rs.pipe(upperCase).pipe(newFile); // Chain all stream together(connect by pipe)
