import styles from './Products.module.css'
import axios from 'axios'
import ProductCard from '../products/ProductCard'

import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

const Products = ({ openProductPage }) => {

    const { category } = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await axios
                    .get(`http://localhost:5000/api/v1/products?category=${category}`)
                setProducts(data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [category])

    if (loading) return (<p>Loading</p>)

    return (
        <section className={styles.section_container}>
            <div className={styles.flex}>
                <aside>
                    <h2>Filters</h2>
                    <h3>Price</h3>
                    <ul>
                        <li>
                            <input id="1" className={styles.checkbox} type="checkbox" />
                            <label htmlFor="1">Preço 1</label>
                        </li>
                        <li>
                            <input id="2" className={styles.checkbox} type="checkbox" />
                            <label htmlFor="2">Preço 2</label>
                        </li>
                        <li>
                            <input id="3" className={styles.checkbox} type="checkbox" />
                            <label htmlFor="3">Preço 3</label>
                        </li>
                    </ul>
                    <h3>Brand</h3>
                    <ul>
                        <li>
                            <input id="4" className={styles.checkbox} type="checkbox" />
                            <label htmlFor="4">Brand 1</label>
                        </li>
                        <li>
                            <input id="5" className={styles.checkbox} type="checkbox" />
                            <label htmlFor="5">Brand 2</label>
                        </li>
                        <li>
                            <input id="6" className={styles.checkbox} type="checkbox" />
                            <label htmlFor="6">Brand 3</label>
                        </li>
                    </ul>
                    <button> Filter </button>
                </aside>
                <div className={styles.products_container}>
                    <h1>{category}</h1>
                    <div className={styles.products}>
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                openProductPage={openProductPage}
                            />
                        ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products