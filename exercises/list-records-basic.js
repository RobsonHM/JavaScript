// Robson Henrique SN: 76776
 
const arrUsers = [
    { id: 1001, firstName: "Alice", lastName: "Smith", age: 25, city: "New York", isActive: true },
    { id: 1002, firstName: "Bob", lastName: "Jones", age: 30, city: "Los Angeles", isActive: false },
    { id: 1003, firstName: "Charlie", lastName: "Murphy", age: 35, city: "Chicago", isActive: true },
    { id: 1004, firstName: "Diana", lastName: "Wilson", age: 28, city: "Houston", isActive: true },
    { id: 1005, firstName: "Ethan", lastName: "Brown", age: 42, city: "Phoenix", isActive: false },
    { id: 1006, firstName: "Fiona", lastName: "Davis", age: 31, city: "Philadelphia", isActive: true },
    { id: 1007, firstName: "George", lastName: "Miller", age: 27, city: "San Antonio", isActive: true },
    { id: 1008, firstName: "Hannah", lastName: "Garcia", age: 38, city: "San Diego", isActive: false },
    { id: 1009, firstName: "Ian", lastName: "Rodriguez", age: 29, city: "Dallas", isActive: true },
    { id: 1010, firstName: "Julia", lastName: "Martinez", age: 33, city: "San Jose", isActive: false }
];
console.log(arrUsers);

 
const mainHeadingContainer = document.createElement("header");
 
const mainHeading = document.createElement("h1");
mainHeading.innerText = "List of users";
 
mainHeadingContainer.appendChild(mainHeading);
 
document.body.appendChild(mainHeadingContainer);

 
const displayOutputDIV = document.createElement("div");
 
displayOutputDIV.classList.add("data-output");
 
document.body.appendChild(displayOutputDIV);

 
let htmlOutput = '';
let userStatus;
let totalUsers = arrUsers.length;
let totalAge = 0;

arrUsers.forEach(user => {
    
    userStatus = user.isActive ? "<span class='active-user'>ACTIVE</span>" : "<span class='inactive-user'>INACTIVE</span>";
    htmlOutput += `<div><p>
    <b>${user.lastName.toUpperCase()}</b> ${user.firstName} (ID: ${user.id}) <i>Age</i>: ${user.age} from ${user.city} ${userStatus}
    </p></div>`;
    
    totalAge += user.age;
});

 
displayOutputDIV.innerHTML = htmlOutput;

 
document.body.appendChild(displayOutputDIV);

 
const averageAge = totalAge / totalUsers;

 
const totalsOutputDiv = document.createElement("div");
 
totalsOutputDiv.classList.add("totals-output");

// Create a new paragraph element to display the totals and average age
const totalsOutput = document.createElement("p");
// Set the innerHTML of the totals output paragraph with total users and average age, using toFixed(2) to limit average age to 2 decimal places
totalsOutput.innerHTML = `<p><b>Total Users:</b> ${totalUsers} <b>Average Age:</b> ${averageAge.toFixed(2)}</p>`;
// Append the totals output paragraph to the totals output DIV
totalsOutputDiv.appendChild(totalsOutput);
// Append the totals output DIV to the body of the web page, under previous content
document.body.appendChild(totalsOutputDiv);