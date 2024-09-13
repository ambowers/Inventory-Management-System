// Task 1 create an inventory array of product objects
const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 1, lowStockLevel: 2 }, // quantity is 1 to test the functions
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 }, 
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 4 } // quantity is 3 to test the functions 
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
            console.log (`${product.name} is low in stock`);}});
};
checkLowStock ();
// including the above line is what actually checks for the low stock

// Task 5 create a function to calculate total inventory value

function calculateInventoryValue () {
    return inventory.reduce ((totalValue, product) => {
        return totalValue + (product.price * product.quantity)},0);
};
// make a constant to print the calculated total val
const inventoryTotalValue = calculateInventoryValue();
console.log(`The total inventory value is $${inventoryTotalValue}`);

// Task 6 create a function to process a sale

function processSale (product, unitsSold) {
    // use find here so it iterates through array w arrow function
    const item = inventory.find (item => item.name === productName);
    //^use item bc product is already declared
if (item){ 
    if (unitsSold > product.quantity){
        console.log (`Currently not enough availible in stock, try purchasing a smaller amount`)}
    else { updateStock (product, unitsSold)};
}// using the layred if else statements allows for an error message for trying to buy more than in stock 
else {
    console.log (`The product ${productName} is not in the inventory`)}; 
    // above statement is for if the product/item is not found
};







