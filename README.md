# Apostrophe Pro Essentials Starter Kit

<!-- TOC is auto generated via VSCode extensions https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one.
Having it installed in your VSCode will ensure that adding/changing heading will be auto-populated here. -->
- [Apostrophe Pro Essentials Starter Kit](#apostrophe-pro-essentials-starter-kit)
  - [Purpose](#purpose)
  - [Before you begin](#before-you-begin)
  - [First Steps: required before startup](#first-steps-required-before-startup)
    - [Setting your shortName](#setting-your-shortname)
    - [Disabled File Key](#disabled-file-key)
    - [Session Secret](#session-secret)
  - [Requirements For Development On Your Computer](#requirements-for-development-on-your-computer)
    - [Operating System: Mac, Linux, or Virtual Linux](#operating-system-mac-linux-or-virtual-linux)
    - [Software Installation Requirements](#software-installation-requirements)
  - [Starting Up In Development](#starting-up-in-development)
  - [Site Development](#site-development)
    - [The `theme-default` module](#the-theme-default-module)
      - [Modern Frontend Assets Without A Custom Build Process](#modern-frontend-assets-without-a-custom-build-process)
      - [Frontend Assets With Your Own Build Process](#frontend-assets-with-your-own-build-process)
      - [Serving Static Files: Fonts and Static Images](#serving-static-files-fonts-and-static-images)
    - [Palette Configuration](#palette-configuration)
  - [Hosting and Deployment](#hosting-and-deployment)
    - [If we are your host](#if-we-are-your-host)
    - [Self-hosting](#self-hosting)

## Purpose

The purpose of this repository and this document is to serve as a quick start boilerplate for single-site Apostrophe Pro projects.
As such, it includes several Pro modules, pre-configured, although it does not include all, as developer needs vary. If you are
reading this, you should have access to additionally `npm install` and configure any of the Pro modules listed on our website.

This boilerplate project includes:

* Basic examples using the `@apostrophecms-pro/basics` modules, including multicolumn, hero, button, card and slideshow widgets.
* Basic example configuration of the `@apostrophecms-pro/palette` module.
* The `@apostrophecms-pro/document-versions` module.
* Simple examples of front-end code.

## Before you begin

This document assumes familiarity with Apostrophe concepts. If you are not already familiar with
single-site Apostrophe development, you should pause here and familiarize yourself with the
[A3 ApostropheCMS documentation](https://v3.docs.apostrophecms.org/) as a starting point.

## First Steps: required before startup

### Setting your shortName

**Don't leave this setting in `app.js`, or anything else, set to `CHANGEME`.** The `shortName` should usually be the same
as your repository name, which should usually be the same as the name of your project folder. It will also be the name of
your MongoDB database by default in local development. Do not use punctuation other than hyphens. Good examples include
`smithco-marketing`, to distinguish from other sites built for that company, or just `smithco`.

This name should be unique among your projects.

### Disabled File Key

In `app.js`, locate `disabledFileKey` and change `CHANGEME` to a random string of your choosing. This is used when disabling access to files in the local backend. Do not leave it set to `CHANGEME`.

### Session Secret

In `app.js`, locate `secret` and change `CHANGEME` to a random string of your choosing. This is used for login session encryption. Do not
leave it set to `CHANGEME`.

## Requirements For Development On Your Computer

### Operating System: Mac, Linux, or Virtual Linux

**Your local development environment must be either MacOS or Linux.** If your development computer runs Windows, we recommend development on
Windows Subsystem for Linux (WSL). Microsoft recommends WSL for Node.js development. 

### Software Installation Requirements

To test-drive the project in development, make sure you have Apostrophe's usual dependencies on your local machine:

* MongoDB (4.4.x or better, we recommend 5.x or better)
* NodeJS (18.x or better for new projects, 14.x and 16.x reach end of life this year)

For more information see the Apostrophe [Getting Started Tutorial](https://docs.apostrophecms.org/getting-started/setting-up-your-environment.html).

## Starting Up In Development

First, `git clone` the boilerplate project and push it up to your own git repository under an appropriate name,
matching your choice of `shortName`, for ongoing work.

Then type:

```
npm install
```

After installation, add an admin user:

```
node app @apostrophecms/user:add admin admin
```

Enter a password when prompted.

Next launch the application:

```
npm run dev
```

When ready, visit:

```
http://localhost:3000/login
```

And log in with the admin account you created for the site. Then make some simple edits to the homepage.

## Site Development

Right now we have basic example templates in place. Let's look at where to put our code to customize the experience.

> Again, if you are not already familiar with single-site Apostrophe development, you should pause here and
[review the A3 ApostropheCMS documentation](https://a3.docs.apostrophecms.org/) as a starting point.

Just like in any sigle-site Apostrophe project, modules are configured in `app.js`, and module code lives
in subdirectories of `modules/`.

Feel free to add page templates and modules as you would with an ordinary open-source Apostrophe project. You can `npm install` modules
like `@apostrophecms/blog` and configure them in a normal way. You can also install additional Pro modules like
`@apostrophecms-pro/advanced-permission` if they are necessary to your plans.

### The `theme-default` module

Apostrophe allows frontend assets to be placed in any module, but as a suggested
code organization, this project contains a `theme-default` module with a sample
`ui/src/index.js` and `ui/src/index.scss` as described further below. This approach
simplifies later migration to an Assembly multisite project especially if you anticipate
implementing a choice of themes at that time.

#### Modern Frontend Assets Without A Custom Build Process

There is no need for a custom Webpack configuration in most cases. Specifically, you can follow our documentation and place your modern
JavaScript code in the `ui/src/index.js` file of any module, or use `import` statements in that file to import it there. As noted in
our documentation, it is **important for `ui/src/index.js` to export a function as its default export.** This function will be invoked
to initialize your module at a safe time when `apos.http`, `apos.util`, etc. are already available.

You may also place Sass SCSS code in the `ui/src/index.scss` file of any module, and use `import` statements in that file to bring in
more Sass SCSS code.

#### Frontend Assets With Your Own Build Process

A sample webpack build is not included as standard equipment, as `ui/src` suffices for most needs, and the built-in, automatic Webpack configuration
can be extended, per our public documentation. However, if you prefer to create your own webpack configuration, the typical pattern
is to configure the output of your build process to be a `ui/public/something.js` file in any module in your Apostrophe project.

#### Serving Static Files: Fonts and Static Images

If you need to serve static files, you can do this much as you would in standalone A3 development.

The folder `public` maps to `/` in the URL space of a site. For instance, `public/fonts/myfile.ttf` maps to the URL `/fonts/myfile.ttf`.
For assets like favicons and fonts, you can add `link` tags to the `extraHead` block already present in
`modules/@apostrophecms/template/views/outerLayout.html`.

### Palette Configuration

The palette module allows styles to be edited visually on the site. It is configured in `modules/@apostrophecms-pro/palette/index.js`.
There you can specify the selectors, CSS properties, and field types to be used to manipulate color, font size, font family
and other aspects of the site as a whole.

For complete information and a sample configuration, see the [@apostrophecms-pro/palette module documentation](https://npmjs.org/package/@apostrophecms-pro/palette). *You will need to be logged into an npm account that has been granted access, such as the one you used to npm install this project.*

> Note that like all other changes, palette changes do not take place for logged-out users until the editor clicks "Publish."

## Hosting and Deployment

### If we are your host

If we are hosting Apostrophe for you, then you can deploy updates to your staging and production environments by pushing to your
`staging` and `production` git branches, respectively. You will receive notifications in our shared Slack channel, including links to
access the deployment progress logs.

Apostrophe will complete the build steps listed in the `build` npm command provided in `package.json` and also execute any
database migrations before restarting with your newest code.

### Self-hosting
 
Self-hosting is also an option if you have not chosen to host with us. We offer several how-to guides on this, such as
[Ubuntu hosting setup](https://v3.docs.apostrophecms.org/cookbook/ubuntu-hosting.html) and
[deploying Apostrophe in the cloud with Heroku](https://v3.docs.apostrophecms.org/cookbook/deploying-to-heroku.html). The main new element
with Apostrophe Pro is making sure that the `npm install` command has access to the `@apostrophecms-pro` modules during installation.

Here is the simplest recipe to achieve that:

1. Make sure you have been granted access to install our pro modules (that is, make sure `npm install` works for you in this project). If
not, reach out to our support team.
2. [Log into the npm website](https://www.npmjs.com/) using the account that has been granted access.
3. Pull down the personal menu and select "Access Tokens."
4. Select "Classic Token" from the "Generate Tokens" dropdown.
5. Give the token a name, such as "ops-deployment".
6. Select "Read-Only."
7. **Immediately** copy and paste the token that is displayed. It will not be shown again.
8. Create a `.npmrc` file in the root of your project, like this:

```
//registry.npmjs.org/:_authToken=YOUR-TOKEN-HERE
```

It is also possible to use an environment variable for additional security, depending on your preferred deployment and hosting
solution. Please see the npm documentation for more information on that option.
