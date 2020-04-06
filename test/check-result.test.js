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

test('player throws rock, computer throws paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
   
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const expected = 'computer wins';
    

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws rock, computer throws scissors ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors';
   


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const expected = 'player wins';
    

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws paper, computer throws paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'paper';
   


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const expected = 'draw';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws paper, computer throws rock ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'rock';
   


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const expected = 'player wins';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws paper, compputer throws scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'scissors';
   


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const expected = 'computer wins';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws scissors, computer throws scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const compputer = 'scissors';


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, compputer);
    const expected = 'draw';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws scissors, computer throws rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const compputer = 'rock';


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, compputer);
    const expected = 'computer wins';
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws scissors, computer throws paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';


    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const expected = 'player wins';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
