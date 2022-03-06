import React, { useEffect, useState } from 'react'
import api from '../../services/api.service'

const Products = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProducts() {
            try {
                const data = await api
                    .get(`http://localhost:5000/api/v1/products?category=${category}`)
                setProducts(data.data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [category])

    if (loading) return <p>Loading...</p>

    return (
        <div>Products</div>
    )
}

export default Products