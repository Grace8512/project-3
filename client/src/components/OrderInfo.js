import React from "react";

const OrderInfo = (props) => {
    
    return (

        <div class="card" style="width: 18rem;">
            <div class="card-header">
                {props.date}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{props._id}</li>
                <li class="list-group-item">{props.productId}</li>
                <li class="list-group-item">{props.customerName}</li>
                <li class="list-group-item">{props.price}</li>
            </ul>
            <a href="#" class="btn btn-primary">{props.isChecked}</a>
        </div>
    )
}

export default OrderInfo;