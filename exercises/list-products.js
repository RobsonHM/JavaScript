// Main function to fetch and display products
async function fetchProductData() {
    try {
        // Fetch the JSON file
        const response = await fetch("data/products.json");

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

        // Display products
        displayProducts(data);

    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

// Function to output products to the DOM
function displayProducts(productsArray) {
    const container = document.getElementById("products-container");
    let htmlOutput = "";

    productsArray.forEach(product => {
        htmlOutput += `
            <p>
                <b>${product.name}</b><br>
                Price: $${product.price}<br>
                Available?: ${product.inStock ? "Yes" : "No"}
            </p>
        `;
    });

    container.innerHTML = htmlOutput;
}

// Call the function
fetchProductData();