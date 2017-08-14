// node ./lib/inject.js ./test/5.nodeAssert.inject.lib.js
const State = require('./src/state.js');
const assert = require('assert');

test('should works when one param', () => {
    let state = new State('http://colla.me?a=3');
    assert.equal(state.params.a, '3');
});

test('should works when two params', () => {
    let state = new State('http://colla.me?a=3&b=4');
    assert.equal(state.params.a, '3');
    assert.equal(state.params.b, '4');
});

test('should ignore invalid param', () => {
    let state = new State('http://colla.me?a=3&b');
    assert.equal(state.params.a, '4');
    assert.equal(state.params.b, undefined);
});