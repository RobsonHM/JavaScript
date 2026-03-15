 
async function fetchUserData() {
    try {
        
        const response = await fetch("data/users.json");

        
        if (!response.ok) {
            console.error(`Network response was not ok - Status: ${response.status}`);
            return;
        }

        
        console.log(`Type: ${response.type}`);
        console.log(`Status: ${response.status}`);
        console.log(`OK: ${response.ok}`);
        console.log(`URL: ${response.url}`);
        console.log(`Content-Type: ${response.headers.get("Content-Type")}`);

        
        const data = await response.json();

        console.log(data);

        
        displayUsers(data);

    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

 
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

 
fetchUserData();