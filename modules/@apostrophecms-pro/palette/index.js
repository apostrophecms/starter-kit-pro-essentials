const path = require('path');
const configs = require('require-all')({
  dirname: path.join(
    __dirname, 'lib/configs'
  )
});
const sass = require('sass');
const { snakeCase } = require('lodash');

module.exports = {
  options: {
    serverRendered: true
  },
  fields: {
    add: generateFields(configs),
    group: generateGroups(configs)
  },
  methods(self) {
    return {
      getStylesheet(doc) {
        const prologue = self.schema.map(field => {
          return `$${snakeCase(field.name)}: ${doc[field.name]};`
        }).join('\n');
        try {
          return sass.compileString(
            `
              ${prologue}
              @import 'palette.scss';
            `, {
              loadPaths: [ `${__dirname}/scss` ]
            }
          ).css;
        } catch (e) {
          // sass produces highly readable errors this way
          console.error(e.toString());
          // Return no palette styles as a fallback
          return '';
        }
      }
    };
  }
};

function generateFields (configs) {
  let fields = {};
  for (const config of Object.keys(configs)) {
    fields = {
      ...fields,
      ...configs[config].add
    };
  };

  return fields;
}

function generateGroups (configs) {
  let groups = {};

  for (const config of Object.keys(configs)) {
    groups = {
      ...groups,
      ...configs[config].group
    };
  };

  return groups;
}
