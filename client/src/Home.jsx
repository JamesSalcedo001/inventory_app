import { Link } from "react-router-dom";

function Home({ isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome to the Inventory App!</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome! Please log in or sign up!</h1>
                <Link to="/log_in">Log In</Link>
                <Link to="/sign_up">Sign Up</Link>
            </div>
        )
    }
   
}

export default Home;