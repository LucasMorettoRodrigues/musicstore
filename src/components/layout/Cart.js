import styles from './Cart.module.css'
import CartCard from '../products/CartCard'

const Cart = ({ closeCart, isOpen, cartProducts, addToCart, removeFromCart }) => {

    return (
        <div className={`${styles.cart_back} ${isOpen ? styles.show_back : null}`}>
            <div className={`${styles.cart_window} ${isOpen ? styles.show_window : null}`}>
                <h1>Your Shopping Cart</h1>
                <div className={styles.products_cart}>
                    {cartProducts.map((product) => (
                        <CartCard
                            product={product}
                            key={product.id}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart} />
                    ))}
                </div>
                <div className={styles.footer_cart}>
                    <h3>Total: <span>$ 1231.00</span></h3>
                    <button>Checkout</button>
                    <button onClick={closeCart}>Continue Shopping</button>
                </div>

            </div>
        </div>

    )
}

export default Cart