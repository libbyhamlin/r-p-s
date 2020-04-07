const game = () => {
    let pScore = 0;
    let cScore = 0; 

//start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button'); 
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            // console.log('startGame');
        });
    };

    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('player-hand');
        const computerHand = document.querySelector('computer-hand');
        const hands = document.querySelectorAll('.hands img');
        
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });
        
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
               
            //Computer choice    
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //Here is where we call compareHands/checkResult
                compareHands(this.textContent, computerChoice);
                //Update images
                playerHands.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                
            });
        });
    };       
    
    const compareHands = (playerChoice, computerChoice) => {
      //Update text
        const winner = document.querySelector('.winner');
        //Check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie.';
            return;
        }

        //check for rock
        if (playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
            } else {
                winner.textContent = 'Computer Wins';
                return;
            }
        }

        //check for paper
        if (playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
            } else {
                winner.textContent = 'Player Wins';
                return;

        //check for scissors
        
    };


    //Is call all the inner function
    startGame();
    playMatch();
};
    


//start the game function
game();