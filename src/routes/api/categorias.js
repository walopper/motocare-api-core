const router = require('express').Router()
const CategoriasController = require('../../controllers/categorias')
const ApiResponseErrorHandler = require('../../utils/apiResponseErrorHandler')

router.get(['/:catid/:start/:limit', '/:catid/:start', '/:catid'], (req, res) => {

	let request = {	catid: req.params.catid, 
					start: parseInt(req.params.start) || 0, 
					limit: parseInt(req.params.limit) || 50
				  }

	CategoriasController.getAvisos(request)
		.then(response => {
			res.json(response)
			res.end()
		})
		.catch(error => {
			ApiResponseErrorHandler(error, res)
		});
});

module.exports = router