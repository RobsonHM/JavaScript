// Robson Henrique SN: 76776
 
async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");

        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }

        const data = await response.json();
        displayCountriesData(data);

    } catch (error) {
        showError();
        console.error(`Error fetching data: ${error}`);
    }
}

 
// --- Update your Users Fetch ---
async function fetchUsersData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) return;

        const data = await response.json();
        
        currentData = data; 
        activeCategory = "users";

        displayUsersData(data);
    } catch (error) {
        showError();
    }
}

// --- Update your Characters Fetch ---
async function fetchCharactersData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) return;

        const data = await response.json();
        
        currentData = data.results; 
        activeCategory = "characters";

        displayCharactersData(data);
    } catch (error) {
        showError();
    }
}

 
function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    container.innerHTML = ""; // clear previous content

    let htmlOutput = "";

    countriesArray.forEach(country => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
            <img src="${country.flags?.png}" 
                 alt="Flag of ${country.name?.common}" 
                 width="80">
            <p>
                <b>${country.name?.common}</b><br>
                Capital: ${country.capital ? country.capital[0] : "N/A"}<br>
                Population: ${country.population.toLocaleString()}<br>
                Region: ${country.region}
            </p>
        </div>
        `;
    });

    container.innerHTML = htmlOutput;
}

// Display Users
function displayUsersData(usersArray) {
    const container = document.getElementById("remote-data-container");
    container.innerHTML = ""; // clear previous content

    let htmlOutput = "";

    usersArray.forEach(user => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
            <p>
                <b>${user.name} (${user.username})</b><br>
                Email: <a href="mailto:${user.email}">${user.email}</a><br>
                Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
                Location: ${user.address.street}, ${user.address.city}
            </p>
        </div>
        `;
    });

    container.innerHTML = htmlOutput;
}

// Display Characters
function displayCharactersData(charactersArray) {
    const container = document.getElementById("remote-data-container");
    container.innerHTML = ""; // clear previous content

    let htmlOutput = "";

    charactersArray.results.forEach(character => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
            <img src="${character.image}" 
                 alt="Image of ${character.name}"
                 width="80">
            <p>
                <b>${character.name}</b><br>
                Status: ${character.status}<br>
            </p>
        </div>
        `;
    });

    container.innerHTML = htmlOutput;
}

// Reusable error display
function showError() {
    const container = document.getElementById("remote-data-container");
    container.innerHTML = `
        <p class="error"> Failed to load data. Please try again later.</p>
    `;
}

// Event Delegation
document.getElementById("button-container").addEventListener("click", function (e) {
    if (e.target.id === "btn-countries") {
        fetchCountriesData();
    } 
    else if (e.target.id === "btn-users") {
        fetchUsersData();
    }
    else if (e.target.id === "btn-characters") {
        fetchCharactersData();
    }
});


let currentData = [];
let activeCategory = ""; // "countries", "users", or "characters"

// 2. Add the Search Event Listener
document.getElementById("search-input").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();


    const filteredResults = currentData.filter(item => {
       
        const name = item.name?.common || item.name || "";
        return name.toLowerCase().includes(searchTerm);
    });

    if (activeCategory === "countries") displayCountriesData(filteredResults);
    if (activeCategory === "users") displayUsersData(filteredResults);
    if (activeCategory === "characters") displayCharactersData({ results: filteredResults });
});

async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");
        const data = await response.json();

        // SAVE DATA HERE
        currentData = data; 
        activeCategory = "countries";

        displayCountriesData(data);
    } catch (error) {
        showError();
    }
}