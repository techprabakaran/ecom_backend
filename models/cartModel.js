const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema(
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
        deletedAt : {
            type: Date,
            default: null
        }
    },
    { timestamps: true }
);

const CartModel = mongoose.model("Carts", cartSchema);
module.exports = CartModel;
