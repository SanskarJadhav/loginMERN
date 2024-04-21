import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component for handling internal navigation

function Home() {
  return (
    <div>
      {/* Links to the SignIn and Signup pages */}
      <h1>
        <Link to="/SignIn">Sign In</Link> or <Link to="/Signup">Sign Up</Link>
      </h1>
    </div>
  );
}

export default Home;
