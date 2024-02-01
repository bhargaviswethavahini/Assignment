Project Overview:

This project is a simple CRUD (Create, Read, Update, Delete) application for managing customer information. The backend is implemented using Spring Boot, and the frontend is created using HTML, CSS, and JavaScript. The backend provides API endpoints for performing CRUD operations on customer data, and the frontend consists of basic HTML pages for user interaction.

Backend (Spring Boot):

Customer Entity:

The Customer class represents the entity with attributes like first name, last name, address, email, and phone.
It is annotated with JPA annotations for database mapping.
Customer Repository:
The CustomerRepository interface extends JpaRepository for CRUD operations on the Customer entity.

Customer Service:
The CustomerService class contains methods for CRUD operations on customer data.

Controller:
The CustomerController class defines RESTful API endpoints for managing customers.

JWT Authentication Configuration:
JWT authentication is mentioned.

Frontend (HTML, CSS, JS):

Login Screen (login.html):
Provides a simple form for entering a username and password.
The authenticateUser function should be implemented to handle user authentication.

Customer List Screen (customer-list.html):
Displays a table of customer data.
The getCustomerList function should be implemented to fetch and display customer data.
There is a "Sync" button.

Add New Customer Screen (add-customer.html):
Provides a form for adding a new customer.
The addCustomer function is implemented to handle adding a new customer.

JavaScript (script.js):
Contains functions for authentication, fetching customer data, adding customers, and syncing customers from a remote API.
The URLs for API endpoints need to be updated based on your backend server.

CSS (style.css):
Contains basic styles for the HTML elements.

How to Run:

Backend:

Clone the repository.
Navigate to the backend directory.
Configure your MySQL database in the application.properties file.
Run the Spring Boot application using ./mvnw spring-boot:run.
The backend will be accessible at http://localhost:8080.

Frontend:
Navigate to the frontend directory.
Open the HTML files in a text editor and update API URLs in the JavaScript section.
Serve the HTML files using a local server (e.g., Python's python -m http.server).
Access the frontend at http://localhost:8000 (or the port specified by your HTTP server).

Testing:
Access the login screen, authenticate, and navigate through the customer list and add new customer screens.
Test CRUD operations and the sync feature.
