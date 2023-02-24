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
        category: 'grain'
    },
    {
        name: 'Honey Dew',
        unitPrice: 60,
        category: 'fruit'
    },
    {
        name: 'Cantaloupe',
        unitPrice: 65,
        category: 'fruit'
    },
    {
        name: 'Brown Sapote',
        unitPrice: 50,
        category: 'fruit'
    },
    {
        name: 'Bitter Gourd',
        unitPrice: 20,
        category: 'vegetable'
    },
    {
        name: 'Beetroot',
        unitPrice: 45,
        category: 'vegetable'
    },
    {
        name: 'Greek Yogurt',
        unitPrice: 25,
        category: 'dairy'
    },
    {
        name: 'Clarified Butter',
        unitPrice: 550,
        category: 'dairy'
    },
    {
        name: 'Buckwheat Flour',
        unitPrice: 55,
        category: 'grain'
    },
    {
        name: 'Rolled Oats',
        unitPrice: 120,
        category: 'grain'
    },
    {
        name: 'Whole Wheat Flour',
        unitPrice: 35,
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