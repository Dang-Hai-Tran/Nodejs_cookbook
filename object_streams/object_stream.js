"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
// import { stringify } from "ndjson";
const Name = new stream_1.Transform({
    objectMode: true,
    transform: ({ forename, surname }, encoding, callback) => {
        callback(null, `name: ${forename} ${surname}\n`);
    },
});
Name.pipe(process.stdout);
Name.write({ forename: "John", surname: "Doe" });
Name.write({ forename: "Jane", surname: "Dow" });
