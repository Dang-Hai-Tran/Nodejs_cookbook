import { Transform } from "stream";
// import { stringify } from "ndjson";

const Name = new Transform({
    objectMode: true,
    transform: ({ forename, surname }, encoding, callback) => {
        callback(null, `name: ${forename} ${surname}\n`);
    },
});

Name.pipe(process.stdout);
Name.write({ forename: "John", surname: "Doe" });
Name.write({ forename: "Jane", surname: "Dow" });