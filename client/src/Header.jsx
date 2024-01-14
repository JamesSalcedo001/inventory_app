import { useDispatch, useSelector } from "react-redux";
import { logout } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";


function Header() {
    const loggedIn = useSelector(state => state.user.loggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutUser = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "DELETE"
            })
            if (res.ok) {
                dispatch(logout())
                navigate("/")
            } else {
                console.log(res)
            }
        } catch (error) {
            console.error("logout failed", error)
        }
    }


    return (
        <div>
            { loggedIn ? (
                <div className="header-div">
                    <h1>You are logged in!</h1>
                    <button className="nav-buttons" onClick={logOutUser}>Log Out!</button>
                </div> 
                ) : (
                    <div className="header-div-logged-out">
                        <h1 id="header-message">Header</h1>
                    </div>
            )}
        </div>
    )
}

export default Header;