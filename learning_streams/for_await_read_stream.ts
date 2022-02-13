import * as fs from "fs";

const rs = fs.createReadStream("./file.txt");
async function run() {
    for await (const chuck of rs) {
        console.log(`Read chuck: ${chuck}`);
    }
    console.log(`No more data.`);
}
run();
