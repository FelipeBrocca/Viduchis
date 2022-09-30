import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    name: String,
    image: Object,
    price: Number,
    category: String,
    description: String,
    stock: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Products = mongoose.model('Products', productsSchema);

export default Products;