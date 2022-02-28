import styles from './Product.module.css'

const Product = ({ addToCart, product }) => {

    return (
        <section className={styles.section_container}>
            <div className={styles.product_container}>
                <img src={product.img} alt="" />
                <div>
                    <h1>{product.name}</h1>
                    <h3>About this item</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  </li>
                        <li>Aliquam a erat quis turpis porttitor vehicula.</li>
                        <li>Quisque diam urna, pellentesque non quam vel, venenatis venenatis elit. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    </ul>
                    <h2>$ {product.price}</h2>
                    <button
                        onClick={() => addToCart(product)}>Buy Now</button>
                </div>
            </div>
        </section>
    )
}

export default Product