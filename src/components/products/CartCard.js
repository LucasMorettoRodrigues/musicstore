import styles from './CartCard.module.css'

const CartCard = ({ product, handleCart }) => {

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <h1>{product.name}</h1>
                <button onClick={() => handleCart(product, "delete")}><i class="bi bi-trash"></i></button>
            </div>
            <div className={styles.card_info}>
                <img src={product.img} alt={product.name}></img>
                <div className={styles.quantity}>
                    <h5>Quantity</h5>
                    <div>
                        <button onClick={() => handleCart(product, "remove")}>-</button>
                        <h4>{product.quantity}</h4>
                        <button onClick={() => handleCart(product, "add")}>+</button>
                    </div>
                </div>
                <div className={styles.subtotal}>
                    <h5>Subtotal</h5>
                    <h4>$ {product.price * product.quantity}</h4>
                </div>
            </div>
        </div>
    )
}

export default CartCard