const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
    _id: {
        type: Schema.Types.ObjectId, 
        required: true,
        auto: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: false
    },
    customerName: {
        type: String, 
        required: true
    },
    isChecked: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});




module.exports = mongoose.model("Order", Order);
