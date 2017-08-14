const State = require('../src/state.js');
const assert = require('assert');

let state = new State('http://colla.me?a=3');
assert.equal(state.params.a, '3');

state = new State('http://colla.me?a=3&b=4');
assert.equal(state.params.a, '3');
assert.equal(state.params.b, '4');

state = new State('http://colla.me?a=3&b');
assert.equal(state.params.a, '3');
assert.equal(state.params.b, undefined);