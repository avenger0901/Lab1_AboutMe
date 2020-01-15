const GuessButton = document.getElementById('guessbutton');
const inputElement = document.getElementById('yournum');
const computerNumber = Math.floor(Math.random() * 10) ;
const chance_remain = document.getElementById('remaining');
//add if function if input>computerNumner{tooHightooLow.textContent ='The number is too high'}
const tooHightooLow = document.getElementById('hint');
let chances = 5;

GuessButton.addEventListener('click', () =>{
    chances--;
    chance_remain.textContent = chances;
    console.log(computerNumber);
    if (inputElement.value > computerNumber) {
        //console.log('angela');
        tooHightooLow.textContent = `Your number is too big`;
    } else if (inputElement.value < computerNumber) {
        tooHightooLow.textContent = `Your number is too small`;
    } else {
        tooHightooLow.textContent = `You are right!`;
    }
    



});
