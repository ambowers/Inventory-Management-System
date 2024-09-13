// Task 1 create an inventory array of product objects
const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 0, lowStockLevel: 1 }, // quantity is zero to test the if else
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }       
];
//Task 2 create a functiobn to display product details
    
function displayProductDetails (product) {

    if (product.quantity <= product.lowStockLevel) { //use if else to display different message according to low or high stock
        console.log(`Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}, Stock Status: ${product.name} is low in stock`);
    } else {
        console.log(`Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}, Stock Status: ${product.name} is in stock`);
    }
};
inventory.forEach(displayProductDetails);

// Task 3 create a function to update stock product stock after sales

function updateStock (product, unitsSold) {
    product.quantity -= unitsSold;
    if (product.quantity = 0) {
        console.log (`${product.name} is out of stock`);
     // again using if else to display message according to updated stock level
    } else { (product.quantity <= product.lowStockLevel) 
        console.log (`${product.name} is low in stock`)}
};

// Task 4 create a function to check low stock products
function checkLowStock () {
    inventory.forEach (product => {
        if (product.quantity < product.lowStockLevel){
            console.log (`${product.name} is low in stock`);
        }
    })
};
checkLowStock ();
// including the above line is what actually checks for the low stock

// Task 5 create a function to calculate total inventory value




