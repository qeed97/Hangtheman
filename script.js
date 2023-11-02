import { words } from './data.js';

//console.log(words);

let abc = "abcdefghijklmnopqrstuvwxyz";

let secretword;

const infoDiv = document.querySelector('.info');

let life = 7;

let winCounter = 0;

const playAreaDiv = document.querySelector('.play-area');

const hangManDiv = document.querySelector('.hangman-area');

const secretInput = document.querySelector('.player-input');

function displayByLetter (word, classOf, isGameOver = false){
    
    word = word.split('');
    
    const divTarget = document.querySelector(`.${classOf}`);

    divTarget.innerHTML = '';

    if (!isGameOver) {
        word.forEach(letter => {
            divTarget.insertAdjacentHTML('beforeend',`<div class='${classOf === 'alphabet' ? 'letter' : 'secret'}'>${classOf === 'alphabet' ? letter : ''}</div>`);
        });
    }else {
        word.forEach(letter => {
            divTarget.insertAdjacentHTML('beforeend', `<div class='secret'>${letter}</div>`);
        })
    }
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

        hangManDiv.innerHTML = `<img src=img/health${life}.png />`;

        if (life > 0){
            infoDiv.textContent = `Wrong you lost a life! You only have ${life} left!`;
            setTimeout(() => {
                infoDiv.textContent = 'Please click on a letter!';
            },1000);
        }
    }

} 

function isGameOver (){
    if (life === 0){
        infoDiv.textContent = 'You Lost!';
        playAreaDiv.classList.add('disabled');
        displayByLetter(secretword,'secretWord', true);
    }
    else if (life > 0 && secretword.length === winCounter){
        infoDiv.textContent = 'You Won!';
        playAreaDiv.classList.add('disabled');
        hangManDiv.innerHTML = `<img src=img/victoryIMG.png />`
    }
}

function startGame (){

    life = 7;

    winCounter = 0;
    
    secretword = secretInput.value;
    secretInput.value = '';

    if (secretword === '') {
        secretword = words[Math.round(Math.random()*words.length)];
    }
    
    console.log(secretword);
    
    playAreaDiv.classList.remove('disabled');
    
    displayByLetter(abc, 'alphabet');
    
    displayByLetter(secretword, 'secretWord');
    
    infoDiv.textContent = 'Please click on a letter!';
    
    const alphabetDiv = document.querySelectorAll('.letter');
    
    hangManDiv.innerHTML = `<img src=img/baseIMG.png />`;
    
    alphabetDiv.forEach(letterdiv => {
        
        letterdiv.addEventListener('click', event => {
            
            event.target.classList.add('disabled','disabledcolor');
            
            checkClickedInSecret(event.target.textContent);
            
            console.log(event.target.textContent);
            
            isGameOver();
            
            console.log(winCounter);
            
            //hangManDiv.insertAdjacentHTML('beforeend',`<img src=img/healt${life}.png />`);
            
        });
        
    });
}

const loadEvent = () => {
    
    infoDiv.textContent = "Welcome! Press 'New Game' to start the game!";
    
    const startButton = document.querySelector('.startGame');
    
    startButton.addEventListener('click',startGame);
    
}

window.addEventListener('load',loadEvent);