 
async function fetchProductData() {
    try {
        
        const response = await fetch("data/products.json");

        
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

        
        displayProducts(data);

    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

 
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

 
fetchProductData();