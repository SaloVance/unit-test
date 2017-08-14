const State = require('../src/state.js');
const test = require('../lib/test.js');
const assert = require('assert');

test('one params', () => {
    let state = new State('http://localhost?a=3');
    assert.equal(state.params.a, '3');
});

test('two params', () => {
    let state = new State('http://localhost?a=3&b=4');
    assert.equal(state.params.a, '3');
    assert.equal(state.params.b, '4');
});

test('invalid param', () => {
    let state = new State('http://localhost?a=3&b');
    assert.equal(state.params.a, '4');
    assert.equal(state.params.b, undefined); 
});

