//Task 2 - Implement fetchProductsThen using .then() and .catch()

const BASE_URL = 'https://www.course-api.com/javascript-store-products' 

function fetchProductsThen() { // creates function that fetches data details
    return fetch (BASE_URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(product => console.log(product.fields.name));  // logs product names to the console
        })
        .catch(error => console.error('There was an error fetching products:', error)) // catches any errors that occur
    };

