// Variables
let amount = 0;
let amountArray = [];
// Elements
let bodyElement = document.querySelector('body');
let toggleElement = document.getElementById('toggle-container');
let headerElement = document.querySelector('h1');
let aboutElement = document.getElementById('about');
let inputElement = document.getElementById('amount');
let enterBtnElement = document.getElementById('enter');
let shuffleBtnElement = document.getElementById('shuffle');
let containerElement = document.getElementById('container');
// let containerElement = document.getElementById('container'); 
// returns an error => its not a function. "div" is not a DOM object,is just a string,and string has no string.appendChild. 

// toggle function
toggleElement.onclick = function() {
    bodyElement.classList.toggle('active');
    toggleElement.classList.toggle('active');
    headerElement.classList.toggle('active');
    aboutElement.classList.toggle('active');
    containerElement.classList.toggle('active');
}

// creates the amount of Array given from the user.
function setAmount() {
    amount = inputElement.value;
    amountArray = [];
    for(let i = 1; i <= amount; i++){
        amountArray.push(i);
    }
    // console.log(amountArray)
    // creating elements based on the input 
    createElements(amountArray)
};

function createElements( amountArray ) {
    containerElement.innerHTML = null;

    amountArray.map( (item) => {
        let pElement = document.createElement('p');
        pElement.setAttribute('class', 'values')
        pElement.innerHTML = item;
        containerElement.appendChild(pElement);
    });
};

function shuffleAmount() {
    amountArray.sort( () =>  0.5 - Math.random())

    containerElement.innerHTML = null;
    amountArray.map( (item) => {
        let pElement = document.createElement('p');
        pElement.setAttribute('class', 'values')
        pElement.innerHTML = item;
        containerElement.appendChild(pElement);
    });
    // console.log(amountArray)
};

enterBtnElement.addEventListener('click', setAmount);
shuffleBtnElement.addEventListener('click', shuffleAmount);