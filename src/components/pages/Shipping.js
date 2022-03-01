import styles from './Form.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Shipping = ({ setShipping }) => {

    const navigate = useNavigate()

    const [address, setAddress] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        setShipping(address)
        navigate('/checkout/order')
    }

    return (
        <div className={styles.form_container}>
            <div>
                <h2>Shipping Information</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" onChange={(e) => setAddress({ ...address, address: e.target.value })} required />
                    <label htmlFor="country">Country</label>
                    <input id="country" type="text" onChange={(e) => setAddress({ ...address, country: e.target.value })} required />
                    <label htmlFor="state">State</label>
                    <input id="state" type="text" onChange={(e) => setAddress({ ...address, state: e.target.value })} required />
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={(e) => setAddress({ ...address, city: e.target.value })} required />
                    <input className={styles.submit_btn} type="submit" value="Continue" />
                </form>
            </div>
        </div >
    )
}

export default Shipping