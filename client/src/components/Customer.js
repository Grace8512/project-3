import React from "react";
import Axios from "axios";
import ProductInfo from "./ProductInfo";
const Customer = (props) => {
    const [productList, setProductList] = React.useState([]);

    const getProducts = () => {
        Axios.get("/products").then((res)=>{
            console.log('get products res' + res);
            setProductList(res.body);
        }); 
    };
    getProducts();
    return (
        <>
        {productList.map((item)=>
            <ProductInfo
                _id = {item._id} //productId
                image = {item.image}
                name = {item.name}
                desc = {item.desc}
                price = {item.price}
            />
        )}
        </>
    );
}

export default Customer;

