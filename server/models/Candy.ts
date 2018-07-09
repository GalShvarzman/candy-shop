const mongoose = require('mongoose');

const candySchema = mongoose.Schema({
    candyName: String,
    price: Number,
    countInStock: Number
});

export const Candy = mongoose.model('Candy', candySchema);
