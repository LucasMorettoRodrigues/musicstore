import styles from './Cart.module.css'
import CartCard from '../products/CartCard'

import { useNavigate } from 'react-router-dom'

// import api from '../../services/api.service'

const Cart = ({ closeCart, isOpen, handleCart, cartProducts }) => {

    const navigate = useNavigate()

    // const checkout = async () => {

    //     let products = []

    //     for (const product of cartProducts) {
    //         const newProduct = {
    //             productId: product._id,
    //             quantity: product.quantity
    //         }

    //         products = [...products, newProduct]
    //     }

    //     try {
    //         const { data } = await api.post("http://localhost:5000/api/v1/orders", {
    //             products: products
    //         })

    //         console.log(data);

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const checkout = () => {
        closeCart()
        navigate('/checkout/shipping')
    }

    return (
        <div className={`${styles.cart_back} ${isOpen ? styles.show_back : null}`}>
            <div className={`${styles.cart_window} ${isOpen ? styles.show_window : null}`}>
                <h1>Your Shopping Cart</h1>
                <div className={styles.products_cart}>
                    {cartProducts.map((product) => (
                        <CartCard
                            product={product}
                            key={product._id}
                            handleCart={(product, action) => handleCart(product, action)}
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