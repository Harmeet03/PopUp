const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        order_id: {
            type: String
        },
        
        product_name: {
            type: String
        },
        
        amount: {
            type: Number
        },

        product_category: {
            type: String
        }
    },

    {
        timestamps: true
    }
);

const orders = mongoose.model('Orders_List', OrderSchema);
module.exports = orders;