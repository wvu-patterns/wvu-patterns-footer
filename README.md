# WVU Pattern Library -- Footer Module

[![Build Status](https://travis-ci.org/wvu-patterns/wvu-patterns-footer.svg?branch=master)](https://travis-ci.org/wvu-patterns/wvu-patterns-footer)

Use [Bower](http://bower.io/) to install this module.

```bash
$ bower install --save wvu-patterns-footer
```

## Dependencies

```
"wvu-utilities-variables": "1.0.0",
"neat" : "1.7.2"
```

### SCSS Overridable defaults

```scss

```

## Pattern Development

Requires:

* Ruby ~= 2.2.3
* NodeJS >= 4.1.2
* Gulp >= 3.8.11

*RVM is Preferred* but not required

#### Installation

```bash
$ git clone https://github.com/wvu-patterns/wvu-patterns-footer.git
$ cd wvu-patterns-footer
$ gem install bundler
$ bundle install
$ npm install
$ bower install
```

#### Pattern Testing

* `gulp` will create a build directory so you can view pattern at `localhost:3000`
* `gulp ci` will run lint test to make sure the .scss files are parseable and valid
