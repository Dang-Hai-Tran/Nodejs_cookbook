import * as fs from "fs";
import * as stream from "stream";
import * as util from "util";

const pipeline = util.promisify(stream.pipeline);
const upperCase = new stream.Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    },
});

async function run() {
    try {
        await pipeline(fs.createReadStream("./file.txt"), upperCase, fs.createWriteStream("./newfile2.txt"));
        console.log(`Pipeline succeeded.`);
    } catch (error) {
        console.log(`Pipeline failed. ${error}`);
    }
}

run();
