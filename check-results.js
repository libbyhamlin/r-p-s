//checks the result of the computer.
// takes parameters player and computer.
//returns string of either draw (throws are identical), win (player wins), or lose (player loses)
const checkResult = (player, computer) => {
    if (player === computer) {
        return 'draw';
    
    } else if (player === 'rock' && computer === 'paper' || player === 'scissors' && computer === 'rock' || player === 'paper' && computer === 'scissors') {
        return 'computer wins';
    
    } else {
        return 'player wins';
    }
    
};








export default checkResult;