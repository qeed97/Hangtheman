let abc = "abcdefghijklmnopqrstuvwxyz";

let secretword = "codecool";

function displayByLetter (word, classOf, clicked = ''){

    word = word.split('');
    
    const divTarget = document.querySelector(`.${classOf}`);

    divTarget.innerHTML = '';

    word.forEach(letter => {
        divTarget.insertAdjacentHTML('beforeend',`<div class='${classOf === 'alphabet' ? 'letter' : 'secret'}'>${classOf === 'alphabet' || clicked === letter ? letter : ''}</div>`);
    });
}

function checkClickedInSecret (clicked){
    if (secretword.includes(clicked)) {
        displayByLetter(secretword, 'secretWord', clicked);
    } 
} 

const loadEvent = () => {

    const startButton = document.querySelector('.startGame');

    startButton.addEventListener('click', () => {

        displayByLetter(abc, 'alphabet');

        displayByLetter(secretword, 'secretWord');
        
        const alphabetDiv = document.querySelectorAll('.letter');
    
        alphabetDiv.forEach(letterdiv => {

            letterdiv.addEventListener('click', event => {
                checkClickedInSecret(event.target.textContent);
                console.log(event.target.textContent);
            });

        });

    });

}

window.addEventListener('load',loadEvent);