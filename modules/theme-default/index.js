/**
 * A Minimally Styled theme that showcases core Apostrophe functionality
 *
 * For ease of migration to Assembly later, we've organized the styles and
 * site-specific JavaScript in this theme module.
 */

const path = require('path');

const themeDir = path.resolve(process.cwd(), __dirname);

module.exports = {
  options: {
    alias: 'theme',
    // Silence startup warning about the lack of code since this
    // is just an empty starting point for your own work
    ignoreNoCodeWarning: true,
    // Silence startup warning displayed if this module is
    // not activated at all, since only one theme module
    // will be activated per site
    ignoreUnusedFolderWarning: true
  },
  /**
   * Updates the webpack config so we can use SCSS variables and
   * utilities from our theme
   */
  webpack: {
    extensions: {
      themeVariables: {
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/,
              use: [
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    additionalData: `
@import "${themeDir}/ui/src/scss/settings/_color";
@import "${themeDir}/ui/src/scss/settings/_font";
@import "${themeDir}/ui/src/scss/functions/_rem";
`
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
};
