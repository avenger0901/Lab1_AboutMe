import compareNum from '/compareNum.js';
const GuessButton = document.getElementById('guessbutton');
const inputElement = document.getElementById('yournum');
const correctNumber = Math.floor(Math.random() * 20) ;
const chance_remain = document.getElementById('remaining');
//add if function if input>computerNumner{tooHightooLow.textContent ='The number is too high'}
const tooHightooLow = document.getElementById('hint');
const img = document.getElementById('show-yoda');
const showText = document.getElementById('hidden-text');

let chances = 5;


GuessButton.addEventListener('click', () =>{
    const guess = Number(inputElement.value);
    chances--;
    chance_remain.textContent = chances;
    //console.log(correctNumber);
    //console.log(guess);
    //console.log(compareNum(guess, correctNumber));
    if (compareNum(guess, correctNumber) === 1) {
        //console.log('angela');
        tooHightooLow.textContent = `Your number is too big`;
    } else if (compareNum(guess, correctNumber) === -1) {
        tooHightooLow.textContent = `Your number is too small`;
    } else {
        tooHightooLow.textContent = `You are right!`;
        img.classList.remove('hidden');
        showText.classList.remove('hidden-text');
    }
    



});
