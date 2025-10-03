
let customerArr = [];

// Update customer count display
function updateCustomerCount() {
    const count = customerArr.length;
    document.getElementById('totalCustomers').textContent = count;
    document.getElementById('customerCount').textContent = `${count} Customer${count !== 1 ? 's' : ''}`;

    // Show/hide empty state
    const emptyState = document.getElementById('emptyState');
    const customerDetails = document.getElementById('customerDetails');

    if (count === 0) {
        emptyState.style.display = 'block';
        customerDetails.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        customerDetails.style.display = 'flex';
    }
}

async function addCustomer() {
    const { value: formValues } = await Swal.fire({
        title: `<strong style="font-size: 1.8rem; color: #333;">Add New Customer</strong>`,
        html: `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem; padding: 1rem;">
            <div style="width: 100%; text-align: left;">
              <label for="swal-input1" style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                <i class="bi bi-person-fill" style="margin-right: 0.5rem; color: #667eea;"></i>Customer Name:
              </label>
              <input id="EnteredName" class="swal2-input" placeholder="Enter customer name" type="text" 
                style="width: 95%; margin-top: 5px; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
            </div>
            <div style="width: 100%; text-align: left;">
              <label for="swal-input2" style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                <i class="bi bi-envelope-fill" style="margin-right: 0.5rem; color: #667eea;"></i>Email Address:
              </label>
              <input id="EnteredEmail" class="swal2-input" placeholder="Enter email address" type="email" 
                style="width: 95%; margin-top: 5px; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
            </div>
            <div style="width: 100%; text-align: left;">
              <label for="swal-input3" style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                <i class="bi bi-telephone-fill" style="margin-right: 0.5rem; color: #667eea;"></i>Phone Number:
              </label>
              <input id="EnteredPhoneNumber" class="swal2-input" placeholder="Enter phone number" type="tel" 
                style="width: 95%; margin-top: 5px; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
            </div>
          </div>
        `,
        focusConfirm: false,
        confirmButtonText: '<i class="bi bi-check-circle"></i> Add Customer',
        cancelButtonText: '<i class="bi bi-x-circle"></i> Cancel',
        showCancelButton: true,
        confirmButtonColor: '#667eea',
        cancelButtonColor: '#6c757d',
        background: '#f8f9fa',
        width: '500px',
        padding: '2rem',
        preConfirm: () => {
            const name = document.getElementById("EnteredName").value.trim();
            const email = document.getElementById("EnteredEmail").value.trim();
            const phoneNumber = document.getElementById("EnteredPhoneNumber").value.trim();

            if (!name || !email || !phoneNumber) {
                Swal.showValidationMessage("Please fill in all fields!");
                return false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                Swal.showValidationMessage("Please enter a valid email address!");
                return false;
            }

            // Phone validation
            const phoneRegex = /^\d{10,}$/;
            if (!phoneRegex.test(phoneNumber.replace(/\D/g, ''))) {
                Swal.showValidationMessage("Please enter a valid phone number!");
                return false;
            }

            return { name, email, phoneNumber };
        },
    });

    if (formValues) {
        // Add customer to array
        customerArr.push({
            customerName: formValues.name,
            customerEmail: formValues.email,
            customerPhoneNumber: formValues.phoneNumber
        });

        // Show success message
        await Swal.fire({
            title: '<strong style="color: #28a745;">Customer Added Successfully!</strong>',
            html: `
            <div style="text-align: left; padding: 1rem; background: #f8f9fa; border-radius: 10px; margin: 1rem 0;">
              <p style="margin: 0.5rem 0;"><strong>Name:</strong> ${formValues.name}</p>
              <p style="margin: 0.5rem 0;"><strong>Email:</strong> ${formValues.email}</p>
              <p style="margin: 0.5rem 0;"><strong>Phone:</strong> ${formValues.phoneNumber}</p>
            </div>
          `,
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#28a745',
        });

        loadCusDetailaArr();
    }
}

