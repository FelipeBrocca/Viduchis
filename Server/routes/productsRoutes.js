import express from 'express';

import { productsController } from '../controllers/productsController.js';


const router = express.Router();


router.get('/', productsController.getProducts);
router.get('/:id', productsController.productDetail);
router.post('/', productsController.newProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

export default router;