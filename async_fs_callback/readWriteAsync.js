"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const process = __importStar(require("process"));
const filepath = path.join(process.cwd(), "hello.txt");
fs.readFile(filepath, "utf-8", (err, content) => {
    if (err) {
        throw err;
    }
    else {
        console.log(`File data: ${content}`);
    }
    const upperContent = content.toUpperCase();
    fs.writeFile(filepath, upperContent, "utf-8", (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log(`File updated`);
        }
    });
});
setInterval(() => process.stdout.write("**** \n"), 1).unref();
