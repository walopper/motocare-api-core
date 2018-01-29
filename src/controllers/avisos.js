const db = require('../utils/mysqlConnector');

const AvisosController = {

	/**
	 * Get user data and basic usage stats
	 */
	getAviso: async (id) => {

		let queryResults = await db.query(
			{
				sql: 'SELECT * FROM avisos WHERE id = ?'
			}, 
			[parseInt(id)]
		);

		// if user not found
		if(queryResults.length !== 1)
			throw {code: '014001D', message: 'No se encontro el aviso'}

		queryResults[0].images = await AvisosController.getFotos(parseInt(id));

		queryResults[0].seller = await AvisosController.getSeller(queryResults[0].user_id);

		return queryResults[0];

	},

	getFotos: async (avid) => {

		let queryResults = await db.query(
			{
				sql: 'SELECT id, foto as filename FROM fotos WHERE avisoid = ?'
			}, 
			[parseInt(avid)]
		);


		return queryResults;

	}

	,

	getSeller: async (uid) => {

		let queryResults = await db.query(
			{
				sql: 'SELECT * FROM usuarios WHERE id = ?'
			}, 
			[parseInt(uid)]
		);

		return queryResults;

	}

};

module.exports = AvisosController;