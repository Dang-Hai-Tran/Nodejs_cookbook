import * as fs from 'fs';

const rs = fs.createReadStream('./file.txt');
rs.pipe(process.stdout);// write the incoming data to destination stream.
