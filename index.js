const { build, pull, help } = require('./lib/commands')

exports.topics = [{
  name: 'rumble',
  description: 'Run apex rumble'
}]

exports.namespace = {
  name: 'nathanKramer',
  description: 'Generate powerful apex models from your schema'
}

exports.commands = [
  build, pull, help
]
