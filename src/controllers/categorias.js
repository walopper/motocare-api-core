const db = require('../utils/mysqlConnector')

const CategoriasController = {

	/**
	 * Obtiene avisos de una categoria
	 * 
	 */
	getAvisos: async (params) => {

		let queryResults = await db.query(
			{
				sql: 'SELECT avisos.*, fotos.foto FROM avisos LEFT JOIN fotos ON avisos.id = fotos.avisoid WHERE avisos.categoria = ? ORDER BY fotos.foto_no LIMIT ?, ?'
			}, 
			[params.catid, params.start, params.limit]
		);

		return queryResults

	}

};

module.exports = CategoriasController;