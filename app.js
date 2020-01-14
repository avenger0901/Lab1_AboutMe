import isYes from '/isYes.js';
const quizbutton = document.getElementById('quiz');
const total = document.getElementById('total');
const red = document.getElementById('reward');
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
    total.textContent = `${Name}, you got ${count}/3 correct.`;
    if (count <= 3) {
        red.classList.add('notcorrect');
    }

});
