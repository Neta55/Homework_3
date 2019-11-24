
console.log('Running main.js');

function main() {
    const app = document.querySelector('#app');

    const myTittle = document.createElement('h1');
    myTittle.innerText = 'FIZZ-BUZZ';
    myTittle.classList.add('h1')
    app.appendChild(myTittle);

    const cont_nav = document.createElement('div');
    cont_nav.classList.add('cont_nav');
    app.appendChild(cont_nav);

    const cont_main = document.createElement('div');
    cont_main.classList.add('cont_main');
    app.appendChild(cont_main);

    let initialNum = document.getElementById('initialNum').value;
    let lastNum = document.getElementById('lastNum').value;
    let fizzNum = document.getElementById('fizzNum').value;
    let buzzNum = document.getElementById('buzzNum').value;

    initialNum.value = 1;
    lastNum.value = 100;
    fizzNum.value = 3;
    buzzNum.value = 5;

    // initialNum = 1, lastNum = 100, fizzNum = 3, buzzNum = 5

    function addElem(parent, obj) {
        const elem = document.createElement(obj.tag)
        obj.id = id;
        parent.appendChild(elem);
        // return elem;

        for (initialNum; initialNum <= lastNum; initialNum++) {
            addElem(cont_main, { id: 'elem' + initialNum, tag='div', innerText=initialNum })
            cont_main.appendChild(elem)

            if (initialNum % fizzNum === 0 && initialNum % buzzNum === 0) {
                elem.innerText = "FizzBuzz " + initialNum;
                elem.classList.add('FizzBuzz');
            }
            else if (initialNum % fizzNum === 0) {
                elem.innerText = "Fizz " + initialNum;
                elem.classList.add('Fizz');
            }
            else if (nitialNum % buzzNum === 0) {
                elem.innerText = "Buzz " + initialNum;
                elem.classList.add('Buzz');
            }
            else {
                elem.innerText = initialNum;
                elem.classList.add('ordinary');
            }
        }

    }



}

main()

// findFizzBuzzClear(); //?
    // console.log('Find all numbers based on pre-defined parameters') // =meklēšanas (confirm/resume) pogas nosaukums
