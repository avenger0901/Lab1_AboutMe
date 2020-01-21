
import isYes from '/isYes.js';
import percentF from '/percent.js';
const quizbutton = document.getElementById('quiz');
const total = document.getElementById('total');
const reward = document.getElementById('reward');

quizbutton.addEventListener('click', () =>{

    const Name = prompt('What is your name?');
    const confirmation = confirm(`${Name},Are you sure you are prepared to take the quiz?`);
    if (confirmation === false) return;
    const answer1 = prompt('Do you like zebra?');
    const answer2 = prompt('Zebra don\'t drink water, Right?');
    const answer3 = prompt('Are Zebra cute?');
    let count = 0;
    if (isYes(answer1)) count += 1;
    if (!isYes(answer2)) count += 1;
    if (isYes(answer3)) count += 1;
    const percentage = percentF(count, 3) * 100;
    total.textContent = `${Name}, you got ${count}/3 correct. That is ${percentage.toFixed(2)} %`;

    if (count === 3) {
        reward.classList.add('reward');
       
    }
    if (count < 3) {
        reward.classList.add('notcorrect');
    }

});

