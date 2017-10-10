const rumbleCommand = require('../rumbleCommand')
const flags = [{
  name: 'schemaDir',
  char: 's',
  default: 'schema',
  description: 'The directory where schemas are located',
  required: false,
  hasValue: true
},
{
  name: 'outputDir',
  char: 'o',
  default: 'apex_bin',
  description: 'The directory where apex should be generated',
  required: false,
  hasValue: true
}]

module.exports = rumbleCommand('build', flags)
