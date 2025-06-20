const Models = require('../core/actionMethod');
const yup = require('yup');
const {
	createErrorResponse,
} = require('../utils/response');
const jwt = require('jsonwebtoken');

const USER = {
	username: 'admin',
	password: 'admin',
};

class LoginService extends Models {
	async findUserService(req, res) {
		const schema = yup.object().shape({
			username: yup.string().required(),
			password: yup.string().required(),
		});

		try {
			await schema.validate(req.body);
			const { username, password } = req.body;

			if (username === USER.username && password === USER.password) {
				const token = jwt.sign({ username }, process.env.JWT_TOKEN_SECRET, { expiresIn: '24h' });

				return res.json({
					success: true,
					token,
				});
			}

			return res.status(401).json({
				success: false,
				message: 'Username atau password salah',
			});
		} catch (error) {
			return res.status(400).send(createErrorResponse(400, error.message));
		}
	}
}

module.exports = LoginService;
