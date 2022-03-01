import styles from './Order.module.css'

import { useNavigate } from 'react-router-dom'

import api from '../../services/api.service'

const Order = ({ cartProducts, shipping }) => {

    const navigate = useNavigate()

    const placeOrder = async () => {

        let products = []

        for (const product of cartProducts) {
            const newProduct = {
                productId: product._id,
                quantity: product.quantity
            }

            products = [...products, newProduct]
        }


        if (products.length < 1 || !shipping.length < 1) {
            return console.log('Error');
        }

        try {
            const { data } = await api.post("http://localhost:5000/api/v1/orders", {
                products: products,
                shipping: shipping
            })

            console.log(data);
            navigate('/checkout/completed')

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <section className={styles.section_container}>
            <h1>Order</h1>
            <h2>Products</h2>
            {cartProducts.map((item) => (
                <div>
                    <h3>{item.name}</h3>
                    <div className={styles.flex}>
                        <img src={item.img} alt={item.name}></img>
                        <p>Price: {item.price.toFixed(2)}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}
            <h2>Shipping Information</h2>
            <p>Address: {shipping.address}</p>
            <div className={styles.flex}>
                <p>Country: {shipping.country}</p>
                <p>State: {shipping.country}</p>
                <p>City: {shipping.city}</p>
            </div>
            <h4>Total: $ {cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h4>
            <div className={styles.align_right}>
                <button onClick={placeOrder}>Complete Purchase</button>
            </div>
        </section>
    )
}

export default Order