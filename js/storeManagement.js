
// Store data array for added items
let addItemArr = [];

// Menu items array with inventory data
let itemArr = [
    {
        itemCode: "B1001",
        itemNAme: "Classic Burger (Large)",
        price: 1500.00,
        discount: 15,
        image: "/assets/images/burger/Burger - 1.jpg",
        quantity: 16
    },
    {
        itemCode: "B1002",
        itemNAme: "Classic Burger (Regular)",
        price: 1600.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 2.jpg",
        quantity: 5
    },
    {
        itemCode: "B1003",
        itemNAme: "Turkey Burger",
        price: 1400.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 3.jpg",
        quantity: 10
    },
    {
        itemCode: "B1004",
        itemNAme: "Chicken Burger (Large)",
        price: 800.00,
        discount: 20,
        image: "/assets/images/burger/Burger - 4.jpg",
        quantity: 9
    },
    {
        itemCode: "B1005",
        itemNAme: "Chicken Burger (Regular)",
        price: 1000.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 5.jpg",
        quantity: 9
    },
    {
        itemCode: "B1006",
        itemNAme: "Cheese Burger (Large)",
        price: 750.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 6.jpg",
        quantity: 9
    },
    {
        itemCode: "B1007",
        itemNAme: "Classic Burger (Large)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 7.jpg",
        quantity: 9
    },
    {
        itemCode: "B1008",
        itemNAme: "Bacon Burger",
        price: 650.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 8.jpg",
        quantity: 9
    },
    {
        itemCode: "B1009",
        itemNAme: "Shawarma Burger",
        price: 800.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 9.jpg",
        quantity: 9
    },
    {
        itemCode: "B1010",
        itemNAme: "Olive Burger",
        price: 1800.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 10.jpg",
        quantity: 9
    },
    {
        itemCode: "B1011",
        itemNAme: "Double- Cheese Burger",
        price: 1250.00,
        discount: 20,
        image: "/assets/images/burger/Burger - 11.jpg",
        quantity: 9
    },
    {
        itemCode: "B1012",
        itemNAme: "Crispy Chicken Burger (Regular)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 12.jpg",
        quantity: 9
    },
    {
        itemCode: "B1013",
        itemNAme: "Crispy Chicken Burger (Large)",
        price: 1600.00,
        discount: 10,
        image: "/assets/images/burger/Burger - 13.jpg",
        quantity: 9
    },
    {
        itemCode: "B1014",
        itemNAme: "Paneer Burger",
        price: 900.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 14.jpg",
        quantity: 9
    },
    // Submarines
    {
        itemCode: "B1015",
        itemNAme: "Crispy Chicken Submarine (Large)",
        price: 2000.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 1.jpg",
        quantity: 9
    },
    {
        itemCode: "B1016",
        itemNAme: "Crispy Chicken Submarine (Regular)",
        price: 1500.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 2.jpg",
        quantity: 9
    },
    {
        itemCode: "B1017",
        itemNAme: "Chicken Submarine (Large)",
        price: 1800.00,
        discount: 3,
        image: "/assets/images/submarine/Submarine - 3.jpg",
        quantity: 9
    },
    {
        itemCode: "B1018",
        itemNAme: "Chicken Submarine (Regular)",
        price: 1400.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 4.jpg",
        quantity: 9
    },
    {
        itemCode: "B1019",
        itemNAme: "Grinder Submarine",
        price: 2300.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 5.jpg",
        quantity: 9
    },
    {
        itemCode: "B1020",
        itemNAme: "Cheese Submarine",
        price: 2200.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 6.jpg",
        quantity: 9
    },
    {
        itemCode: "B1021",
        itemNAme: "Double Cheese n Chicken Submarine",
        price: 1900.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 7.jpg",
        quantity: 9
    },
    {
        itemCode: "B1022",
        itemNAme: "Special Horgie Submarine",
        price: 2800.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 8.jpg",
        quantity: 9
    },
    {
        itemCode: "B1023",
        itemNAme: "MOS Special Submarine",
        price: 3000.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 9.jpg",
        quantity: 9
    },
    // Fries
    {
        itemCode: "B1024",
        itemNAme: "Steak Fries (Large)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 1.jpg",
        quantity: 9
    },
    {
        itemCode: "B1025",
        itemNAme: "Steak Fries (Medium)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 2.jpg",
        quantity: 9
    },
    {
        itemCode: "B1026",
        itemNAme: "French Fries (Large)",
        price: 800.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 3.jpg",
        quantity: 9
    },
    {
        itemCode: "B1027",
        itemNAme: "French Fries (Medium)",
        price: 650.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 4.jpg",
        quantity: 9
    },
    {
        itemCode: "B1028",
        itemNAme: "French Fries (Small)",
        price: 450.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 5.jpg",
        quantity: 9
    },
    {
        itemCode: "B1029",
        itemNAme: "Sweet Potato Fries (Large)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 6.jpg",
        quantity: 9
    },
    // Pasta
    {
        itemCode: "B1030",
        itemNAme: "Chicken n Cheese Pasta",
        price: 1600.00,
        discount: 15,
        image: "/assets/images/Pasta/pasta - 1.jpg",
        quantity: 9
    },
    {
        itemCode: "B1031",
        itemNAme: "Chicken Penne Pasta",
        price: 1700.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 2.jpg",
        quantity: 9
    },
    {
        itemCode: "B1032",
        itemNAme: "Ground Turkey Pasta Bake",
        price: 2900.00,
        discount: 10,
        image: "/assets/images/Pasta/pasta - 3.jpg",
        quantity: 9
    },
    {
        itemCode: "B1033",
        itemNAme: "Creamy Shrimp Pasta",
        price: 2000.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 4.jpg",
        quantity: 9
    },
    {
        itemCode: "B1034",
        itemNAme: "Lemon Butter Pasta",
        price: 1950.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 5.jpg",
        quantity: 9
    },
    {
        itemCode: "B1035",
        itemNAme: "Tagliatelle Pasta",
        price: 2400.00,
        discount: 1,
        image: "/assets/images/Pasta/pasta - 6.jpg",
        quantity: 9
    },
    {
        itemCode: "B1036",
        itemNAme: "Baked Ravioli",
        price: 2000.00,
        discount: 1,
        image: "/assets/images/Pasta/pasta - 7.jpg",
        quantity: 9
    },
    // Chicken
    {
        itemCode: "B1037",
        itemNAme: "Fried Chicken (Small)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 1.jpg",
        quantity: 9
    },
    {
        itemCode: "B1038",
        itemNAme: "Fried Chicken (Regular)",
        price: 2300.00,
        discount: 10,
        image: "/assets/images/Chicken/chiken - 2.jpg",
        quantity: 9
    },
    {
        itemCode: "B1039",
        itemNAme: "Fried Chicken (Large)",
        price: 3100.00,
        discount: 5,
        image: "/assets/images/Chicken/chiken - 3.jpg",
        quantity: 9
    },
    {
        itemCode: "B1040",
        itemNAme: "Hot Wings (Large)",
        price: 2400.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 4.jpg",
        quantity: 9
    },
    {
        itemCode: "B1041",
        itemNAme: "Devilled Chicken (Large)",
        price: 900.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 5.jpg",
        quantity: 9
    },
    {
        itemCode: "B1042",
        itemNAme: "BBQ Chicken (Regular)",
        price: 2100.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 6.jpg",
        quantity: 9
    },
    // Beverages
    {
        itemCode: "B1043",
        itemNAme: "Pepsi (330ml)",
        price: 990.00,
        discount: 5,
        image: "/assets/images/Beverages/Beverage - 1.jpg",
        quantity: 9
    },
    {
        itemCode: "B1044",
        itemNAme: "Coca-Cola (330ml)",
        price: 1230.00,
        discount: 0,
        image: "/assets/images/Beverages/Beverage - 2.jpg",
        quantity: 9
    },
    {
        itemCode: "B1045",
        itemNAme: "Sprite (330ml)",
        price: 1500.00,
        discount: 3,
        image: "/assets/images/Beverages/Beverage - 3.jpg",
        quantity: 9
    },
    {
        itemCode: "B1046",
        itemNAme: "Mirinda (330ml)",
        price: 850.00,
        discount: 7,
        image: "/assets/images/Beverages/Beverage - 4.jpg",
        quantity: 9
    }
];

