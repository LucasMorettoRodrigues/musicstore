import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import api from "../../services/api.service";

const Success = () => {
    const location = useLocation();
    const stripeData = location.state.stripeData;
    const cart = location.state.cart;
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const data = await api.post(`http://localhost:5000/api/v1/orders`, {
                    cart: cart.map((item) => ({
                        productId: item._id,
                        quantity: item.quantity,
                    })),
                    address: stripeData.billing_details.address,
                });
                setOrderId(data.data._id);
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        };
        createOrder();
    }, [cart, stripeData]);

    if (loading) return <p>Loading...</p>

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </div>
    );
};

export default Success;