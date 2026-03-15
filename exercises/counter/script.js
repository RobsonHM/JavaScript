// Initialize the counter value
let count = 0;

// Get the counter display and button container elements
const value = document.querySelector("#value");
const btnContainer = document.querySelector(".button-container");

// Listen for clicks on the button container
btnContainer.addEventListener("click", (e) => {
    // Check if a button or its child was clicked
    if (e.target.classList.contains("btn") || e.target.parentElement.classList.contains("btn")) {
        // Get the ID of the clicked button
        const id = e.target.closest('.btn').id;
        // Update the count based on button
        if (id === "decrease") {
            count--;
        } else if (id === "increase") {
            count++;
        } else {
            count = 0;
        }
        // Change color based on value
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
        // Update the displayed value
        value.innerText = count;
    }
});