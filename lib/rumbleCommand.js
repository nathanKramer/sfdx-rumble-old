const runCommand = require('./runCommand')

module.exports = function(commandName, flags) {
  return {
    topic: 'rumble',
    command: commandName,
    description: 'Generate powerful apex models from your schema',
    help: 'Put some help text here or something.',
    flags: flags,
    run(context) {
      let command = `rumble ${this.command}`

      ['schemaDir', 'outputDir'].forEach((flag) => {
        if (context.flags[flag]) {
          command += ` ${context.flags[flag]}`
        }
      })
      runCommand(command)
    }
  }
}
