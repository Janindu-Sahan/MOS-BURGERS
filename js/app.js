
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const alertBox = document.getElementById('loginAlert');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        const validUsername = 'admin';
        const validPassword = '1234';

        if (username === validUsername && password === validPassword) {
            alertBox.className = 'alert alert-success';
            alertBox.textContent = 'Login successful! Redirecting...';
            alertBox.classList.remove('d-none');

            setTimeout(() => {
                window.location.href = 'order.html';
            }, 1000);
        } else {
            alertBox.className = 'alert alert-danger';
            alertBox.textContent = 'Invalid username or password.';
            alertBox.classList.remove('d-none');

            setTimeout(() => {
                alertBox.classList.add('d-none');
            }, 3000);
        }
    });
});

