const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        min: 0,
        required: true
    },
    quantity: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: String,
        enum: ['vegetable', 'fruit', 'dairy', 'grain']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;