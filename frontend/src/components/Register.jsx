import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const router = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [enable, setEnable] = useState(true)
    // console.log(userData, "- userdata")
    function handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        // console.log(name, value, " cheech heree")
        setUserData({ ...userData, [name]: value });
    }
    function submitRegisterData(event) {
        event.preventDefault();
        // Submit data to backend...
        props.deepak(userData);
        setUserData({ email: "", password: "" });
        router('/')
        alert("Registeration Successfully Done..")

    }

    useEffect(() => {
        if (userData.email.length > 0 && userData.password.length > 7) {
            setEnable(false);
        } else {
            setEnable(true);
        }
    }, [userData])

    return (
        <div>
            <h1> Register</h1>
            <form onSubmit={submitRegisterData}>
                <label>Email :</label><br />
                <input id='register-email' type='email' name='email' value={userData.email} onChange={handleChange} /><br />
                <label>Password :</label><br />
                <input id='register-password' type='password' name='password' value={userData.password} onChange={handleChange} /><br />
                <input id='register-submit' disabled={enable} type='submit' value="Register" />
            </form>
            <button id='register-to-login' onClick={() => router('/')}>Already Registerd? Click here for login..</button>
        </div>
    )
}

export default Register