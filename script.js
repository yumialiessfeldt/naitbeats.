const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Replace this with your actual authentication logic (database or server-side)
    if (username === 'admin' && password === 'password') {
        // Set a session variable (for now, we'll use localStorage)
        localStorage.setItem('loggedIn', 'true');
        // Redirect to admin.html
        window.location.href = 'admin.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

// In script.js
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html'; 
} else {
    // User is logged in, proceed with admin dashboard
}

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});