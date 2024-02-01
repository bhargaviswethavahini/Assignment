// script.js

const BASE_URL = 'http://localhost:8080/api/customers';
let authToken = ''; // Store the JWT token

function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        authToken = data.token;
        // Store the token securely (e.g., in localStorage)
    })
    .catch(error => console.error('Authentication error:', error));
}

function getCustomerList() {
    fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        // Update the HTML to display the list
    })
    .catch(error => console.error('Error fetching customer list:', error));
}

function addCustomer() {
  
}

function syncCustomers() {
    fetch(`${BASE_URL}/sync`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    })
    .then(response => response.json())
    .then(data => {
       
    })
    .catch(error => console.error('Error syncing customers:', error));
}
