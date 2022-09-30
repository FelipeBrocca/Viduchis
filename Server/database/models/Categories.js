import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Categories = mongoose.model('Categories', categoriesSchema);

export default Categories;