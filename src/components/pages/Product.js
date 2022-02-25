import styles from './Product.module.css'

import guitar1 from '../../assets/products/guitar1.webp'

const Product = () => {
    return (
        <section className={styles.section_container}>
            <div className={styles.product_container}>
                <img src={guitar1} alt="" />
                <div>
                    <h1>Awesome Guitar</h1>
                    <h3>About this item</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  </li>
                        <li>Aliquam a erat quis turpis porttitor vehicula.</li>
                        <li>Quisque diam urna, pellentesque non quam vel, venenatis venenatis elit. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    </ul>
                    <h2>$ 1999.99</h2>
                    <button>Buy Now</button>
                </div>
            </div>
        </section>
    )
}

export default Product