// Show section function
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionName + 'Section').classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // Load section-specific data
    if (sectionName === 'update') {
        loadItemsToUpdate();
    } else if (sectionName === 'inventory') {
        loadInventoryTable();
    }
}

// Search function
function search() {
    let searchItem = document.getElementById("searchItem").value.trim();

    if (!searchItem) {
        Swal.fire('Error', 'Please enter an item code to search.', 'error');
        return;
    }

    const foundItem = itemArr.find(item => item.itemCode.toLowerCase() === searchItem.toLowerCase());

    if (foundItem) {
        const stockStatus = foundItem.quantity < 5 ? 'Low Stock' : 'In Stock';
        const statusColor = foundItem.quantity < 5 ? '#dc3545' : '#28a745';

        Swal.fire({
            title: `<strong style="font-size: 1.8rem; color: #333;">${foundItem.itemNAme}</strong>`,
            html: `
                        <div style="display: flex; flex-direction: column; align-items: center; padding: 1rem;">
                            <img src="${foundItem.image}" 
                                 alt="Item Image" 
                                 style="width: 250px; height: 200px; border-radius: 15px; box-shadow: 0px 8px 20px rgba(0,0,0,0.15); margin-bottom: 1.5rem; object-fit: cover;" />
                            
                            <div style="background: #f8f9fa; border-radius: 15px; padding: 1.5rem; width: 100%; text-align: left;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                                    <span style="font-weight: 600; color: #555;">Item Code:</span>
                                    <span style="color: #333; font-weight: 500;">${foundItem.itemCode}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                                    <span style="font-weight: 600; color: #555;">Price:</span>
                                    <span style="color: #007bff; font-weight: bold;">LKR ${foundItem.price.toFixed(2)}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                                    <span style="font-weight: 600; color: #555;">Stock Quantity:</span>
                                    <span style="color: #333; font-weight: 600;">${foundItem.quantity} units</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                                    <span style="font-weight: 600; color: #555;">Status:</span>
                                    <span style="color: ${statusColor}; font-weight: bold;">${stockStatus}</span>
                                </div>
                                ${foundItem.discount > 0 ? `
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="font-weight: 600; color: #555;">Discount:</span>
                                    <span style="color: #28a745; font-weight: bold;">${foundItem.discount}% OFF</span>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    `,
            showCloseButton: true,
            confirmButtonText: 'Close',
            confirmButtonColor: '#667eea',
            background: '#f9f9f9',
            width: '500px',
            padding: '2rem'
        });
    } else {
        Swal.fire({
            title: 'Item Not Found',
            text: `No item found with code: ${searchItem}`,
            icon: 'error',
            confirmButtonText: 'Try Again',
            confirmButtonColor: '#dc3545'
        });
    }
}

// Add item function
async function addItem() {
    const { value: formValues } = await Swal.fire({
        title: '<strong style="font-size: 1.8rem; color: #333;">Add New Menu Item</strong>',
        html: `
                    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
                        <div style="text-align: left;">
                            <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                                <i class="bi bi-tag-fill" style="color: #667eea; margin-right: 0.5rem;"></i>Item Name:
                            </label>
                            <input id="itemName" class="swal2-input" placeholder="Enter item name" type="text" 
                                style="width: 95%; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                        </div>
                        <div style="text-align: left;">
                            <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                                <i class="bi bi-currency-dollar" style="color: #667eea; margin-right: 0.5rem;"></i>Price (LKR):
                            </label>
                            <input id="itemPrice" class="swal2-input" placeholder="Enter price" type="number" step="0.01"
                                style="width: 95%; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                        </div>
                        <div style="text-align: left;">
                            <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                                <i class="bi bi-boxes" style="color: #667eea; margin-right: 0.5rem;"></i>Quantity:
                            </label>
                            <input id="itemQuantity" class="swal2-input" placeholder="Enter quantity" type="number"
                                style="width: 95%; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                        </div>
                        <div style="text-align: left;">
                            <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                                <i class="bi bi-image" style="color: #667eea; margin-right: 0.5rem;"></i>Item Image:
                            </label>
                            <input id="imageInput" type="file" accept="image/*" class="swal2-file"
                                style="width: 95%; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                        </div>
                    </div>
                `,
        focusConfirm: false,
        confirmButtonText: '<i class="bi bi-check-circle"></i> Add Item',
        cancelButtonText: '<i class="bi bi-x-circle"></i> Cancel',
        showCancelButton: true,
        confirmButtonColor: '#667eea',
        cancelButtonColor: '#6c757d',
        background: '#f8f9fa',
        width: '600px',
        padding: '2rem',
        preConfirm: () => {
            const itemName = document.getElementById("itemName").value.trim();
            const price = parseFloat(document.getElementById("itemPrice").value);
            const quantity = parseInt(document.getElementById("itemQuantity").value);
            const imageInput = document.getElementById("imageInput");

            if (!itemName || !price || !quantity || !imageInput.files[0]) {
                Swal.showValidationMessage("Please fill in all fields and select an image!");
                return false;
            }

            if (price <= 0 || quantity <= 0) {
                Swal.showValidationMessage("Price and quantity must be greater than 0!");
                return false;
            }

            return { itemName, price, quantity, imageFile: imageInput.files[0] };
        },
    });

    if (formValues) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newItemCode = `B${String(itemArr.length + 1001).padStart(4, '0')}`;

            const newItem = {
                itemCode: newItemCode,
                itemNAme: formValues.itemName,
                price: formValues.price,
                discount: 0,
                quantity: formValues.quantity,
                image: e.target.result // Base64 image data
            };

            // Add to arrays
            itemArr.push(newItem);
            addItemArr.push(newItem);

            // Update displays
            updatingCard();
            updateStats();

            Swal.fire({
                title: '<strong style="color: #28a745;">Item Added Successfully!</strong>',
                html: `
                            <div style="text-align: center; padding: 1rem;">
                                <div style="background: #f8f9fa; border-radius: 15px; padding: 1.5rem; margin: 1rem 0;">
                                    <h4 style="color: #333; margin-bottom: 1rem;">${formValues.itemName}</h4>
                                    <p style="margin: 0.5rem 0;"><strong>Item Code:</strong> ${newItemCode}</p>
                                    <p style="margin: 0.5rem 0;"><strong>Price:</strong> LKR ${formValues.price.toFixed(2)}</p>
                                    <p style="margin: 0.5rem 0;"><strong>Quantity:</strong> ${formValues.quantity} units</p>
                                </div>
                            </div>
                        `,
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#28a745',
            });
        };
        reader.readAsDataURL(formValues.imageFile);
    }
}

// Update recently added items display
function updatingCard() {
    let addItemCard = document.getElementById("addItemCard");

    if (addItemArr.length === 0) {
        addItemCard.innerHTML = `
                    <h5 class="fw-bold mb-3">Recently Added Items</h5>
                    <div class="text-center py-4">
                        <i class="bi bi-plus-circle display-4 text-muted opacity-50"></i>
                        <p class="text-muted mt-3">No recently added items</p>
                    </div>
                `;
        return;
    }

    let setBody = '<h5 class="fw-bold mb-3">Recently Added Items</h5><div class="row g-3">';

    addItemArr.slice(-3).forEach(item => {
        setBody += `
                    <div class="col-md-4">
                        <div class="card item-card border-0 shadow rounded-3">
                            <img src="${item.image}" class="card-img-top" alt="${item.itemNAme}" style="height: 150px; object-fit: cover;">
                            <div class="card-body p-3">
                                <h6 class="card-title fw-bold mb-1">${item.itemNAme}</h6>
                                <p class="text-muted small mb-1">${item.itemCode}</p>
                                <p class="fw-bold text-primary mb-0">LKR ${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                `;
    });

    setBody += '</div>';
    addItemCard.innerHTML = setBody;
}

// Load items for updating
function loadItemsToUpdate() {
    let updateItems = document.getElementById("updateItems");
    let setBody = "";

    itemArr.forEach(item => {
        const stockStatus = item.quantity < 5 ? 'Low Stock' : 'In Stock';
        const stockColor = item.quantity < 5 ? 'text-danger' : 'text-success';

        setBody += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card item-card border-0 shadow rounded-4 h-100">
                            <img src="${item.image}" class="card-img-top rounded-top-4" alt="${item.itemNAme}" style="height: 200px; object-fit: cover;">
                            <div class="card-body p-4">
                                <h5 class="card-title fw-bold text-dark mb-2">${item.itemNAme}</h5>
                                <p class="text-muted small mb-2">${item.itemCode}</p>
                                <p class="fw-bold text-primary mb-2">LKR ${item.price.toFixed(2)}</p>
                                <p class="mb-3"><span class="fw-semibold">Stock:</span> <span class="${stockColor}">${item.quantity} units</span></p>
                                
                                <div class="d-flex gap-2">
                                    <button onclick="updateItems('${item.itemCode}')" class="btn btn-outline-primary btn-sm flex-fill rounded-3">
                                        <i class="bi bi-pencil me-1"></i>Update
                                    </button>
                                    <button onclick="deleteItem('${item.itemCode}')" class="btn btn-outline-danger btn-sm flex-fill rounded-3">
                                        <i class="bi bi-trash me-1"></i>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    });

    updateItems.innerHTML = setBody;
}

// Update items function
async function updateItems(itemCode) {
    const itemIndex = itemArr.findIndex(item => item.itemCode === itemCode);
    if (itemIndex === -1) return;

    const currentItem = itemArr[itemIndex];

    const { value: formValues } = await Swal.fire({
        title: `<strong style="font-size: 1.8rem; color: #333;">Update Item</strong>`,
        html: `
                    <div style="text-align: center; margin-bottom: 1.5rem;">
                        <h4 style="color: #555;">${currentItem.itemNAme}</h4>
                        <p style="color: #777; margin: 0;">Code: ${currentItem.itemCode}</p>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
                        <div style="text-align: left;">
                            <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                                <i class="bi bi-currency-dollar" style="color: #667eea; margin-right: 0.5rem;"></i>Price (LKR):
                            </label>
                            <input id="EnteredPrice" class="swal2-input" placeholder="Enter price" type="number" step="0.01"
                                value="${currentItem.price}"
                                style="width: 95%; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                        </div>
                        <div style="text-align: left;">
                            <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                                <i class="bi bi-boxes" style="color: #667eea; margin-right: 0.5rem;"></i>Quantity:
                            </label>
                            <input id="EnteredQty" class="swal2-input" placeholder="Enter quantity" type="number"
                                value="${currentItem.quantity}"
                                style="width: 95%; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                        </div>
                    </div>
                `,
        focusConfirm: false,
        confirmButtonText: '<i class="bi bi-check-circle"></i> Update Item',
        cancelButtonText: '<i class="bi bi-x-circle"></i> Cancel',
        showCancelButton: true,
        confirmButtonColor: '#667eea',
        cancelButtonColor: '#6c757d',
        background: '#f8f9fa',
        width: '500px',
        padding: '2rem',
        preConfirm: () => {
            const price = parseFloat(document.getElementById("EnteredPrice").value);
            const quantity = parseInt(document.getElementById("EnteredQty").value);

            if (!price || !quantity || price <= 0 || quantity < 0) {
                Swal.showValidationMessage("Please enter valid price and quantity!");
                return false;
            }

            return { price, quantity };
        },
    });

    if (formValues) {
        // Update the item
        itemArr[itemIndex].price = formValues.price;
        itemArr[itemIndex].quantity = formValues.quantity;

        // Show success message
        await Swal.fire({
            title: '<strong style="color: #28a745;">Item Updated Successfully!</strong>',
            html: `
                        <div style="text-align: left; padding: 1rem; background: #f8f9fa; border-radius: 10px; margin: 1rem 0;">
                            <p style="margin: 0.5rem 0;"><strong>Item:</strong> ${currentItem.itemNAme}</p>
                            <p style="margin: 0.5rem 0;"><strong>Price:</strong> LKR ${formValues.price.toFixed(2)}</p>
                            <p style="margin: 0.5rem 0;"><strong>Quantity:</strong> ${formValues.quantity} units</p>
                        </div>
                    `,
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#28a745',
        });

        // Refresh displays
        loadItemsToUpdate();
        updateStats();
    }
}

// Delete item function
function deleteItem(itemCode) {
    const itemIndex = itemArr.findIndex(item => item.itemCode === itemCode);
    if (itemIndex === -1) return;

    const item = itemArr[itemIndex];

    Swal.fire({
        title: `Delete ${item.itemNAme}?`,
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
        confirmButtonText: '<i class="bi bi-trash"></i> Yes, delete it!',
        cancelButtonText: '<i class="bi bi-x-circle"></i> Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            // Remove item from array
            itemArr.splice(itemIndex, 1);

            // Refresh displays
            loadItemsToUpdate();
            updateStats();

            Swal.fire({
                title: "Deleted!",
                text: "Item has been removed from inventory.",
                icon: "success",
                confirmButtonColor: "#28a745"
            });
        }
    });
}

// Load inventory table
function loadInventoryTable() {
    const inventoryTable = document.getElementById('inventoryTable');
    let setBody = "";

    itemArr.forEach(item => {
        const stockStatus = item.quantity < 5 ? 'Low Stock' : item.quantity < 10 ? 'Medium Stock' : 'In Stock';
        const statusClass = item.quantity < 5 ? 'text-danger' : item.quantity < 10 ? 'text-warning' : 'text-success';
        const totalValue = item.price * item.quantity;

        setBody += `
                    <tr>
                        <td><code>${item.itemCode}</code></td>
                        <td class="fw-semibold">${item.itemNAme}</td>
                        <td class="text-primary fw-bold">${item.price.toFixed(2)}</td>
                        <td>${item.quantity}</td>
                        <td><span class="badge bg-light ${statusClass} border">${stockStatus}</span></td>
                        <td class="fw-bold">${totalValue.toFixed(2)}</td>
                    </tr>
                `;
    });

    inventoryTable.innerHTML = setBody;
}

// Update statistics
function updateStats() {
    if (!Array.isArray(itemArr)) {
        console.error("itemArr is not defined or not an array");
        return;
    }

    const totalItems = itemArr.length;
    const totalStock = itemArr.reduce((sum, item) => sum + item.quantity, 0);
    const lowStock = itemArr.filter(item => item.quantity < 5).length;
    const totalValue = itemArr.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    console.log({ totalItems, totalStock, lowStock, totalValue });

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalStock').textContent = totalStock;
    document.getElementById('lowStock').textContent = lowStock;
    document.getElementById('totalValue').textContent = `LKR ${totalValue.toFixed(2)}`;
}

// Initialize page
window.addEventListener('load', function () {
    updateStats();
    loadItemsToUpdate();

    // Welcome message
    setTimeout(() => {
        console.log('Store Management System loaded successfully!');
    }, 1000);
});