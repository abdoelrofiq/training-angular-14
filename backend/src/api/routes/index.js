const FQP = require('../core/queryParser');
const productRoutes = require('./product.route');
const loginRoutes = require('./login.route');

module.exports = (app) => {
	app.use(FQP.queryParser);
	app.use('/products', productRoutes);
	app.use('/login', loginRoutes);
};
