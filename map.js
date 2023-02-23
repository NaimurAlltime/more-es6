const numbers = [2, 3, 4, 5];
const output = [];

function getDouble(numbers){
    for(number of numbers){
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}

const doubleIt = number => number * 2;


// map 
const makeDouble = numbers.map(doubleIt);
const makeDouble2 = numbers.map(num => num * 2);

const result = getDouble(numbers);
// console.log(result);
// console.log(makeDouble);
console.log(makeDouble2);