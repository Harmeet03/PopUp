const mongoose = require("mongoose");

const BagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        url_name: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },
        
        company: {
            type: String,
            required: true
        },
        
        image: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        }
    }
);

const bag = mongoose.model('Bag_List', BagSchema);
module.exports = bag;