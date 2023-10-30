let abc = "abcdefghijklmnopqrstuvwxyz";

let secretword = "codecool";

function displayByLetter (word, classOf){

    word = word.split('');
    
    const divTarget = document.querySelector(`.${classOf}`);

    word.forEach(letter => {
        divTarget.insertAdjacentHTML('beforeend',`<div class='${classOf === 'alphabet' ? 'letter' : 'secret'}'>${classOf === 'alphabet' ? letter : ''}</div>`);
    });
}

displayByLetter(abc, 'alphabet');
displayByLetter(secretword, 'secretWord');