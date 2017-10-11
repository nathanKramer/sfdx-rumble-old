# ApexRumble

## WORK IN PROGRESS

This is a WIP SFDX wrapper for the [WIP rumble CLI](https://www.github.com/nathanKramer/apex-rumble)

Apex Rumble is an abstraction between Salesforce's object schema and your Apex code.

## How Does It Work?

List the models you want in `config/rumble.json`, eg:

```json
{
  "models": ["Exception__c", "Occurrence__c", "Vote"]
}
```

Run `sfdx nathanKramer:rumble:pull` to bring pull down the schema description for the models you have listed. Then run `sfdx nathanKramer:rumble:build` to generate your rumble models and get coding.

For more info on the rumble API, see the [rumble docs](https://www.github.com/nathanKramer/apex-rumble)

## Installation

You must have Ruby installed.
Install [apex-rumble](https://www.github.com/nathanKramer/apex-rumble)

Run `npm install sfdx-rumble` NB: As of this commit I actually haven't published anything on NPM so if you're an early bird you should clone the repo

## Usage

Using this plugin is as simple as:

1. Configuring via `config/rumble.json`
2. Running rumble:pull, then rumble:build
3. Deploying Learning the fairly straightforward apex code that is generated.

### rumble.json

Proposed structure: (Not all features implemented)

```javascript
{
  "api_prefix": "Rumble", // Defaults
  "model_prefix": "M", // Defaults

  "models": [ // Objects to create models for
    "Account",
    "Contact",
    "Lead",
    "Opportunity",
    {
      "sobject": "Exception__c",
      "model_name": "Error", // Should some reserved keyword issue occur, or for other reasons, you can map the object -> model name.
      "field_whitelist": [
        "Id",
        "Name",
        "UniqueName__c"
      ],
      "field_mappings": {
        "UniqueName__c": "veryUniqueName" // field name mappings can occur independently of the whitelist.
      }
    },
    "Occurrence__c"
  ]
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/apex_rumble. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

