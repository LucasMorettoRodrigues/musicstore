import React, { useEffect, useState } from 'react'
import api from '../../services/api.service'
import { useParams } from 'react-router-dom'
import ProductCard from '../products/ProductCard'

const Products = ({ categoryFilter }) => {

    let { category } = useParams()

    if (categoryFilter) {
        category = categoryFilter
    }

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProducts() {
            try {
                const data = category
                    ? await api.get(`http://localhost:5000/api/v1/products?category=${category}`)
                    : await api.get(`http://localhost:5000/api/v1/products`)
                setProducts(data.data)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [category])

    if (loading) return <p>Loading...</p>

    return (
        <>
            {
                products.map((item) => (
                    <ProductCard
                        key={item._id}
                        product={item}
                    />
                ))
            }
        </>
    )
}

export default Products