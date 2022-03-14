import styles from './Cart.module.css'
import CartCard from '../products/CartCard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../../services/api.service'
import { useEffect, useState } from 'react'

const Cart = ({ closeCart, isOpen }) => {

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

    const checkout = () => {
        closeCart()
        navigate('/checkout/order')
    }

    return (
        <div className={`${styles.cart_back} ${isOpen ? styles.show_back : null}`}>
            <div className={`${styles.cart_window} ${isOpen ? styles.show_window : null}`}>
                <h2>Your Shopping Cart</h2>
                <div className={styles.products_cart}>
                    {cartProducts.map((product) => (
                        <CartCard
                            product={product}
                            key={product._id}
                        />
                    ))}
                </div>
                <div className={styles.footer_cart}>
                    <h3>Total:
                        <span> $ {cartProducts
                            .reduce((total, item) => total + item.price * item.quantity, 0)
                            .toFixed(2)}
                        </span>
                    </h3>
                    <button onClick={checkout}>Checkout</button>
                    <button onClick={closeCart}>Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Cart