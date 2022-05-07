const assert = require('assert');
const calculator = require('./calculator');

describe('String Calculator add', function () {

    it('should return 0 for empty string', function () {
        let actual = calculator.add('');
        assert.equal(actual, 0);
      });


});