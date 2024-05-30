require('apostrophe')({
  shortName: 'CHANGEME',
  nestedModuleSubdirs: true,
  modules: {
    '@apostrophecms/attachment': {
      options: {
        uploadfs: {
          // Be sure to change
          disabledFileKey: 'CHANGEME'
        }
      }
    },
    '@apostrophecms/express': {
      options: {
        session: {
          secret: 'CHANGEME'
        }
      }
    },

    // Just a nice place to keep helper functions that are
    // used across all sites
    helpers: {},

    'default-page': {},

    // The @apostrophecms/home-page module always exists, no need to activate it here

    '@apostrophecms-pro/palette': {},
    '@apostrophecms-pro/document-versions': {},

    'theme-default': {}
  }
});
