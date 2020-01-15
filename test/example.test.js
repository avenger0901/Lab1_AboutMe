// IMPORT MODULES under test here:
import compareNum from '../compareNum.js';

const test = QUnit.test;


QUnit.module('Testing if numbers compare');

test('test numbers are identical', assert => {
    const Uguess = 5;
    const expected = 0;
    
    const result = compareNum(Uguess, 5);
    
    assert.equal(result, expected);
});
    
test('test numbers are lower', assert => {
    const Uguess = 5;
    const expected = -1;
    
    const result = compareNum(Uguess, 6);
    
    assert.equal(result, expected);
});
    
test('test numbers are higher', assert => {
    const Uguess = 5;
    const expected = 1;
    
    const result = compareNum(Uguess, 4);
    
    assert.equal(result, expected);
});
    



