// inject test function into test specs
const fs = require('fs');
const Module = require('module');

// accept second param to be spec file
let file = fs.readFileSync('./' + process.argv[2], 'utf8');

// adjust folder
// file = file.replace('require((.*)?)', 'require(./$1)');

new Module()._compile('const test = require(\'./lib/test.js\');' + file, process.argv[2]);