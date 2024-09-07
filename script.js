let _a;
let InventoryManagement;
(function (InventoryManagement) {
    let products = [
        { name: "Laptop", quantity: 10, price: 1200 },
        { name: "Smartphone", quantity: 25, price: 800 },
        { name: "Tablet", quantity: 15, price: 600 }
    ];
    function displayProducts() {
        let tableBody = document.querySelector('#inventory-table tbody');
        if (!tableBody)
            return;
        tableBody.innerHTML = '';
        products.forEach(function (product) {
            let row = document.createElement('tr');
            let nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            let quantityCell = document.createElement('td');
            quantityCell.textContent = product.quantity.toString();
            let priceCell = document.createElement('td');
            priceCell.textContent = product.price.toString();
            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            tableBody.appendChild(row);
        });
    }
    InventoryManagement.displayProducts = displayProducts;
    function addProduct(name, quantity, price) {
        products.push({ name: name, quantity: quantity, price: price });
        displayProducts();
    }
    InventoryManagement.addProduct = addProduct;
})(InventoryManagement || (InventoryManagement = {}));
// Event listener outside the namespace
(_a = document.querySelector('#add-product-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var nameInput = document.querySelector('#product-name').value;
    var quantityInput = +document.querySelector('#product-quantity').value;
    var priceInput = +document.querySelector('#product-price').value;
    if (!nameInput || quantityInput <= 0 || priceInput <= 0) {
        alert("Invalid input. Please enter valid product details.");
        return;
    }
    InventoryManagement.addProduct(nameInput, quantityInput, priceInput);
});
