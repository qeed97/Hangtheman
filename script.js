let abc = "abcdefghijklmnopqrstuvwxyz";

let secretword = "codecool";

function displayByLetter (word, classOf){

    word = word.split('');
    
    const divTarget = document.querySelector(`.${classOf}`);

    word.forEach(letter => {
        divTarget.insertAdjacentHTML('beforeend',`<div class='${classOf === 'alphabet' ? 'letter' : 'secret'}'>${classOf === 'alphabet' ? letter : ''}</div>`);
    });
}

const loadEvent = () => {

    const startButton = document.querySelector('.startGame');

    startButton.addEventListener('click', () => {

        displayByLetter(abc, 'alphabet');

        displayByLetter(secretword, 'secretWord');

    });

    const alphabetDiv = document.querySelectorAll('.letter');

    alphabetDiv.forEach(letterdiv => {
        letterdiv.addEventListener('click', event => {
            console.log(event.target.textContent);
        });
    });
}

window.addEventListener('load',loadEvent);