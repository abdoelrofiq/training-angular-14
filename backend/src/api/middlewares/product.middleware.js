const asyncMw = require('async-express-mw');
const productService = require('../services/product.service');
const services = { product: new productService() };

const findAllProduct = asyncMw(async (req, res, next) => {
	return await services.product.findAllProductService(req, res, next);
});

const createProduct = asyncMw(async (req, res, next) => {
	return await services.product.createProductService(req, res, next);
});

const findProductById = asyncMw(async (req, res, next) => {
	return await services.product.findProductByIdService(req, res, next);
});

const updateProduct = asyncMw(async (req, res, next) => {
	return await services.product.updateProductService(req, res, next);
});

const deleteProduct = asyncMw(async (req, res, next) => {
	return await services.product.deleteProductService(req, res, next);
});

const returnProducts = asyncMw(async (req, res) => {
	return await services.product.returnProductsService(req, res);
});

const returnProduct = asyncMw(async (req, res) => {
	return await services.product.returnProductService(req, res);
});

module.exports = {
	findAllProduct,
	findProductById,
	createProduct,
	updateProduct,
	deleteProduct,
	returnProduct,
	returnProducts,
};
