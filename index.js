const { build, pull, help } = require('./lib/commands')

exports.topics = [{
  name: 'models',
  description: 'Run apex rumble'
}]

exports.namespace = {
  name: 'rumble',
  description: 'Generate powerful apex models from your schema'
}

exports.commands = [
  build, pull, help
]
