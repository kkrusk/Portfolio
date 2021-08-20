import React, { useState } from 'react'
import axios from 'axios'
//import { useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //let history = useHistory();

    const login = () => {
        const data = { username: username, password: password }
        axios
            .post('http://localhost:3001/auth/login', data)
            .then((response) => {
                console.log(response.data)
            })
    }

    return (
        <div>
            <div className='container'>
                <input className='loginInput' placeholder='Username' type='text' onChange={(event) => {
                    setUsername(event.target.value);
                }} />

                <input className='loginInput' placeholder='Password' type='password' onChange={(event) => {
                    setPassword(event.target.value);
                }} />

                <button onClick={login}> Login </button>
            </div>
        </div >
    )
}

export default Login
