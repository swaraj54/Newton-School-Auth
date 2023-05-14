import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
    const router = useNavigate();
    const [userData, setUserData] = useState();
    console.log(userData, 'userData')
    function logout() {
        props.deepak(null);
        router('/')        
        alert('You are loggout Successfully...')
    }
    useEffect(() => {
        setUserData(props.registerUser);
    }, [props])
    useEffect(() => {
        if (!props.registerUser?.email) {
            router('/');
        }
    }, [props])
    return (
        <div>
            <h1>Dashboard</h1>
            {(userData && userData.email) && <button id='dashboard-logout' onClick={logout}>Logout!</button>}


        </div>
    )
}

export default Dashboard