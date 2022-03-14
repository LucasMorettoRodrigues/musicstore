import { useDispatch } from 'react-redux'
import { addProduct, deleteProduct, removeProduct } from '../../redux/cartRedux'
import styles from './CartCard.module.css'

const CartCard = ({ product }) => {

    const dispatch = useDispatch()

    const handleClick = (action) => {
        if (action === "remove" && product.quantity > 1) dispatch(removeProduct(product))
        if (action === "add") dispatch(addProduct(product))
        if (action === "delete") dispatch(deleteProduct(product))
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <h1>{product.name}</h1>
                <button onClick={() => handleClick("delete")}><i class="bi bi-trash"></i></button>
            </div>
            <div className={styles.card_info}>
                <img src={product.img} alt={product.name}></img>
                <div className={styles.quantity}>
                    <h5>Quantity</h5>
                    <div>
                        <button onClick={() => handleClick("remove")}>-</button>
                        <h4>{product.quantity}</h4>
                        <button onClick={() => handleClick("add")}>+</button>
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