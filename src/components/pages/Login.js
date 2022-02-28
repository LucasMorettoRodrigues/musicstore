import styles from './Form.module.css'

import axios
    from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post('http://localhost:5000/api/v1/auth/login', {
                email: email,
                password: password
            })

            if (data.token) {
                localStorage.setItem("user", JSON.stringify(data))
                navigate('/')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.form_container}>
            <div>
                <h2>Log in</h2>
                <form onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                    <input className={styles.submit_btn} type="submit" value="Log in" />
                </form>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>

        </div >
    )
}

export default Login