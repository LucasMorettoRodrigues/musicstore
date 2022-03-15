import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import api from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Success = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate()
    const stripeData = location.state.stripeData;
    const cart = location.state.cart;
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const data = await api.post(`/orders`, {
                    cart: cart.map((item) => ({
                        productId: item._id,
                        quantity: item.quantity,
                    })),
                    address: stripeData.billing_details.address,
                });
                setOrderId(data.data._id);
                dispatch(reset())
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        };
        createOrder();
    }, [cart, stripeData, dispatch]);

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
                ? <p style={{ padding: 10, textAlign: "center" }}>Order has been created successfully. Your order number is ${orderId} </p>
                : <p style={{ padding: 10, textAlign: "center" }} >Successfull. Your order is being prepared...</p>}
            <button onClick={() => navigate("/musicstore")} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </div>
    );
};

export default Success;