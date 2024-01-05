import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setErrors } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar: ""
    })

    const errors = useSelector(state => state.user.errors)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { username, password, avatar } = formData

    const submit = (e) => {
        e.preventDefault()
        const formDataObj = {
            username,
            password,
            avatar
        }
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj)
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                dispatch(login(user))
                navigate("/")
            } else {
                dispatch(setErrors(user.errors))
                setTimeout(() => {
                    dispatch(setErrors([]))
                }, 2000)
            }
        })
    }


    return (
        <div>
            <h1>Signup Component here</h1>
        </div>
    )
}

export default Signup;