const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        user_name:{
            type:String,
            trim:true
        },
        email:{
            type:String,
            trim:true
        },
        order_status :{
            type:String,
            trim:true
        },
        delivery_address:{
            type:String,
            trim:true
        },
        payment_method:{
            type:String,
            trim:true
        },
        total_items:{
            type:Number,
            default:0
        },
        total_price:{
            type:Number,
            default:0
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Order = mongoose.model("Order" , orderSchema);
module.exports = Order;