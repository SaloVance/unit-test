const State = require('../src/state.js');
const assert = require('assert');
const test = (title, spec) {
    try {
        spec();
        console.log(`spec:${title} ok`);
    } catch (e) {
        console.log(`spec:${title} fail`);
    }
}

test('when one param', () => {
    let state = new State('http://colla.me?a=3');
    assert.equal(state.params.a, '3');
});


test('when two params', () => {
    let state = new State('http://colla.me?a=3&b=4');
    assert.equal(state.params.a, '3');
    assert.equal(state.params.b, '4');
});


test('when param not valid', () => {
    let state = new State('http://colla.me?a=3&b');
    assert.equal(state.params.a, '4');
    assert.equal(state.params.b, undefined);
});