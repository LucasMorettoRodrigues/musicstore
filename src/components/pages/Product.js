import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api.service'
import styles from './Product.module.css'
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";


const Product = ({ openCart }) => {

    const { id } = useParams()
    const [product, setProduct] = useState()
    const [error, setError] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await api.get(`/products/${id}`)
                setProduct(data.data)
            } catch (error) {
                setError(error)
            }
        }
        getProduct()
    }, [id])

    const handleClick = () => {
        dispatch(
            addProduct(product)
        )
        openCart()
    }

    if (!product && !error) return <p>Loading ...</p>

    if (!product && error) return <p>Not Found</p>

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
                    <h2>$ {product.price.toFixed(2)}</h2>
                    <button onClick={handleClick}>
                        Buy Now
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Product