const yup = require('yup');
const Models = require('../core/actionMethod');
const {
	createGetDatasResponse,
	createGetDataResponse,
	createPostDataResponse,
	createErrorResponse,
} = require('../utils/response');

class ProductService extends Models {
	async findAllProductService(req, res, next) {
		try {
			const productsData = await this.connection.product.findAll({}, req.FQP, {
				...req.query,
			});

			req.products = createGetDatasResponse(productsData, [], {
				totalAllData: await this.connection.product.count({}, req.FQP, {
					...req.query,
				}),
				query: req.query,
			});
			next();
		} catch (error) {
			return res.status(400).send(createErrorResponse(400, error.message));
		}
	}

	async findProductByIdService(req, res, next) {
		try {
			const productData = await this.connection.product.findOne(req.params.id);

			if (!productData) {
				throw new Error('Product not found.');
			}

			req.product = createGetDataResponse(productData);
			next();
		} catch (error) {
			return res.status(400).send(createErrorResponse(400, error.message));
		}
	}

	async createProductService(req, res, next) {
		const schema = yup.object().shape({
			name: yup.string().required(),
			price: yup.number().required(),
		});

		try {
			await schema.validate(req.body);

			const newProduct = await this.connection.product.create(req.body);

			req.product = createPostDataResponse(newProduct);
			next();
		} catch (error) {
			return res.status(400).send(createErrorResponse(400, error.message));
		}
	}

	async updateProductService(req, res, next) {
		const schema = yup.object().shape({
			name: yup.string().required(),
			price: yup.number().required(),
		});

		try {
			await schema.validate(req.body);

			await this.connection.product.update({ id: req.params.id }, req.body);

			next();
		} catch (error) {
			return res.status(400).send(createErrorResponse(400, error.message));
		}
	}

	async deleteProductService(req, res) {
		await this.connection.product.delete({ id: req.params.id });

		return res.sendStatus(204);
	}

	async returnProductsService(req, res) {
		return res.status(200).send(req.products);
	}

	async returnProductService(req, res) {
		return res.status(200).send(req.product);
	}
}

module.exports = ProductService;
