const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.status(401).json({ message: 'Token tidak ditemukan' });

    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Token kosong' });

    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token tidak valid' });

        req.user = user;
        next();
    });
};
