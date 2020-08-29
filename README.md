# @rm-labo/mq-scss

![badge](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

Media Queries Helper Functions for scss.

Javascript version of the package with a similar concept is [here](http://rm-labo.github.io/mq-js/)

## Demo

demo page is [here](http://rm-labo.github.io/mq-scss/)

## Install

```bash
$ npm i -D @rm-labo/mq-scss
```

### Imprt

You can import your scss project root.

```scss

@import 'path/to/node_modules/@rm-labo/mq-scss/_mq.scss';

```

If your build tool processes CSS from your JavaScript entry point, you can also import the stylesheet directly as modules

```js

import '@rm-labo/_mq.scss'

```

## Usage

Three @mixins are available.
You can use your favorite 'camel case' or 'kebab case'.

```scss
  // camelCase
  @include mqUp($bp) {}
  @include mqDown($bp) {}
  @include mqBetween($bp1, $bp2) {}

  // kebab-case (same as camelCase)
  @include mq-up($bp) {}
  @include mq-down($bp) {}
  @include mq-between($bp1, $bp2) {}
```
| arguments | type                | required | default value | description                              |
| --------- | ------------------- | -------- | ------------- | ---------------------------------------- |
| $bp       | `string` , `number` | `false`  | `md`          | `sm`, `md`, `lg`, `xl`, `Free px number` |
| $bp1      | `string` , `number` | `true`   | -             | `sm`, `md`, `lg`, `xl`, `Free px number` |
| $bp2      | `string` , `number` | `true`   | -             | `sm`, `md`, `lg`, `xl`, `Free px number` |


### Default setting values

```scss
$mq-breakpoints: (
  sm: 600px,
  md: 900px, // default
  lg: 1200px,
  xl: 1800px
) !default;

$mq-breakpoints-default-key: 'md' !default;

```

### Override default setting values

You can overwrite `$mq-breakpoints-default-key` and `$mq-breakpoints`.
Declare before `@import '_mq.scss'`. 
Specify one of the property names of `$mq-breakpoints` for `$mq-breakpoints-default-key`.

```scss
// override example
$mq-breakpoints: (
  micro: 320px,
  small: 620px,
  medium: 840px, // default
  large: 1280px,
  extra: 1900px,
  // .. Add as many as you like ..
);

$mq-breakpoints-default-key: 'medium';

@import 'path/to/node_modules/@rm-labo/mq-scss/_mq.scss';
```


## Example

Set the argument to $mq-breakpoints property.

```scss
.class-name {

  // MOBILE FIRST POLICY
  @include mqUp('sm') { /* 600px and up */ }
  @include mqUp('md') { /* 900px and up */ }
  @include mqUp('lg') { /* 1200px and up */ }
  @include mqUp('xl') { /* 1800px and up */ }
  
  // DESKTOP FIRST POLICY
  @include mqDown('xl') { /* 1799px and down */ }
  @include mqDown('lg') { /* 1199px and down */ }
  @include mqDown('md') { /* 899px and down */ }
  @include mqDown('sm') { /* 599px and down */ }

  // SPECIFY BY RANGE 
  @include mqBetween('sm', 'md') { /* 600px ~ 899px */ }
  @include mqBetween('sm', 'lg') { /* 600px ~ 1199px */ }
  @include mqBetween('md', 'lg') { /* 900px ~ 1199px */ }
  @include mqBetween('lg', 'xl') { /* 1200px ~ 1799px */ }

}
```

With no arguments, you can simply write with one breakpoint. 
`$mq-breakpoints-default-key`'s value applies.
The argument of `mqBetween()` cannot be omitted.


```scss
.class-name {
  // MOBILE FIRST POLICY
  @include mqUp() { /* 900px (default: md) and up */ }
  
  // DESKTOP FIRST POLICY
  @include mqDown() { /* 900px (default: md) and down */ }
}
```

It is also possible to directly specify a free px number as an argument. There is no problem if mixed with the key name.
In the case of mqBetween, it doesn't matter even if the size of the argument is reversed.

```scss
.class-name {
  @include mqUp(626px) { /* 626px and up */ }
  @include mqDown(782px) { /* 782px and down */ } 
  @include mqBetween('sm', 1600px) { /* 600px ~ 1599px */ }
  @include mqBetween(1234px, 850px) { /* 850px ~ 1233px */ }
}
```

For the height, you can use the following `@mixin`.

```scss
.class-name {

  // camelCase

  @include mqHeightUp('sm') { /* 600px and up */ }
  @include mqHeightUp(900px) { /* 900px and up */ }
  @include mqHeightUp('lg') { /* 1200px and up */ }
  @include mqHeightUp('xl') { /* 1800px and up */ }
  
  @include mqHeightDown('xl') { /* 1799px and down */ }
  @include mqHeightDown(1200px) { /* 1199px and down */ }
  @include mqHeightDown('md') { /* 899px and down */ }
  @include mqHeightDown('sm') { /* 599px and down */ }

  @include mqHeightBetween('sm', 'md') { /* 600px ~ 899px */ }
  @include mqHeightBetween('sm', 'lg') { /* 600px ~ 1199px */ }
  @include mqHeightBetween('md', 'lg') { /* 900px ~ 1199px */ }
  @include mqHeightBetween('lg', 'xl') { /* 1200px ~ 1799px */ }

  // kebab-case (same as camelCase)

  @include mq-height-up('sm') { /* 600px and up */ }
  @include mq-height-up('md') { /* 900px and up */ }
  @include mq-height-up('lg') { /* 1200px and up */ }
  @include mq-height-up('xl') { /* 1800px and up */ }
  
  @include mq-height-down('xl') { /* 1799px and down */ }
  @include mq-height-down('lg') { /* 1199px and down */ }
  @include mq-height-down('md') { /* 899px and down */ }
  @include mq-height-down('sm') { /* 599px and down */ }

  @include mq-height-between('sm', 'md') { /* 600px ~ 899px */ }
  @include mq-height-between('sm', 'lg') { /* 600px ~ 1199px */ }
  @include mq-height-between('md', 'lg') { /* 900px ~ 1199px */ }
  @include mq-height-between('lg', 'xl') { /* 1200px ~ 1799px */ }

}
```
It is also possible to specify the width if you want to use it together with the height.

```scss
.class-name {
  // camelCase
  @include mqWidthUp() { } // same as mqUp() 
  @include mqWidthDown() { } // same as mqDown()
  @include mqWidthBetween('sm', 'md') { } // same as mqWidthBetween('sm', 'md')

  // kebab-case
  @include mq-width-up() { } // same as mq-up()
  @include mq-width-down() { } // same as mq-down()
  @include mq-width-between('sm', 'md') { } // same as mq-between('sm', 'md')
}
```

## Licence

Licensed under MIT license.
You are free to use for your personal or commercial projects.

## Release notes

| Version | Description |
| ------- | ----------- |
| 1.0.0   | Launch      |