//assuming input is either rock, paper, or scissors
//9 possible outcomes means 9 tests

// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResult from '../check-results.js';

const test = QUnit.test;

test('player throws rock, computer throws rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock';


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const expected = 'draw';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
