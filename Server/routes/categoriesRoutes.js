import express from 'express';

import { categoriesController } from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/', categoriesController.getCategories);
router.get('/:id', categoriesController.categorie);
router.post('/', categoriesController.newCategorie);
router.put('/:id', categoriesController.updateCategorie);
router.delete('/:id', categoriesController.deleteCategorie);

export default router;