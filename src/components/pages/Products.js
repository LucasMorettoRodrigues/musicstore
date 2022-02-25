import styles from './Products.module.css'

import ProductCard from '../products/ProductCard'

import guitar1 from '../../assets/products/guitar1.webp'

import { useParams, Link } from 'react-router-dom'

const Products = () => {

    const { category } = useParams()

    return (
        <section className={styles.section_container}>
            <h1>Section Title</h1>
            <div className={styles.flex}>
                <aside>
                    <h2>Filter:</h2>
                    <h3>Price:</h3>
                    <ul>
                        <li>preço 1</li>
                        <li>preço 2</li>
                        <li>preço 3</li>
                    </ul>
                </aside>
                <div className={styles.products_container}>
                    <ProductCard
                        img={guitar1}
                        name="Awesome Guitar"
                        price="999.99"
                        category={category}
                        id="1"
                    />
                    <ProductCard
                        img={guitar1}
                        name="Awesome Guitar"
                        price="999.99"
                        category={category}
                        id="1"
                    />
                    <ProductCard
                        img={guitar1}
                        name="Awesome Guitar"
                        price="999.99"
                        category={category}
                        id="1"
                    />
                    <ProductCard
                        img={guitar1}
                        name="Awesome Guitar"
                        price="999.99"
                        category={category}
                        id="1"
                    />
                    <ProductCard
                        img={guitar1}
                        name="Awesome Guitar"
                        price="999.99"
                        category={category}
                        id="1"
                    />
                    <ProductCard
                        img={guitar1}
                        name="Awesome Guitar"
                        price="999.99"
                        category={category}
                        id="1"
                    />
                </div>
            </div>
        </section>
    )
}

export default Products