import * as fs from "fs";
import { Transform, TransformCallback } from "stream";

const rs = fs.createReadStream(`./file.txt`);
const newFile = fs.createWriteStream(`./newFile2.txt`);
class UpperCase extends Transform {
    constructor() {
        super();
    }

    _transform(chunk: fs.ReadStream, encoding: BufferEncoding, callback: TransformCallback): void {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}
rs.pipe(new UpperCase()).pipe(newFile);
