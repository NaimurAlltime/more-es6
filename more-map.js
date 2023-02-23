const friendsAge = [18, 22, 24, 28, 30];

const half = friendsAge.map(x => x/2);
// console.log(half);

const products = [
    {name: 'shirt', price: 650},
    {name: 'pant', price: 1200},
    {name: 'panjabi', price: 1450}
];

const productName = products.map(p => p.name);
const productPrice = products.map(product => product.price);

console.log(productName);
console.log(productPrice);