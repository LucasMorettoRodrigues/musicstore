import styles from './ProductList.module.css'

import Products from '../layout/Products'

import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'


const ProductList = () => {

    const { category } = useParams()
    const [sort, setSort] = useState(null)
    const [filter, setFilter] = useState([])
    const [checked, setChecked] = useState([false, false, false])
    const defaultOption = useRef()

    useEffect(() => {
        setChecked([false, false, false])
        setFilter([])
        setSort("")
        defaultOption.current.selected = true
    }, [category])

    return (
        <section className={styles.section_container}>
            <div className={styles.flex}>
                <aside>
                    <h2>Filters</h2>
                    <h3>Price</h3>
                    <ul>
                        <li>
                            <input id="1" className={styles.checkbox} type="checkbox" checked={checked[0]} onChange={() => setChecked([!checked[0], checked[1], checked[2]])} />
                            <label htmlFor="1">Under $400</label>
                        </li>
                        <li>
                            <input id="2" className={styles.checkbox} type="checkbox" checked={checked[1]} onChange={() => setChecked([checked[0], !checked[1], checked[2]])} />
                            <label htmlFor="2">$400 to $800</label>
                        </li>
                        <li>
                            <input id="3" className={styles.checkbox} type="checkbox" checked={checked[2]} onChange={() => setChecked([checked[0], checked[1], !checked[2]])} />
                            <label htmlFor="3">Above $800</label>
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
                    <button onClick={() => setFilter(checked)}> Filter </button>
                </aside>
                <div className={styles.products_container}>
                    <div className={styles.products_container_header}>
                        <h1>{category}</h1>
                        <div>
                            <label htmlFor="sort">Sort:</label>
                            <select onChange={(e) => setSort(e.target.value)} name="sort" id="sort">
                                <option defaultValue ref={defaultOption} ></option>
                                <option value="priceAsc">Price (asc)</option>
                                <option value="priceDesc">Price (desc)</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.products}>
                        <Products sort={sort} filter={filter} />
                    </div>
                </div>

            </div>
        </section >
    )
}

export default ProductList