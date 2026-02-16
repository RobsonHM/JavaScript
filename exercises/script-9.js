// ======== ANONYMOUS FUNCTIONS ========

// Anonymous function	
const showGreeting = function () {
	console.log('Hello from anonymous function');
};

showGreeting(); // Hello from anonymous function

// ======== ARITHMETIC ANONYMOUS FUNCTIONS ========
const addTwoNums = function (num1, num2) {
    return num1 + num2;
};

const subtractTwoNums = function (num1, num2) {
    return num1 - num2;
};

const multiplyTwoNums = function (num1, num2) {
    return num1 * num2;
};

const divideTwoNums = function (num1, num2) {
    return num1 / num2;
};

// Call the functions with sample arguments and log results
let resultAdd = addTwoNums(8,2);
console.log(`Addition result: ${resultAdd}`);

let resultSubtract = subtractTwoNums(8,2);
console.log(`Subtraction result: ${resultSubtract}`);

let resultMultiply = multiplyTwoNums(8,2);
console.log(`Multiplication result: ${resultMultiply}`);

let resultDivide = divideTwoNums(8,2);
console.log(`Division result: ${resultDivide}`);

/* Calculator function that accepts function expression
as an argument */

function doCalculation(num1, num2, operation) {
    return operation(num1, num2);
}

let resultCalcAdd = doCalculation(10, 5, addTwoNums); 
console.log(`Calculator addition result: ${resultCalcAdd}`);// 15
let resultCalcSubtract = doCalculation(10, 5, subtractTwoNums); 
console.log(`Calculator subtraction result: ${resultCalcSubtract}`);// 5
let resultCalcMultiply = doCalculation(10, 5, multiplyTwoNums); 
console.log(`Calculator multiplication result: ${resultCalcMultiply}`);// 50
let resultCalcDivide = doCalculation(10, 5, divideTwoNums); 
console.log(`Calculator division result: ${resultCalcDivide}`);// 2