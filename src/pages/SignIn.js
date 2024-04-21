import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom to enable SPA-like navigation

function SignIn() {
    return (
        <div>
            {/* Contain whole body */}
            <div>
                <h1>Login</h1>
                {/* The form sends a POST request to your server on submit */}
                <form action='http://localhost:4000/Signin' method='POST'>
                    {/* Form field for username */}
                    <label>Username: </label>
                    <input type="text" name="uid"/>
                    <br/>
                    {/* Form field for password */}
                    <label>Password: </label>
                    <input type="password" name="pw"/> {/* Changed type to 'password' to hide input */}
                    <br/>
                    {/* Submit button */}
                    <input type="submit" value="Login"/>
                </form>
                {/* Link to the Signup page if the user doesn't have an account */}
                <p>
                    Don't have an account? <Link to="/Signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;  // Export the component for use in other parts of the app
