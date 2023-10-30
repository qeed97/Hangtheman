import { words } from './data.js';

//console.log(words);

let abc = "abcdefghijklmnopqrstuvwxyz";

let secretword 

const infoDiv = document.querySelector('.info');

let life = 7;

let winCounter = 0;

const playAreaDiv = document.querySelector('.play-area');

function displayByLetter (word, classOf){

    life = 7;

    word = word.split('');
    
    const divTarget = document.querySelector(`.${classOf}`);

    divTarget.innerHTML = '';

    word.forEach(letter => {
        divTarget.insertAdjacentHTML('beforeend',`<div class='${classOf === 'alphabet' ? 'letter' : 'secret'}'>${classOf === 'alphabet' ? letter : ''}</div>`);
    });
}

function getMatchingIndexes (clicked)  {

    let mathingIndex = [];

    secretword.split('').forEach((letter,index) => {

        if (clicked === letter){

            mathingIndex.push(index);

        }

    });

    return mathingIndex;

}

function checkClickedInSecret (clicked){

    if (secretword.includes(clicked)) {

        const mathingIndexes = getMatchingIndexes(clicked);

        secretword.split('').forEach((element,index) => {

           if (mathingIndexes.includes(index)){

            const secretDivs = document.querySelectorAll('.secret');

            secretDivs[index].textContent = element;

            winCounter ++;

           }

        });

    } 
    else { //(!isGameOver()){

        life --;

        if (life > 0){
            infoDiv.textContent = `Wrong you lost a life, you only have ${life} left`;
            setTimeout(() => {
                infoDiv.textContent = 'Please click on a letter!';
            },1000);
        }
    }

} 

function isGameOver (){
    if (life === 0){
        infoDiv.textContent = 'you lost';
        playAreaDiv.classList.add('disabled');
    }
    else if (life > 0 && secretword.length === winCounter){
        infoDiv.textContent = 'you won';
        playAreaDiv.classList.add('disabled');
    }
}

function startGame (){

    secretword = words[Math.round(Math.random()*words.length)];

    console.log(secretword);

    playAreaDiv.classList.remove('disabled');

    displayByLetter(abc, 'alphabet');

    displayByLetter(secretword, 'secretWord');
    
    infoDiv.textContent = 'Please click on a letter!';

    const alphabetDiv = document.querySelectorAll('.letter');

    alphabetDiv.forEach(letterdiv => {

        letterdiv.addEventListener('click', event => {

            event.target.classList.add('disabled','disabledcolor');

            checkClickedInSecret(event.target.textContent);

            console.log(event.target.textContent);

            isGameOver();

            console.log(winCounter);

        });

    });
}

const loadEvent = () => {

    infoDiv.textContent = 'Welcome! Please select start'

    const startButton = document.querySelector('.startGame');

    startButton.addEventListener('click',startGame);

}

window.addEventListener('load',loadEvent);