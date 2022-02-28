import styles from './ProductCard.module.css'

import { Link } from 'react-router-dom'

const ProductCard = ({ product, openProductPage }) => {
    return (
        <Link to={`/${product._id}`}>
            <div className={styles.product_card}
                onClick={() => openProductPage(product)}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p>$ {product.price.toFixed(2)}</p>
            </div>
        </Link>
    )
}

export default ProductCard