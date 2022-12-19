// Variables
let amount = 0;
let amountArray = [];
// Elements
let inputElement = document.getElementById('amount');
let enterBtnElement = document.getElementById('enter');
let shuffleBtnElement = document.getElementById('shuffle');
let containerElement = document.querySelector('div');
// let containerElement = document.getElementById('container'); 
// returns an error => its not a function. "div" is not a DOM object,is just a string,and string has no string.appendChild. 

// creates the amount of Array given from the user.
function setAmount() {
    amount = inputElement.value;
    amountArray = [];
    for(let i = 1; i <= amount; i++){
        amountArray.push(i);
    }
    console.log(amountArray)
    // creating elements based on the input 
    createElements(amountArray)
};

function createElements( amountArray ) {
    containerElement.innerHTML = null;

    amountArray.map( (item) => {
        let pElement = document.createElement('p');
        pElement.setAttribute('id', '')
        pElement.innerHTML = item;
        containerElement.appendChild(pElement);
    });
};

function shuffleAmount() {
    amountArray.sort( () =>  0.5 - Math.random())

    containerElement.innerHTML = null;
    amountArray.map( (item) => {
        let pElement = document.createElement('p');
        pElement.setAttribute('id', '')
        pElement.innerHTML = item;
        containerElement.appendChild(pElement);
    });
    console.log(amountArray)
};

enterBtnElement.addEventListener('click', setAmount);
shuffleBtnElement.addEventListener('click', shuffleAmount);