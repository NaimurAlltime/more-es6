const friendsAge = [18, 22, 24, 28, 30];

const largest = friendsAge.filter(num => num > 25);
// console.log(largest);

const products = [
    {name: 'shirt', price: 650},
    {name: 'T-shirt', price: 450},
    {name: 'pant', price: 850},
    {name: 'panjabi', price: 1450},
    {name: 'shu', price: 1450}
];

// const lowBudget = products.filter(products => products.price <= 1000);
const expensive = products.filter(products => products.price >= 1000);
// console.log(lowBudget);
console.log(expensive);