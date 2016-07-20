# Data-Creatures

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
<!-- [![Test coverage][coveralls-image]][coveralls-url] -->

> Hard data of RPG creatures

## Installation

```
npm install data-creatures --save
```

## Usage

```javascript
var data = require('data-creatures');
data();
// return all data
// orc
// elf
// minotaur
// ...


// All options
data({
	size:2, // amount
	plural:true, // return words in plural
})
// return 
// trolls
// elves
```

## CLI

```
npm install data-creatures -g
```

```
Examples
  $ data-creatures
  elf

  $ data-creatures --plural
  elves

  $ data-creatures --all
  orc
  elf
  ...

Options
  --all  Get all the words instead of a random word
  --size  Get this amount of words
  --plural  Get words in plural
```

## Contributing 

Contributions are very welcome. <br>
If you have any new creature that are not in the list please submit.<br>
All the hard data are in `data.js`<br>
<br>
Plural words are generated by the module [blakeembrey/pluralize](https://github.com/blakeembrey/pluralize)<br>
Irregular rules should be registred.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/data-creatures.svg?style=flat
[npm-url]: https://npmjs.org/package/data-creatures
[downloads-image]: https://img.shields.io/npm/dm/data-creatures.svg?style=flat
[downloads-url]: https://npmjs.org/package/data-creatures
[travis-image]: https://img.shields.io/travis/blakeembrey/data-creatures.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/data-creatures
<!-- [coveralls-image]: https://img.shields.io/coveralls/blakeembrey/data-creatures.svg?style=flat 
[coveralls-url]: https://coveralls.io/r/blakeembrey/data-creatures?branch=master
-->
