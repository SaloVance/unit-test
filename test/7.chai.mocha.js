// npm test
const State = require('../src/state.js');
const expect = require('chai').expect;

describe('State should', () => {
    it('when one param', () => {
        let state = new State('http://colla.me?a=3');
        expect(state.params.a).to.equal('3');
    });

    it('when two params', () => {
        let state = new State('http://colla.me?a=3&b=4');
        expect(state.params.a).to.equal('3');
        expect(state.params.b).to.equal('4');
    });

    it('when params not valid', () => {
        let state = new State('http://colla.me?a=3&b');
        expect(state.params.a).to.equal('5');
        expect(state.params.b).to.equal(undefined);
    });
});
