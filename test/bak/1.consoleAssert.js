// test by console assert
const State = require('../src/state.js');
let state = new State('http://localhost?a=3');
console.assert(state.params.a === '3');

state = new State('http://localhost?a=3&b=4');
console.assert(state.params.a === '3');
console.assert(state.params.b === '4');

state = new State('http://localhost?a=3&b');
console.assert(state.params.a === '3');
console.assert(state.params.b === undefined);
