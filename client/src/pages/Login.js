import React, { useState } from 'react'
import app from '../config/axiosConfig'
import { useHistory } from 'react-router-dom'


function Login() {
    let history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        const data = { username: username, password: password }
        console.log(username)
        app
            .post('http://localhost:3001/auth/login', data)
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                } else {
                    localStorage.setItem('accessToken', response.data); //Sets local storage
                    history.push('/')
                }
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
