// Simple Function
function addNumber(number1, number2 = 5) {
    return number1 + number2;
}
// Anonymous Function
const sum = function (num1, num2 = 5) {
    return num1 + num2;
}
// Arrow Function
const addition = (value1, value2) => value1 + value2;
// All Function output
console.log(addNumber(15), sum(15), addition(15, 5));