const FQP = require('../core/queryParser');
const productRoutes = require('./product.route');

module.exports = (app) => {
	app.use(FQP.queryParser);
	app.use('/products', productRoutes);
};
