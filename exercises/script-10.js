// Robson Henrique SN: 76776
 
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

 
function doCalculation(num1, num2, operation) {
  return operation(num1, num2);
}

 
let resultCalcAdd = doCalculation(10, 5, addTwoNums); 
console.log(`Calculator addition result: ${resultCalcAdd}`);
let resultCalcSubtract = doCalculation(10, 5, subtractTwoNums); 
console.log(`Calculator subtraction result: ${resultCalcSubtract}`);

 

 
const callbackFunction = () => console.log("Hello from callback function.");

 
function mainFunction(callback) { 
    
    callback();
};

 
mainFunction(callbackFunction)

 
const arrUsers = [
    { firstName: "Maria", age: 25, city: "New York" },
    { firstName: "Bob", age: 30, city: "Los Angeles" },
    { firstName: "Charlie", age: 35, city: "Chicago" }
];

 
const displayUserAnon = function(user) {
    console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);
}

 
arrUsers.forEach(displayUserAnon);
 
const displayUserArrow = user => console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);

arrUsers.forEach(displayUserArrow);

/* Define the callback function inline inside the .forEach() */
arrUsers.forEach(user => console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`));