import styles from './CartCard.module.css'

const CartCard = ({ product, addToCart, removeFromCart }) => {
    return (
        <div className={styles.card}>
            <h1>{product.name}</h1>
            <div className={styles.card_info}>
                <img src={product.img} alt={product.name}></img>
                <div className={styles.quantity}>
                    <h5>Quantity</h5>
                    <div>
                        <button onClick={() => removeFromCart(product)}>-</button>
                        <h4>{product.quantity}</h4>
                        <button onClick={() => addToCart(product)}>+</button>
                    </div>
                </div>
                <div className={styles.subtotal}>
                    <h5>Subtotal</h5>
                    <h4>$ {product.price}</h4>
                </div>

            </div>
        </div>
    )
}

export default CartCard