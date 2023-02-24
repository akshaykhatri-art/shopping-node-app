const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const manyProducts = [
    {
        name: 'Brown Rice',
        unitPrice: 24,
        quantity: 1,
        category: 'grain'
    },
    {
        name: 'Honey Dew',
        unitPrice: 60,
        quantity: 1,
        category: 'fruit'
    },
    {
        name: 'Cantaloupe',
        unitPrice: 65,
        quantity: 2,
        category: 'fruit'
    },
    {
        name: 'Brown Sapote',
        unitPrice: 50,
        quantity: 1,
        category: 'fruit'
    },
    {
        name: 'Bitter Gourd',
        unitPrice: 20,
        quantity: 1,
        category: 'vegetable'
    },
    {
        name: 'Beetroot',
        unitPrice: 45,
        quantity: 1,
        category: 'vegetable'
    },
    {
        name: 'Greek Yogurt',
        unitPrice: 25,
        quantity: 1,
        category: 'dairy'
    },
    {
        name: 'Clarified Butter',
        unitPrice: 550,
        quantity: 2,
        category: 'dairy'
    },
    {
        name: 'Buckwheat Flour',
        unitPrice: 55,
        quantity: 3,
        category: 'grain'
    },
    {
        name: 'Rolled Oats',
        unitPrice: 120,
        quantity: 1,
        category: 'grain'
    },
    {
        name: 'Whole Wheat Flour',
        unitPrice: 35,
        quantity: 1,
        category: 'grain'
    }
]

Product.insertMany(manyProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })