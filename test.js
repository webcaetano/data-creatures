var expect = require('chai').expect;
var _ = require('lodash');
var self = require('./');

describe('data-creatures', function() {

	it('should return all  data', function(done) {
		var resp = self();

		expect(resp).length.to.be.gt(30);
		done();
	});

	it('should return a sample with certain size', function(done) {
		var resp = self({
			size:10
		});

		expect(resp).length.to.be.lengthOf(10);
		done();
	});

	it('should pluralize', function(done) {
		var resp = self({
			plural:true
		});

		expect(_.includes(resp,'orcs')).to.be.true;
		expect(_.includes(resp,'elves')).to.be.true;
		expect(_.includes(resp,'dragons')).to.be.true;
		expect(resp).length.to.be.gt(30);
		done();
	});
})
