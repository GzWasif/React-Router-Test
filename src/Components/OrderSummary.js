import { useNavigate } from "react-router-dom";

function OrderSummary () {
    const navigate = useNavigate();
    return ( <>
    <h1>Order PLaced</h1>
    <button onClick={() => navigate(-1)}>Continue shopping</button>
    </> );
}

export default OrderSummary ;