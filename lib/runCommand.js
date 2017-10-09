const { exec } = require('child_process')

const runCommand = function(command) {
  console.log('running:' + command)
  exec(command, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return
    }

    // the *entire* stdout and stderr (buffered)
    if (stdout) console.log(`stdout: ${stdout}`)
    if (stderr) console.log(`stderr: ${stderr}`)
  })
}

module.exports = runCommand
