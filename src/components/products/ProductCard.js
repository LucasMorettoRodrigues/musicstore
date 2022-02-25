import styles from './ProductCard.module.css'

const ProductCard = ({ img, name, price }) => {
    return (
        <div className={styles.product_card}>
            <img src={img} alt={name} />
            <h4>{name}</h4>
            <p>$ {price}</p>
        </div>
    )
}

export default ProductCard