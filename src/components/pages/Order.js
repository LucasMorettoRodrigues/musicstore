import styles from './Order.module.css'
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.service'
import { useSelector } from 'react-redux'

const Order = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart);
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        const getCartProducts = async () => {
            let productsArray = []
            for (const item of cart.products) {
                try {
                    const res = await api.get(`/products/${item._id}`)
                    res.data.quantity = item.quantity
                    productsArray = [...productsArray, res.data]
                } catch (error) {
                    console.log(error)
                }
            }
            setCartProducts(productsArray)
        }
        getCartProducts()
    }, [cart])

    const KEY = "pk_test_51KZaedJdfkwx2Cg3Fb3gT0oxAG163bcZfOMwss843v3c4cPT6lSyHviMLRgbUzkKUpsmQXKy5IaROJmjiXujCOmK00OIyNOo6H"

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await api.post(`/checkout/payment`, {
                    tokenId: stripeToken.id,
                    amount: 500,
                });
                console.log(res.data);
                navigate("/checkout/success", {
                    state: {
                        stripeData: res.data,
                        cart: cartProducts,
                    }
                });
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cartProducts, navigate]);

    return (
        <section className={styles.section_container}>
            <h1>Order</h1>
            <h2>Products</h2>
            {cartProducts.map((item) => (
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <div className={styles.flex}>
                        <img src={item.img} alt={item.name}></img>
                        <p>Subtotal: {(item.price * item.quantity).toFixed(2)}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}
            <h4>Total: $ {cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h4>
            <div className={styles.align_right}>
                <StripeCheckout className={styles.btn}
                    name="Music Store"
                    image="https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}`}
                    amount={cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) * 100}
                    token={onToken}
                    stripeKey={KEY}
                />
            </div>
        </section>
    )
}

export default Order