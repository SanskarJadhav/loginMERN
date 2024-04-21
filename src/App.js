import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom for routing
import Home from './pages/Home';  // Import the Home component
import Signup from "./pages/Signup";  // Import the Signup component
import SignIn from './pages/SignIn';  // Import the SignIn component
import Welcome from './pages/Welcome';  // Import the Welcome component

function App() {
  return (
    // Using Router to wrap the entire application to enable route handling
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Welcome" element={<Welcome/>}/>
      </Routes>
    </Router>
  );
}

export default App;  // Export the App component as the default export of this module
