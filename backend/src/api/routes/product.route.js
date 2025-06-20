const express = require('express');
const router = express.Router();
const productMiddleware = require('../middlewares/product.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware.authenticate, productMiddleware.findAllProduct, productMiddleware.returnProducts);

router.get('/:id', authMiddleware.authenticate, productMiddleware.findProductById, productMiddleware.returnProduct);

router.post('/', authMiddleware.authenticate, productMiddleware.createProduct, productMiddleware.returnProduct);

router.patch(
	'/:id',
	authMiddleware.authenticate,
	productMiddleware.findProductById,
	productMiddleware.updateProduct,
	productMiddleware.findProductById,
	productMiddleware.returnProduct
);

router.delete('/:id', authMiddleware.authenticate, productMiddleware.findProductById, productMiddleware.deleteProduct);

module.exports = router;
