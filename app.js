import compareNum from '/compareNum.js';
const GuessButton = document.getElementById('guessbutton');
const inputElement = document.getElementById('yournum');
const correctNumber = Math.floor(Math.random() * 10) ;
const guess = inputElement.value;
const chance_remain = document.getElementById('remaining');
//add if function if input>computerNumner{tooHightooLow.textContent ='The number is too high'}
const tooHightooLow = document.getElementById('hint');
const img = document.getElementById('show-yoda');
const showText = document.getElementById('hidden-text');

let chances = 5;


GuessButton.addEventListener('click', () =>{
    chances--;
    chance_remain.textContent = chances;
    //console.log(computerNumber);
    if (compareNum === '1') {
        //console.log('angela');
        tooHightooLow.textContent = `Your number is too big`;
    } else if (compareNum === '-1') {
        tooHightooLow.textContent = `Your number is too small`;
    } else {
        tooHightooLow.textContent = `You are right!`;
        img.classList.remove('hidden');
        showText.classList.remove('hidden-text');
    }
    



});
