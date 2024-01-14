import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const {user, loggedIn } = useSelector(state => state.user)
    
    if (loggedIn) {
        return (
            <div>
                <h1 className="username">Welcome to the Inventory App {user.username}!</h1>
                <img className="user-home-avatar" src={user.avatar} alt="user avatar"/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome! Please log in or sign up!</h1>
                        <div id="login-links">
                            <NavLink to="/log_in">
                                <button className="login-signup">Log In! </button>
                            </NavLink>
                            <NavLink to="/sign_up">
                                <button className="login-signup">Sign Up! </button>
                            </NavLink>
                        </div>
            </div>
        )
    }
   
}

export default Home;