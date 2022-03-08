import api from '../../services/api.service'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1000px;
    min-width: 300px;
    margin: 0 auto;
    padding: 30px;
`
const Title = styled.h1`
    margin-bottom: 20px;    
`
const OrderContainer = styled.div`
    padding: 10px;
    background-color: lightgray;
    margin-bottom: 30px;
    border-radius: 10px;
`
const OrderHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    border: 1px solid white;

    @media (max-width: 858px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
const OrderId = styled.p`
    padding: 5px;
`
const OrderStatus = styled.p`
    padding: 5px;
`
const ProductContainer = styled.div`
    border: 1px solid white;
    padding-bottom: 0;
    margin-bottom: 10px;
`
const ProductTitle = styled.p`
    margin-bottom: 5px;
    padding: 5px;
`
const ProductItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const ProductName = styled.p`
    flex: 1;
    padding: 5px;
`
const ProductPrice = styled.p`
    flex: 1;
    padding: 5px;
`
const ProductQuantity = styled.p`
    padding: 5px;
`
const OrderAddressContainer = styled.div`
    border: 1px solid white;
    padding-bottom: 0;
    margin-bottom: 10px;
`
const OrderAddressTitle = styled.p`
    padding: 5px;
`
const OrderLocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const OrderAddress = styled.p`
    padding: 5px;
    flex: 1;
`
const OrderCountry = styled.p`
    padding: 5px;
    flex: 1;
`
const OrderCity = styled.p`
    padding: 5px;
`
const OrderAmount = styled.p`
    border: 1px solid white;
    padding: 5px;
`

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            try {
                const data = await api.get(`http://localhost:5000/api/v1/orders`)
                setOrders(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOrders()
    }, [])

    return (
        <Container>
            <Title>Your Orders:</Title>
            {orders.length > 0 && orders.map((order) => (
                <OrderContainer key={order._id}>
                    <OrderHeaderContainer>
                        <OrderId>Order ID: {order._id}</OrderId>
                        <OrderStatus>Order Status: {order.status}</OrderStatus>
                    </OrderHeaderContainer>
                    <ProductContainer>
                        <ProductTitle>Products:</ProductTitle>
                        {order.products.map(product => (
                            <ProductItemContainer key={product.name}>
                                <ProductName>{product.name}</ProductName>
                                <ProductPrice>Price: $ {product.price}</ProductPrice>
                                <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
                            </ProductItemContainer>
                        ))}
                    </ProductContainer>
                    <OrderAddressContainer>
                        <OrderAddressTitle>Shipping Information:</OrderAddressTitle>
                        <OrderLocationContainer>
                            <OrderAddress>Address: {order.address.line1}</OrderAddress>
                            <OrderCountry>Country: {order.address.country}</OrderCountry>
                            <OrderCity>City: {order.address.city}</OrderCity>
                        </OrderLocationContainer>
                    </OrderAddressContainer>
                    <OrderAmount>Total: $ {order.amount}</OrderAmount>
                </OrderContainer>
            ))}
        </Container>
    )
}

export default Orders