import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const router = useNavigate();
    const [registerData, setRegisterData] = useState(null);
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [enable, setEnable] = useState(true);
    function handleChnage(event) {
        var name = event.target.name;
        var value = event.target.value;
        setLoginData({ ...loginData, [name]: value })
    }
    function submitData(event) {
        event.preventDefault();
        if (registerData.email == loginData.email) {
            if (registerData.password == loginData.password) {
                router('/dashboard');
                setLoginData({ email: "", password: "" });
                alert("Logged in Successfully...")
            } else {
                alert("Password NOt matched...")
            }
        } else {
            alert("Email not in our database..")
        }
    }
    useEffect(() => {
        setRegisterData(props.registerUser)
    }, [props])
    useEffect(() => {
        if (loginData.email.length > 0 && loginData.password.length > 7) {
            setEnable(false)
        } else {
            setEnable(true);
        }
    }, [loginData])
    // console.log(props.registerUser, "check user  data in login page")
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitData}>
                <label>Email :</label><br />
                <input id='login-email' type='email' name="email" value={loginData.email} onChange={handleChnage} /><br />
                <label>Passwod :</label><br />
                <input id='login-password' type='password' name='password' value={loginData.password} onChange={handleChnage} /><br />
                <input id='login-submit' disabled={enable} type='submit' value="Login" /><br />
            </form>
            <button id='login-to-register' onClick={() => router('/register')}>Not registered ? Click here</button>

        </div>
    )
}

export default Login