import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for internal navigation

function Signup() {
    return (
        <div>
            {/* outer div */}
            <h1> Sign Up </h1>
            {/* The form submits to the Signup endpoint on the server */}
            <form action='http://localhost:4000/Signup' method='POST'>
                <label>Username: </label>
                <input type="text" name="uid"/> {/* Field for username */}
                <br/>
                <label>Password: </label>
                <input type="password" name="pw"/> {/* Field for password */}
                <br/>
                <input type="submit" value="Sign Up"/> {/* Submit button */}
            </form>
            <p>
                Already have an account? <Link to="/SignIn">Login</Link> {/* Link to switch to the SignIn component */}
            </p>
        </div>
    )
}

export default Signup; // Exporting Signup for use in other parts of the app
