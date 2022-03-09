import React, { useEffect, useState } from 'react'
import api from '../../services/api.service'
import { useParams } from 'react-router-dom'
import ProductCard from '../products/ProductCard'

const Products = ({ sort, filter }) => {

    let { category } = useParams()

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
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

    useEffect(() => {

        if (!category) return
        if (filter.includes(true)) {
            const filters = { filterA: [], filterB: [], filterC: [] }

            filter[0]
                ? filters.filterA = products.filter((product) => product.price <= 400)
                : filters.filterA = []

            filter[1]
                ? filters.filterB = products.filter((product) => product.price >= 400 && product.price <= 800)
                : filters.filterB = []

            filter[2]
                ? filters.filterC = products.filter((product) => product.price >= 800)
                : filters.filterC = []

            setFilteredProducts([...new Set([...filters.filterA, ...filters.filterB, ...filters.filterC])])
        } else {
            setFilteredProducts([...products])
        }
    }, [filter, products, category])

    useEffect(() => {
        if (sort === 'priceAsc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price))

        } else if (sort === 'priceDesc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    if (loading) return <p>Loading...</p>

    return (
        <>
            {
                category
                    ? filteredProducts.map((item) => <ProductCard key={item._id} product={item} />)
                    : products.map((item) => <ProductCard key={item._id} product={item} />)
            }
        </>
    )
}

export default Products