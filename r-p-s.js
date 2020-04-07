//import relevant functions
import checkResult from './check-result.js';
// import getRandomThrow from './get-random-throw.js';

//Create a whole function for the entire game, but also create separate ones that serve specific actions.
//Scoping everything inside this function to avoid global variables.

const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Rather than adding all the elements up top I'm restraining myself to create all the variables inside the functions where they are needed.
    //There's no point to have this function above.
    const startGame = () => {
        const playBtn = document.querySelector('.intro-area button');
        const introScreen = document.querySelector('.intro-area');
        const match = document.querySelector('.match');

        //Everytime we click we will run an action
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeout');
            match.classList.add('fadeIn');
        });
    };

    //Play match
    Const playMatch = () => {
        const options = document.querySelectorAll('.option-area button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelector('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
   });


    //Call all the inner function (Executes all the small code).
    startGame();
    playMatch();
};

//Start the game function (This were you execute the big one.)
game()};
