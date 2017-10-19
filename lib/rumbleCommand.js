const runCommand = require('./runCommand')

module.exports = function(commandName, flags) {
  return {
    topic: 'models',
    command: commandName,
    description: 'Generate powerful apex models from your schema',
    help: 'Put some help text here or something.',
    flags: flags,
    run(context) {
      let command = `rumble ${this.command}`
      this.flags.forEach((flag) => {
        let flagV = context.flags[flag.name] || flag.default
        if (flagV) {
          command += ` ${flagV}`
        }
      })
      runCommand(command)
    }
  }
}
