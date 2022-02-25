import styles from './ProductCard.module.css'

import { Link } from 'react-router-dom'

const ProductCard = ({ img, name, price, id, category }) => {
    return (
        <Link to={`/${category}/${id}`}>
            <div className={styles.product_card}>
                <img src={img} alt={name} />
                <h4>{name}</h4>
                <p>$ {price}</p>
            </div>
        </Link>
    )
}

export default ProductCard