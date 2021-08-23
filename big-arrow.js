// Arrow Function with Two parameter
const add = (num1, num2) => num1 + num2;
console.log(add(5, 5));

// Arrow Function with Three parameter
const addThree = (num1, num2, num3) => num1 * num2 * num3;
console.log(addThree(2, 5, 2));

// Another Arrow Function
const fiveTimes = num => num * 5;
console.log(fiveTimes(6));

// Arrow function without parameter
const getName = () => 'Mohammad Abdur Rahman Riad';
console.log(getName());

// Multi step using arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const multi = sum * sub;
    const div = multi / 5;
    const result = div * 2;
    return result;
}
console.log(doMath(10, 2));