const fs = require('fs')
const sfdx = require('sfdx-js').Client.createUsingPath('sfdx')
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
  models.forEach((model) => {
    console.log(model)
    sfdx.schema.sobjectDescribe({ sobjecttype: model, json: false }).then((v) => {
      const fileLocation = `${outputDir}/${model}.json`
      fs.writeFile(fileLocation, JSON.stringify(v.result, null, '\t'))
      console.log(`Wrote ${fileLocation} to file...`)
    }).catch((e) => {
      console.error(`${e}... no connection? Try setting up force auth`)
    })
  })
}
