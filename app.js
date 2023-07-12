const classes = require('./lib/helpers/classes');

require('apostrophe')({
  shortName: 'CHANGEME',
  bundles: [ '@apostrophecms-pro/basics' ],
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
    // Just a nice place to keep our helper functions and macros that are
    // used across all sites
    helpers: {},
    'content-placeholder': {},
    'default-page': {},

    // The @apostrophecms/home-page module always exists, no need to activate it here

    // required for bundled modules or extending views
    '@apostrophecms-pro/basics': {},
    // optional widgets
    '@apostrophecms-pro/basics-slideshow-widget': {
      options: {
        className: classes.WIDGET
      }
    },
    '@apostrophecms-pro/basics-column-widget': {},
    '@apostrophecms-pro/basics-button-widget': {
      options: {
        className: classes.WIDGET
      }
    },
    '@apostrophecms-pro/basics-card-widget': {
      options: {
        className: classes.WIDGET
      }
    },
    '@apostrophecms-pro/basics-hero-widget': {
      options: {
        className: classes.WIDGET
      }
    },
    '@apostrophecms-pro/basics-footer-widget': {},
    '@apostrophecms-pro/palette': {},
    '@apostrophecms-pro/document-versions': {},
    'theme-default': {}
  }
});
