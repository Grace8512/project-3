import React from "react";
import Axios from "axios";

const ProductInfo = (props) => {
    
    const makeOrder = () => {
        Axios.post("/orders/"+props._id, {customerName: "jane"}).then((res)=>{
            //props._id <- product.js에서 오토로 만들어준 아이디
            console.log('make order res' + res);
        }); 
    };
    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={props.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.price}</p>
                <p class="card-text">{props.desc}</p>
                <button class="btn btn-primary" onClick={makeOrder}>Order Now</button>
            </div>
        </div>
    )
}

export default ProductInfo;