// Task 2 - Implement fetchProductsThen using .then() and .catch()

const BASE_URL = 'https://www.course-api.com/javascript-store-products' 

function fetchProductsThen() { // creates function that fetches data details
    return fetch (BASE_URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(product => console.log(product.fields.name));  // logs product names to the console
        })
        .catch(error => console.error('There was an error fetching products:', error)) // catches any errors that occur
    };

// Task 3 - Add fetchProductsAsync using async/await and try/catch

async function fetchProductsAsync() { // creates function that waits for one action to be completed before proceeding
    try {
        const response = await fetch (BASE_URL)
        const products = await response.json()
        displayProducts(products);
        } catch (error) {
        handleError(error);
        }};

// Task 4 - Display products in the DOM with name, price, and image
function displayProducts(products) {
    const container = document.querySelector('#product-container'); // selects the product-container
    container.innerHTML = ''; // makes sure the inner HTML is cleared

    products.slice(0, 5).forEach(product => { // chooses the first 5 products
        const productDiv = document.createElement('div'); // creates a div element
        const img = document.createElement('img'); // creates an img element
    img.src = product.fields.image[0].url;
    const name = document.createElement('h3'); // creates a header element
    name.textContent = `${product.fields.name}`;
    const price = document.createElement('p'); // creates a paragraph element
    price.textContent = `$${(product.fields.price / 100).toFixed(2)}`; // displays the price and rounds it to the second decimal place
    
    productDiv.appendChild(img) // appends child element to parent element
    productDiv.appendChild(name); // appends child element to parent element
    productDiv.appendChild(price); // appends child element to parent element
    container.appendChild(productDiv); // appends child element to parent element
});
};

// Task 5 - Add reusable handleError function
function handleError(error) { // creates function that displays a message when an error occurs
    console.log('An error has occurred:', error)
};





