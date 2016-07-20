var expect = require('chai').expect;
var self = require('./');

describe('data-creatures', function() {

	it('should do something', function(done) {
		console.log(self({
			size:2,
			plural:true
		}))
		done();
	});
})
