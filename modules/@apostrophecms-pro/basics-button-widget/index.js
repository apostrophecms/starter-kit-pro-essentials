module.exports = {
  options: {
    label: 'Color button'
  },
  fields: {
    add: {
      color: {
        type: 'select',
        label: 'Color',
        help: 'Choose a color for the button',
        choices: [
          {label: 'Orange', value: 'orange'},
          {label: 'Blue', value: 'blue'},
          {label: 'Green', value: 'green'}
        ]
      }
    },
  }
};
