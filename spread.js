const arrayOne = ['Mohammad', 'Abdur'];
const arrayTwo = ['Rahman', 'Riad'];
const concatArray = arrayOne.concat(arrayTwo);
console.log(concatArray);
console.log(...concatArray);

const numbers = [12, 45, 32, 50, 28, 17, 09];
numbers.push(100);
console.log(Math.max(...numbers));