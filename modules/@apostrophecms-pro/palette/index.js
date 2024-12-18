/**
 * This is a more advanced setup of Palette where the fields and groups have
 * been organized in separate files based on groups. Edit the configs in
 * `lib/configs` to if you'd like to change the existing schema or add
 * new files in lib/configs to add additional fields and groups.
 * The code below should automatically add your fields and groups to Palette
 * as long as your config files export an `add` property containing the fields
 * and `group` property containing the group definition.
 */

import color from './lib/configs/color.js';
import grid from './lib/configs/grid.js';
import typography from './lib/configs/typography.js';

const configs = {
  color,
  grid,
  typography
};

export default {
  fields: {
    add: filter(configs, 'add'),
    group: filter(configs, 'group')
  }
};

function filter(config, key) {
  let items = {};

  for (const config of Object.keys(configs)) {
    items = {
      ...items,
      ...configs[config][key]
    };
  };

  return items;
}
