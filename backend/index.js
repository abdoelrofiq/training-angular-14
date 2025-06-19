require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
	origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/api/routes')(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
