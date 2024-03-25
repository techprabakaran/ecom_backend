const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        product_name : {
            type: String,
            required: true
        },
        product_description : {
            type: String,
            required: true
        },
        available : {
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

const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel;
