const router = require('express').Router();
const AvisosController = require('../../controllers/avisos');
const ApiResponseErrorHandler = require('../../utils/apiResponseErrorHandler');

router.get('/:id', (req, res) => {
	AvisosController.getAviso(req.params.id)
		.then(response => {
			res.json(response);
		})
		.catch(error => {
			ApiResponseErrorHandler(error, res);
		});
});

module.exports = router;