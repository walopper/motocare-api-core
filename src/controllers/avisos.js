const db = require('../utils/mysqlConnector');

const AvisosController = {

	/**
	 * Get user data and basic usage stats
	 */
	getAviso: async (id) => {

		let avisoData = await db.query(
			{
				sql: 'SELECT * FROM avisos WHERE id = ?'
			}, 
			[parseInt(id)]
		);

		// if user not found
		if(avisoData.length !== 1)
			throw {code: '014001D', message: 'No se encontro el aviso'}

		return avisoData;

	}

};

module.exports = AvisosController;