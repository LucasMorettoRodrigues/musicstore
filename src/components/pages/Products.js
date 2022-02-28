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
            <h1>{category}</h1>
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
        </section>
    )
}

export default Products