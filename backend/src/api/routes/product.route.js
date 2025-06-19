const express = require('express');
const router = express.Router();
const productMiddleware = require('../middlewares/product.middleware');

router.get('/', productMiddleware.findAllProduct, productMiddleware.returnProducts);

router.get('/:id', productMiddleware.findProductById, productMiddleware.returnProduct);

router.post('/', productMiddleware.createProduct, productMiddleware.returnProduct);

router.patch(
	'/:id',
	productMiddleware.findProductById,
	productMiddleware.updateProduct,
	productMiddleware.findProductById,
	productMiddleware.returnProduct
);

router.delete('/:id', productMiddleware.findProductById, productMiddleware.deleteProduct);

module.exports = router;
