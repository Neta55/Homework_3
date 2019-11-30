"use strict";
console.log('Running main.js');



function main() {
    const header = document.querySelector('#header'); // piesienās pie id=header no .html faila

    const myTittle = document.createElement('h1'); // lielais virsraksts fizzbuzz rakstīts no .js faila
    myTittle.innerText = 'FIZZ-BUZZ';
    myTittle.classList.add('h1');
    header.appendChild(myTittle);


    const cont_nav = document.getElementById('cont_nav');
    cont_nav.classList.add('cont_nav');
    const cont_main = document.getElementById('cont_main');
    cont_main.classList.add('cont_main');




    const buttonGo = document.getElementById('buttonGo'); // izsauktas visas pogas un tām piešķirta funkcija
    buttonGo.addEventListener("click", addManyElements);
    const buttonCLEAR = document.getElementById('buttonCLEAR');
    buttonCLEAR.addEventListener("click", clearManyElements);
    const buttonRESET = document.getElementById('buttonRESET');
    buttonRESET.addEventListener("click", reset);
    const buttonFizz = document.getElementById('buttonFizz');
    buttonFizz.addEventListener("click", findOnlyFizz);
    const buttonBuzz = document.getElementById('buttonBuzz');
    buttonBuzz.addEventListener("click", findOnlyBuzz);
    const buttonFizzBuzz = document.getElementById('buttonFizzBuzz');
    buttonFizzBuzz.addEventListener("click", findOnlyFizzBuzz);


    addManyElements(); //lai palaižot parādītu defaultās vērtības
}


function reset() {
    initialNum.value = 1;
    lastNum.value = 100;
    fizzNum.value = 3;
    buzzNum.value = 5;
    addManyElements();
}


function clearManyElements() {
    while (cont_main.firstChild) {
        cont_main.removeChild(cont_main.firstChild)
    }
}

function addManyElements() {
    clearManyElements();

    let initialNum = Math.round(parseInt(document.getElementById('initialNum').value));
    let lastNum = Math.round(parseInt(document.getElementById('lastNum').value));
    let fizzNum = Math.round(parseInt(document.getElementById('fizzNum').value));
    let buzzNum = Math.round(parseInt(document.getElementById('buzzNum').value));
    validateInput();
    for (let i = initialNum; i <= lastNum; i++) {
        const elem = document.createElement('div');
        elem.id = "elem=" + i;
        cont_main.appendChild(elem);

        if (i % fizzNum === 0 && i % buzzNum === 0) {
            elem.setAttribute("class", "FizzBuzz");
            elem.innerText = "FizzBuzz, " + i;

        }
        else if (i % fizzNum === 0) {
            elem.setAttribute("class", "Fizz");
            elem.innerText = "Fizz, " + i;

        }
        else if (i % buzzNum === 0) {
            elem.setAttribute("class", "Buzz");
            elem.innerText = "Buzz, " + i;

        }
        else {
            elem.setAttribute("class", "ordinary");
            elem.innerText = i;

        }
    }
}


function findOnlyFizzBuzz() {
    clearManyElements();
    let initialNum = Math.round(parseInt(document.getElementById('initialNum').value));
    let lastNum = Math.round(parseInt(document.getElementById('lastNum').value));
    let fizzNum = Math.round(parseInt(document.getElementById('fizzNum').value));
    let buzzNum = Math.round(parseInt(document.getElementById('buzzNum').value));
    validateInput();
    for (let i = initialNum; i <= lastNum; i++) {
        const elem = document.createElement('div');
        elem.id = "elem=" + i;
        cont_main.appendChild(elem);

        if (i % fizzNum === 0 && i % buzzNum === 0) {
            elem.setAttribute("class", "FizzBuzz");
            elem.innerText = "FizzBuzz, " + i;

        }

    }
}

function findOnlyFizz() {
    clearManyElements();
    let initialNum = Math.round(parseInt(document.getElementById('initialNum').value));
    let lastNum = Math.round(parseInt(document.getElementById('lastNum').value));
    let fizzNum = Math.round(parseInt(document.getElementById('fizzNum').value));
    validateInput();
    for (let i = initialNum; i <= lastNum; i++) {
        const elem = document.createElement('div');
        elem.id = "elem=" + i;
        cont_main.appendChild(elem);

        if (i % fizzNum === 0) {
            elem.setAttribute("class", "Fizz");
            elem.innerText = "Fizz, " + i;

        }

    }
}

function findOnlyBuzz() {
    clearManyElements();
    let initialNum = Math.round(parseInt(document.getElementById('initialNum').value));
    let lastNum = Math.round(parseInt(document.getElementById('lastNum').value));
    let buzzNum = Math.round(parseInt(document.getElementById('buzzNum').value));
    validateInput();
    for (let i = initialNum; i <= lastNum; i++) {
        const elem = document.createElement('div');
        elem.id = "elem=" + i;
        cont_main.appendChild(elem);

        if (i % buzzNum === 0) {
            elem.setAttribute("class", "Buzz");
            elem.innerText = "Buzz, " + i;

        }

    }
}

function validateInput() {
    let initialNum = Math.round(parseInt(document.getElementById('initialNum').value));
    let lastNum = Math.round(parseInt(document.getElementById('lastNum').value));

    if (initialNum > lastNum) {
        alert('Vērtība ievades lauciņā "LĪDZ" nedrīkst būt lielāka par vērtību ievades lauciņā "NO"!');
        return false;
    }

    else return true;
}

main();