import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';

const filePath = path.join(process.cwd(), 'hello.txt');
let content = fs.readFileSync(filePath, 'utf-8');
console.log(content);

content = content.toUpperCase();
fs.writeFileSync(filePath, content, 'utf-8');

