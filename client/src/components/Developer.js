import React from "react";
import Axios from "axios";
import OrderInfo from "./OrderInfo";

const Developer = (props) => {
    const [orderList, setOrderList] = React.useState([]);

    const getOrders = () => {
        Axios.get("/orders").then((res)=>{
            console.log('res.body' + res.body);
            setOrderList(res.body);
        }); 
    };
    getOrders();
    return (
        <>
        {orderList.map((item)=>
            <OrderInfo
                _id = {item._id}
                productId = {item.productId}
                customerName = {item.customerName}
                price = {item.price}
                isChecked = {item.isChecked}
            />
        )}
        </>
    );
}

export default Developer;