import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api.service'

const Register = () => {

    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirmation, setPasswordConfirmation] = useState()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()

        if (password !== passwordConfirmation) {
            return setError("Password don't match.")
        }

        try {
            await api.post('/auth/register', {
                email: email,
                username: username,
                password: password
            })
            navigate('/login')
        } catch (error) {
            setError(error.response.data.error)
        }
    }

    return (
        <div className={styles.form_container}>
            <div>
                <h2>Sign up</h2>
                <form onSubmit={register}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="passwordConfirmation">Confirm Password</label>
                    <input id="passwordConfirmation" type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} required />
                    {error && <span className={styles.error}>{error}</span>}
                    <input className={styles.submit_btn} type="submit" value="Sign up" />
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>

        </div>
    )
}

export default Register