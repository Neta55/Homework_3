
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



    // const initialNum = document.getElementById('initialNum').value;
    // const lastNum = document.getElementById('lastNum').value;
    // const fizzNum = document.getElementById('fizzNum').value;
    // const buzzNum = document.getElementById('buzzNum').value;
    // console.log("initialNum-" + initialNum);
    // console.log("lastNum-" + lastNum);
    // console.log("fizzNum-" + fizzNum);
    // console.log("buzzNum-" + buzzNum);


    const buttonGo = document.getElementById('buttonGo');
    buttonGo.addEventListener("click", addManyElements)
    const buttonRESET = document.getElementById('buttonRESET');
    buttonRESET.addEventListener("click", clearManyElements)
    const buttonFizz = document.getElementById('buttonFizz');
    const buttonBuzz = document.getElementById('buttonBuzz');
    const buttonFizzBuzz = document.getElementById('buttonFizzBuzz');


    addManyElements(cont_main);
}

// function addElem(parent, obj) {
//     const elem = document.createElement(obj.tag);
//     elem.id = obj.id;
//     elem.innerText = obj.innerText;
//     parent.appendChild(elem);
//     // return elem;
// }

function clearManyElements() {
    while (cont_main.firstChild) {
        cont_main.removeChild(cont_main.firstChild)
    }
}

function addManyElements(parent) {
    clearManyElements();
    console.log("Iztīrīts");
    console.log("Atrasti FizzBuzz");
    const initialNum = document.getElementById('initialNum').value;
    const lastNum = document.getElementById('lastNum').value;
    const fizzNum = document.getElementById('fizzNum').value;
    const buzzNum = document.getElementById('buzzNum').value;
    console.log("initialNum-" + initialNum);
    console.log("lastNum-" + lastNum);
    console.log("fizzNum-" + fizzNum);
    console.log("buzzNum-" + buzzNum);
    for (let i = initialNum; i <= lastNum; i++) {
        const elem = document.createElement('div');
        elem.id = "elem=" + i;

        cont_main.appendChild(elem);

        if (i % fizzNum === 0 && i % buzzNum === 0) {
            elem.setAttribute("id", "elem=" + i);
            elem.setAttribute("class", "FizzBuzz");
            elem.innerText = "FizzBuzz, " + i;

        }
        else if (i % fizzNum === 0) {
            elem.setAttribute("id", "elem=" + i);
            elem.setAttribute("class", "Fizz");
            elem.innerText = "Fizz, " + i;

        }
        else if (i % buzzNum === 0) {
            elem.setAttribute("id", "elem=" + i);
            elem.setAttribute("class", "Buzz");
            elem.innerText = "Buzz, " + i;

        }
        else {
            elem.setAttribute("id", "elem=" + i);
            elem.setAttribute("class", "ordinary");
            elem.innerText = i;

        }
    }
}






main();

