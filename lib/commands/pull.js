const path = require('path');
const almPath = path.dirname(require.resolve('salesforce-alm'));
const Org = require(path.join(almPath, 'lib', 'scratchOrgApi'));
const fs = require('fs')
const pwd = process.cwd()
const outputDir = `${pwd}/schema`

module.exports = {
  topic: 'rumble',
  command: 'pull',
  description: 'Generate powerful apex models from your schema',
  help: 'Put some help text here or something.',
  flags: [],
  run(context) {
    const expectedManifestAt = `${pwd}/config/rumble.json`
    const manifest = fs.readFile(expectedManifestAt, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
      } else {
        let config = JSON.parse(data)
        describeModels(config.models)
      }
    })
  }
}

function describeModels(models) {
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }

  console.log('Pulling current schema... This might take a few moments...')
  Org.create().then((org) => {
    org.force._getConnection(org, org.config).then((conn) => {
      models.forEach((model) => {
        if ((typeof model) === 'object') {
          model = model.sobject
        }

        let file = `${model}.json`
        conn.describe(model).then((v) => {
          const fileLocation = `${outputDir}/${file}`
          fs.writeFile(fileLocation, JSON.stringify(v, null, '\t'))
          console.log(`${file}... OK`)
        }).catch((e) => {
          console.error(`${file}... Error: ${e.errorCode}`)
        })
      })
    });
  })
}
