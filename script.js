let abc = "abcdefghijklmnopqrstuvwxyz".split();

const divAbc = document.querySelector('.alphabet');

abc.forEach(word => {
    divAbc.insertAdjacentHTML('beforeend',`<div class='letter'>${word}</div>`);
})