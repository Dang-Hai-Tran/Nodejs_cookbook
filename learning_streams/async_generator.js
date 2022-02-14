"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
async function* generate() {
    yield "Node.js";
    yield "is";
    yield "a";
    yield "JavaScript";
    yield "Runtime";
}
const readable = stream_1.Readable.from(generate());
readable.on("data", (chunk) => {
    console.log(chunk);
});
