import api from '../../services/api.service'
import { useEffect, useState } from 'react'

const Orders = () => {

    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await api.get('http://localhost:5000/api/v1/orders')
                setOrders(data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [])

    if (loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <h1>Your Orders:</h1>
            {console.log(orders)}
        </div>

    )
}

export default Orders