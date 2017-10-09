const rumbleCommand = require('../rumbleCommand')
const flags = [{
  name: 'command',
  char: 'c',
  description: 'The command to get help with',
  required: false,
  hasValue: true
}]

module.exports = rumbleCommand('help', flags)
