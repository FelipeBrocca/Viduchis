import Products from "../database/models/Products.js";
import {
    uploadImage,
    deleteImage
} from "../libs/cloudinary.js";
import fs from 'fs-extra';


export const productsController = {
    getProducts: async (req, res) => {
        try {
            const products = await Products.find();

            res.status(200).json(products)
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    },
    productDetail: async (req, res) => {
        try {
            const product = await Products.findById(req.params.id);

            res.status(200).json(product)
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    },
    newProduct: async (req, res) => {

        try {

            const {
                name,
                price,
                category,
                description,
                stock
            } = req.body;

            let image;

            if (req.files?.image) {
                const imagePosted = await uploadImage(req.files.image.tempFilePath)
                image = {
                    url: imagePosted.secure_url,
                    public_id: imagePosted.public_id
                }
                await fs.remove(req.files.image.tempFilePath)
            }

            const newProduct = new Products({
                name,
                image,
                category,
                price,
                description,
                stock
            });

            await newProduct.save();

            res.status(201).json(newProduct)
        } catch (error) {
            res.status(409).json({
                message: error.message
            })
        }
    },
    updateProduct: async (req, res) => {

        try {
            let image;

            if (req.files?.image) {
                const imagePosted = await uploadImage(req.files.image.tempFilePath)
                image = {
                    url: imagePosted.secure_url,
                    public_id: imagePosted.public_id
                }
                updatedProduct.image = imagePosted
                await fs.remove(req.files.image.tempFilePath)
            }
            const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })

            res.status(201).json(updatedProduct)
        } catch (error) {
            res.status(409).json({
                message: error.message
            })
        }

    },
    deleteProduct: async (req, res) => {
        try {
            const productRemoved = await Products.findByIdAndDelete(req.params.id);

            if(productRemoved.image.public_id){
                await deleteImage(productRemoved.image.public_id)
                //delete images from public/images
            }

            res.status(204)
        } catch (error) {
            res.status(409).json({
                message: error.message
            })
        }
    }
}