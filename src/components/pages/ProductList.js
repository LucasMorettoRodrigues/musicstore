import styles from './ProductList.module.css'

import Products from '../layout/Products'

import { useParams } from 'react-router-dom'


const ProductList = () => {

    const { category } = useParams()

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
                        <Products />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductList