

//* uzreiz tā kā pieliek kastīti pie konteinera ar tekstu????

let cont_main = []
for (let i = 1; arr.lenght <= 100; i++) {
    if (i % 15 === 0) { cont_main.push(`${i}, FizzBuzz`); } //* ((i%3===0) && (i%5===0))
    else if (i % 3 === 0) { cont_main.push(`${i}, Fizz`); }
    else if (i % 5 === 0) { cont_main.push(`${i}, Buzz`); }
    else { cont_main.push(`${i}`) };
}



//* kastīti katram ciparam pie konteinera bez teksta????



let cont_main = []
for (let i = 1; arr.lenght <= 100; i++) {
    if (i % 15 === 0) { cont_main.push(`FizzBuzz`); }
    else if (i % 3 === 0) { cont_main.push(`Fizz`); }
    else if (i % 5 === 0) { cont_main.push(`Buzz`); }
    else { cont_main.push(i) };
}



//* izvada konsolē????
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) { console.log(`${i}, FizzBuzz`); }
    else if (i % 3 === 0) { console.log(`${i}, Fizz`); }
    else if (i % 5 === 0) { console.log(`${i}, Buzz`); }
    else { console.log(`${i}`) };
}



//*no interneta, tipa supper

function isMultiple(num, mod) {
    return num % mod === 0;
}
function FizzBuzz(num) {
    switch (true) {
        case isMultiple(num, 15): return "FizzBuzz";
        case isMultiple(num, 3): return "Fizz";
        case isMultiple(num, 5): return "Buzz";
        default: return num;
    }

}

const main = [...Array(100)].map((_, i) => FizzBuzz(i + 1));



module.exports = {
    FizzBuzz,
    isMultiple
}
