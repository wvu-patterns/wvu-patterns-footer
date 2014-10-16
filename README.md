# WVU Pattern Library - Footer  Module

[![Build Status](https://travis-ci.org/wvu-patterns/wvu-patterns-footer.svg?branch=master)](https://travis-ci.org/wvu-patterns/wvu-patterns-footer)

Use [Bower](http://bower.io/) to install this module.

```bash
$ bower install --save wvu-patterns-footer
```

## Dependencies

[wvu-patterns-footer-credits](https://github.com/wvu-patterns/wvu-patterns-footer-credits)

[wvu-patterns-footer-links](https://github.com/wvu-patterns/wvu-patterns-footer-links)

### Overrideable defaults

```scss
$wvu-masthead-large-breakpoint: 'min-width: 87.5em' !default;
$wvu-masthead-background-png-url: '//static.wvu.edu/global/images/backgrounds/wvu/masthead/wvu-pattern_900x54--1.0.0.png' !default;
$wvu-masthead-background-svg-url: '//static.wvu.edu/global/images/backgrounds/wvu/masthead/wvu-pattern--1.0.0.svg' !default;
$wvu-masthead-container-fluid: false !default;
$wvu-masthead-container-max-width: 1400 !default;
```

Setting `$wvu-masthead-container-fluid` to `true` will remove the value of `max-width` of the container to `auto`

###Pattern Development

Requires:

* NodeJS
* Gulp

####Installation

* `cd {install-dir}/wvu-patterns-footer`
* `npm install`

####Pattern Testing

* `gulp test` will create a build directory so you can view pattern
* `gulp ci`
