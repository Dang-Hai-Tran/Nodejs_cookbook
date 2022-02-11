// Read from STDIN and write STDIN and STDERR
const process = require('process');
process.stdin.on("data", (data) => {
  // processing on each data event
  const name = data.toString().trim().toUpperCase();
  if (name === "") {
    // Write error
    process.stderr.write("Input was empty!");
  } else {
    // Write output
    process.stdout.write(`Hello ${name}!`);
  }
});
