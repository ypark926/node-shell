const fs = require('fs');

let catfunc = process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  let file = cmd.slice(4, cmd.length);

  if (cmd === 'cat ' + file) {
    console.log(process.cwd());
    let directory = process.cwd;
    fs.readFile(`${directory}`, 'utf8', (err, data) => {
      let dataFile = data;
      console.log(dataFile);
      //process.stdout.write(dataFile);
    })
  }

  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

module.exports = catfunc;
