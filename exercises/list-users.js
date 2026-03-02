// Main function to fetch and display users
async function fetchUserData() {
    try {
        // Fetch the JSON file
        const response = await fetch("data/users.json");

        // Check if response was successful
        if (!response.ok) {
            console.error(`Network response was not ok - Status: ${response.status}`);
            return; // stop execution if error
        }

        // Log response details
        console.log(`Type: ${response.type}`);
        console.log(`Status: ${response.status}`);
        console.log(`OK: ${response.ok}`);
        console.log(`URL: ${response.url}`);
        console.log(`Content-Type: ${response.headers.get("Content-Type")}`);

        // Parse JSON
        const data = await response.json();

        console.log(data);

        // Display users
        displayUsers(data);

    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

// Function to output users to the DOM
function displayUsers(usersArray) {
    const container = document.getElementById("users-container");
    let htmlOutput = "";

    usersArray.forEach(user => {
        htmlOutput += `
            <p>
                ${user.firstName},
                ${user.lastName},
                ${user.age},
                ${user.isActive}
            </p>
        `;
    });

    container.innerHTML = htmlOutput;
}

// Call the function
fetchUserData();