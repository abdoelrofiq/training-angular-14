const asyncMw = require('async-express-mw');
const loginService = require('../services/login.service');
const services = { product: new loginService() };

const login = asyncMw(async (req, res, next) => {
	return await services.product.findUserService(req, res, next);
});

module.exports = {
	login
};
