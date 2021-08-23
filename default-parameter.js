function addNumber(num1, num2 = 5) {
    console.log(num1, num2);
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = addNumber(10);
console.log(result);