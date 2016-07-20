var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var pluralize = require('pluralize');

// insert defaults here
var defaults = {
	size:null,
	plural:false,
}

var data = require('./data.js');


var self = function(options){
	options = _.extend({},defaults,options);

	if(options.plural){
		return self.plural(self.all(options.size));
	} else {
		return self.all(options.size);
	}
}

self.all = function(size){
	return size===null ? data : _.sampleSize(data,size);
}

self.plural = function(data){
	return _.map(data,function(val){
		return pluralize(val);
	})
}


module.exports = self;
