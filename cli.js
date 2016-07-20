#!/usr/bin/env node
'use strict';
var meow = require('meow');
var self = require('./');

var cli = meow(`
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
`);

var defaults = {
	size:1,
	plural:null,
}

var options = {
	size:(cli.flags.all ? null : (cli.flags.size ? cli.flags.size : 1)),
	plural:cli.flags.plural
}

console.log(self(options).join('\n'));
