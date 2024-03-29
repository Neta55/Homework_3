"use strict";
console.log('Running main.js');

function main() {
    const header = document.querySelector('#header');

    const myTittle = document.createElement('h1'); // lielais virsraksts fizzbuzz
    myTittle.innerText = 'FIZZ-BUZZ';
    myTittle.classList.add('h1')
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


    addManyElements(cont_main); //lai palaižot parādītu defaultās vērtības
}


function reset() {
    initialNum.value = 1;
    lastNum.value = 100;
    fizzNum.value = 3;
    buzzNum.value = 5;
}


function clearManyElements() {
    while (cont_main.firstChild) {
        cont_main.removeChild(cont_main.firstChild)
    }
}

function addManyElements(parent) {
    clearManyElements();
    console.log("Iztīrīts");
    console.log("Atrasti FizzBuzz");

    var initialNum = Math.round(parseInt(document.getElementById('initialNum').value));
    var lastNum = Math.round(parseInt(document.getElementById('lastNum').value));
    var fizzNum = Math.round(parseInt(document.getElementById('fizzNum').value));
    var buzzNum = Math.round(parseInt(document.getElementById('buzzNum').value));
    console.log("initialNum-" + initialNum);
    console.log("lastNum-" + lastNum);
    console.log("fizzNum-" + fizzNum);
    console.log("buzzNum-" + buzzNum);

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
    addManyElements();
    let ordinaryClass = cont_main.getElementsByClassName("ordinary");
    while (ordinaryClass[0]) { ordinaryClass[0].parentNode.removeChild(ordinaryClass[0]) };
    let fizzClass = cont_main.getElementsByClassName("Fizz");
    while (fizzClass[0]) { fizzClass[0].parentNode.removeChild(fizzClass[0]) };
    let buzzClass = cont_main.getElementsByClassName("Buzz");
    while (buzzClass[0]) { buzzClass[0].parentNode.removeChild(buzzClass[0]) };

}

function findOnlyFizz() {
    clearManyElements();
    addManyElements();
    let ordinaryClass = cont_main.getElementsByClassName("ordinary");
    while (ordinaryClass[0]) { ordinaryClass[0].parentNode.removeChild(ordinaryClass[0]) };
    let fizzbuzzClass = cont_main.getElementsByClassName("FizzBuzz");
    while (fizzbuzzClass[0]) { fizzbuzzClass[0].parentNode.removeChild(fizzbuzzClass[0]) };
    let buzzClass = cont_main.getElementsByClassName("Buzz");
    while (buzzClass[0]) { buzzClass[0].parentNode.removeChild(buzzClass[0]) };

}

function findOnlyBuzz() {
    clearManyElements();
    addManyElements();
    let ordinaryClass = cont_main.getElementsByClassName("ordinary");
    while (ordinaryClass[0]) { ordinaryClass[0].parentNode.removeChild(ordinaryClass[0]) };
    let fizzbuzzClass = cont_main.getElementsByClassName("FizzBuzz");
    while (fizzbuzzClass[0]) { fizzbuzzClass[0].parentNode.removeChild(fizzbuzzClass[0]) };
    let fizzClass = cont_main.getElementsByClassName("Fizz");
    while (fizzClass[0]) { fizzClass[0].parentNode.removeChild(fizzClass[0]) };
}


main();
