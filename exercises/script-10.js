// ======== WORKING WITH FUNCTION EXPRESSIONS ========
const addTwoNums = function (num1, num2) {
    return num1 + num2;
};

const subtractTwoNums = function (num1, num2) {
    return num1 - num2;
}

const multiplyTwoNums = function (num1, num2) {
    return num1 * num2;
}

const divideTwoNums = function (num1, num2) {
    return num1 / num2;
}

// The main, general-purpose function
function doCalculation(num1, num2, operation) {
  return operation(num1, num2);
}

/* Call the main function with different arguments
The arguments can be numbers and an operation */
let resultCalcAdd = doCalculation(10, 5, addTwoNums); 
console.log(`Calculator addition result: ${resultCalcAdd}`);// 15
let resultCalcSubtract = doCalculation(10, 5, subtractTwoNums); 
console.log(`Calculator subtraction result: ${resultCalcSubtract}`);// 5

 // Very basic higher-order and callback function pattern

/* The function that will be passed as an argument to the 
'callback' parameter of the 'main' function */
const callbackFunction = () => console.log("Hello from callback function.");

/* The 'main' function with a parameter named 'callback' */
function mainFunction(callback) { 
    // Do something
    callback();  // run the callback function passed as an argument            
};

// Run the main function
mainFunction(callbackFunction)

// Creating an array with objects
const arrUsers = [
    { firstName: "Maria", age: 25, city: "New York" },
    { firstName: "Bob", age: 30, city: "Los Angeles" },
    { firstName: "Charlie", age: 35, city: "Chicago" }
];

/* Create anonymous function expression to use as callback */    
const displayUserAnon = function(user) {
    console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);
}

/* .forEach() is a built-in array method that accepts 
a callback function as an argument */
arrUsers.forEach(displayUserAnon);
/* Create arrow function expression to use as callback */    
const displayUserArrow = user => console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);

arrUsers.forEach(displayUserArrow);

/* Define the callback function inline inside the .forEach() */
arrUsers.forEach(user => console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`));