function loadCusDetailaArr() {
    let customerDetails = document.getElementById("customerDetails");
    let setBody = "";

    customerArr.forEach((cusDetails, index) => {
        setBody += `
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card customer-card border-0 shadow rounded-4 h-100">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                    <i class="bi bi-person-fill text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5 class="fw-bold mb-1 text-dark">${cusDetails.customerName}</h5>
                    <small class="text-muted">Customer #${String(index + 1).padStart(3, '0')}</small>
                  </div>
                </div>
                
                <div class="mb-3">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-envelope text-muted me-2"></i>
                    <small class="text-muted">${cusDetails.customerEmail}</small>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="bi bi-telephone text-muted me-2"></i>
                    <small class="text-muted">${cusDetails.customerPhoneNumber}</small>
                  </div>
                </div>
                
                <div class="d-flex gap-2 mt-auto">
                  <button onclick="editCustomer('${cusDetails.customerPhoneNumber}')" 
                    class="btn btn-outline-primary btn-sm flex-fill rounded-3">
                    <i class="bi bi-pencil me-1"></i>Edit
                  </button>
                  <button onclick="deleteCustomer('${cusDetails.customerPhoneNumber}')" 
                    class="btn btn-outline-danger btn-sm flex-fill rounded-3">
                    <i class="bi bi-trash me-1"></i>Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
    });

    customerDetails.innerHTML = setBody;
    updateCustomerCount();
}

async function editCustomer(ExistCusPhoneNumber) {
    for (let i = 0; i < customerArr.length; i++) {
        if (customerArr[i].customerPhoneNumber == ExistCusPhoneNumber) {
            const existingCustomer = {
                name: customerArr[i].customerName,
                email: customerArr[i].customerEmail,
                phoneNumber: customerArr[i].customerPhoneNumber
            };

            const { value: formValues } = await Swal.fire({
                title: `<strong style="font-size: 1.8rem; color: #333;">Edit Customer Details</strong>`,
                html: `
              <div style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem; padding: 1rem;">
                <div style="width: 100%; text-align: left;">
                  <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                    <i class="bi bi-person-fill" style="margin-right: 0.5rem; color: #667eea;"></i>Customer Name:
                  </label>
                  <input id="EnteredName" class="swal2-input" placeholder="Enter customer name" type="text" 
                    value="${existingCustomer.name}"
                    style="width: 95%; margin-top: 5px; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                </div>
                <div style="width: 100%; text-align: left;">
                  <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                    <i class="bi bi-envelope-fill" style="margin-right: 0.5rem; color: #667eea;"></i>Email Address:
                  </label>
                  <input id="EnteredEmail" class="swal2-input" placeholder="Enter email address" type="email" 
                    value="${existingCustomer.email}"
                    style="width: 95%; margin-top: 5px; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                </div>
                <div style="width: 100%; text-align: left;">
                  <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                    <i class="bi bi-telephone-fill" style="margin-right: 0.5rem; color: #667eea;"></i>Phone Number:
                  </label>
                  <input id="EnteredPhoneNumber" class="swal2-input" placeholder="Enter phone number" type="tel" 
                    value="${existingCustomer.phoneNumber}"
                    style="width: 95%; margin-top: 5px; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
                </div>
              </div>
            `,
                focusConfirm: false,
                confirmButtonText: '<i class="bi bi-check-circle"></i> Update Customer',
                cancelButtonText: '<i class="bi bi-x-circle"></i> Cancel',
                showCancelButton: true,
                confirmButtonColor: '#667eea',
                cancelButtonColor: '#6c757d',
                background: '#f8f9fa',
                width: '500px',
                padding: '2rem',
                preConfirm: () => {
                    const name = document.getElementById("EnteredName").value.trim();
                    const email = document.getElementById("EnteredEmail").value.trim();
                    const phoneNumber = document.getElementById("EnteredPhoneNumber").value.trim();

                    if (!name || !email || !phoneNumber) {
                        Swal.showValidationMessage("Please fill in all fields!");
                        return false;
                    }

                    return { name, email, phoneNumber };
                },
            });

            if (formValues) {
                // Update customer details
                let cusIndex = customerArr.findIndex(item => item.customerPhoneNumber == ExistCusPhoneNumber);

                if (cusIndex !== -1) {
                    customerArr[cusIndex] = {
                        customerName: formValues.name,
                        customerEmail: formValues.email,
                        customerPhoneNumber: formValues.phoneNumber
                    };

                    // Show success message
                    await Swal.fire({
                        title: '<strong style="color: #28a745;">Customer Updated Successfully!</strong>',
                        html: `
                  <div style="text-align: left; padding: 1rem; background: #f8f9fa; border-radius: 10px; margin: 1rem 0;">
                    <p style="margin: 0.5rem 0;"><strong>Name:</strong> ${formValues.name}</p>
                    <p style="margin: 0.5rem 0;"><strong>Email:</strong> ${formValues.email}</p>
                    <p style="margin: 0.5rem 0;"><strong>Phone:</strong> ${formValues.phoneNumber}</p>
                  </div>
                `,
                        icon: 'success',
                        confirmButtonText: 'Great!',
                        confirmButtonColor: '#28a745',
                    });

                    loadCusDetailaArr();
                }
            }
            break;
        }
    }
}

function deleteCustomer(cusPhoneNumber) {
    for (let i = 0; i < customerArr.length; i++) {
        if (customerArr[i].customerPhoneNumber == cusPhoneNumber) {
            Swal.fire({
                title: `Delete Customer: ${customerArr[i].customerName}`,
                text: "Are you sure? This action cannot be undone!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dc3545",
                cancelButtonColor: "#6c757d",
                confirmButtonText: '<i class="bi bi-trash"></i> Yes, delete it!',
                cancelButtonText: '<i class="bi bi-x-circle"></i> Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Remove customer from array
                    customerArr.splice(i, 1);
                    loadCusDetailaArr();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Customer has been removed successfully.",
                        icon: "success",
                        confirmButtonColor: "#28a745"
                    });
                }
            });
            break;
        }
    }
}

async function searchCustomer() {
    const { value: phoneNumber } = await Swal.fire({
        title: `<strong style="font-size: 1.8rem; color: #333;">Search Customer</strong>`,
        html: `
          <div style="padding: 1rem;">
            <div style="text-align: left; margin-bottom: 1rem;">
              <label style="font-size: 1.1rem; color: #555; font-weight: 600; margin-bottom: 0.5rem; display: block;">
                <i class="bi bi-search" style="margin-right: 0.5rem; color: #667eea;"></i>Enter Phone Number:
              </label>
              <input id="EnteredPhoneNumber" class="swal2-input" placeholder="Enter customer phone number" type="tel" 
                style="width: 95%; margin-top: 5px; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px; font-size: 1rem;" />
            </div>
          </div>
        `,
        focusConfirm: false,
        confirmButtonText: '<i class="bi bi-search"></i> Search',
        cancelButtonText: '<i class="bi bi-x-circle"></i> Cancel',
        showCancelButton: true,
        confirmButtonColor: '#667eea',
        cancelButtonColor: '#6c757d',
        background: '#f8f9fa',
        width: '450px',
        preConfirm: () => {
            const phoneNumber = document.getElementById("EnteredPhoneNumber").value.trim();
            if (!phoneNumber) {
                Swal.showValidationMessage("Please enter a phone number!");
                return false;
            }
            return phoneNumber;
        },
    });

    if (phoneNumber) {
        showSearchCustomer(phoneNumber);
    }
}

function showSearchCustomer(cusNumber) {
    const customer = customerArr.find(cus => cus.customerPhoneNumber === cusNumber);

    if (customer) {
        Swal.fire({
            title: `<strong style="font-size: 1.8rem; color: #28a745;">Customer Found!</strong>`,
            html: `
            <div style="text-align: center; padding: 1rem;">
              <div style="background: #f8f9fa; border-radius: 15px; padding: 2rem; margin: 1rem 0;">
                <div style="background: #28a745; color: white; border-radius: 50%; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                  <i class="bi bi-person-fill" style="font-size: 2rem;"></i>
                </div>
                <h3 style="color: #333; margin-bottom: 1rem;">${customer.customerName}</h3>
                <div style="text-align: left; background: white; padding: 1rem; border-radius: 10px;">
                  <p style="margin: 0.5rem 0; display: flex; align-items: center;">
                    <i class="bi bi-envelope-fill" style="color: #667eea; margin-right: 0.5rem;"></i>
                    <strong>Email:</strong>&nbsp;${customer.customerEmail}
                  </p>
                  <p style="margin: 0.5rem 0; display: flex; align-items: center;">
                    <i class="bi bi-telephone-fill" style="color: #667eea; margin-right: 0.5rem;"></i>
                    <strong>Phone:</strong>&nbsp;${customer.customerPhoneNumber}
                  </p>
                </div>
              </div>
            </div>
          `,
            confirmButtonText: "Close",
            confirmButtonColor: "#28a745",
            width: '500px'
        });
    } else {
        Swal.fire({
            title: "Customer Not Found",
            text: `No customer found with phone number: ${cusNumber}`,
            icon: "error",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#dc3545"
        });
    }
}

// Initialize the page
window.addEventListener('load', function () {
    updateCustomerCount();

    // Welcome message
    setTimeout(() => {
        console.log('Customer Management System loaded successfully!');
    }, 1000);
});