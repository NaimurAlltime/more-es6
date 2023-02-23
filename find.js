const friendsAge = [16, 20, 18, 15, 22, 24, 28, 30];
const findAge = friendsAge.find(age => age % 5 === 0);
console.log(findAge);