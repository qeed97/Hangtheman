let abc = "abcdefghijklmnopqrstuvwxyz";

let secretword = "codecool";

function displayByLetter (word, classOf){

    word = word.split('');
    
    const divTarget = document.querySelector(`.${classOf}`);

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
           }
        });
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