 
const myButton = document.getElementById("myButton");

 
myButton.addEventListener('click', () => {
    console.log("Button was clicked");
});


document.getElementById('myNewButton').addEventListener('click', () => {
    console.log('Button clicked');
});

document.getElementById('inner').addEventListener('click', () => {
    console.log('Inner div clicked');
});

document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer div clicked');
});

 

document.getElementById('myNewButton').addEventListener('click', e => {
    console.log('Button clicked - no parent event triggered');
    e.stopPropagation();
});

 
const container = document.getElementById('buttonContainer');

 
container.addEventListener('click', e => {
    
    if (e.target.classList.contains("btn")) {
        console.log(`You clicked button with this ID: ${e.target.id}`);
        
        e.target.classList.add('btn-purple');
    }
});