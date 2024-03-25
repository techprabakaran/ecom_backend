const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema(
    {
        user_id : {
            type: String,
            required: true
        },
        product_id : {
            type: String,
            required: true
        },
        count : {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
            default: 0
        },
        deletedAt : {
            type: Date,
            default: null
        }
    },
    { timestamps: true }
);

const OrderModel = mongoose.model("Orders", orderSchema);
module.exports = OrderModel;
