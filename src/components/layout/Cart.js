import styles from './Cart.module.css'

const Cart = ({ closeCart, open }) => {
    return (
        <div className={`${styles.cart_back} ${open ? styles.show_back : null}`}>
            <div className={`${styles.cart_window} ${open ? styles.show_window : null}`}>
                <h1>Your Shopping Cart</h1>
                <div className={styles.products_cart}>
                    <h2>Produto</h2>
                    <h2>Produto</h2>
                    <h2>Produto</h2>
                    <h2>Produto</h2>
                    <h2>Produto</h2>
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