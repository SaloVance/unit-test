// node ./lib/inject.js ./test/6.chai.inject.lib.js
const State = require('./src/state.js');
const expect = require('./chai').expect;

test('when one param', () => {
    let state = new State('http://colla.me?a=3');
    expect(state.params.a).to.equal('3');
});

test('when two params', () => {
    let state = new State('http://colla.me?a=3&b=4');
    expect(state.params.a).to.equal('3');
    expect(state.params.b).to.equal('4');
});

test('when params not valid', () => {
    let state = new State('http://colla.me?a=3&b');
    expect(state.params.a).to.equal('5');
    expect(state.params.b).to.equal(undefined);
});