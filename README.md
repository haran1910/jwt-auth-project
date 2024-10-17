JWT-Based Authentication System
This is a backend system built using Node.js and Express.js that handles user signup, login, and password management securely. It uses JWT (JSON Web Token) for user authentication and Nodemailer to send emails. Users can reset their password if they forget it, and there's also a system for user roles (like Admin and User).

Features
Signup/Login System:

Users can create an account (sign up) and log in to access the system.
The system uses JWT to create a secure token for each user, which is used to identify them after they log in.
Password Reset (Forgot Password):

If a user forgets their password, they can request a password reset via email.
A secure link is sent to their email, which lets them reset their password.
Email Verification:

When a user signs up, they receive an email to verify their account.
This ensures that only valid email addresses are used in the system.
Role-Based Access Control:

Users can have different roles like Admin or User.
Certain features or routes are restricted based on the user's role.
Security:

Passwords are securely stored using encryption.
JWT tokens expire after a set time, ensuring extra security.
How It Works
User Signup:

A new user creates an account with their name, email, and password.
They receive an email to verify their account.
User Login:

Once verified, the user can log in.
After login, the system creates a JWT token which allows the user to stay logged in and access protected parts of the system.
Forgot Password:

If the user forgets their password, they can request a reset.
An email is sent to the user with a link to reset their password.
Protected Routes:

Certain parts of the system are protected and can only be accessed if the user is logged in and has a valid token.
Some parts are only accessible to Admins.

Technologies Used
Node.js: The JavaScript runtime environment.
Express.js: The web framework used for building APIs.
MongoDB: The database used for storing user data.
Nodemailer: For sending emails to users.
JWT: Used for user authentication and securing routes.
Conclusion
This system is a starting point for securely managing users in a Node.js backend. It can be extended with more features like two-factor authentication, a user dashboard, or more role-based controls.
