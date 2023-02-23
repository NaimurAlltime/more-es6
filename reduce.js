const numbers = [1, 3, 5, 7];
// reduce (accumulatorFunction, initial value) 
// accumulatorFunction use tow parameters 
const sumOfArray = numbers.reduce((previous, present) => previous + present , 0);
// console.log(sumOfArray);

const total = numbers.reduce((previous, present) => {
    console.log(previous, present);
   return previous + present ;
}, 0);
// console.log(total);