const mysql = require('mysql');
const dbConfig = require('../config/mysql.config');
const errorHandler = require('../utils/errorHandler').dbError;

let mysqlHandler = {

	connection: null,

	query: (queryObject, values = null, callback = null) => {
		if(!this.connection) this.connection = mysql.createConnection(dbConfig);

		return new Promise((resolve, reject) => {

			this.connection.query(
				queryObject,
				values,
				(error, results, fields) => {
					if(error) {
						errorHandler(error);
						return reject(error);
					}

					if(typeof callback === 'function') 
						callback(error, results, fields);

					resolve(results);
				}
			);

		});
	},

	close: () => {
		if(this.connection) this.connection.end(errorHandler);
		console.log('Connection closed');
	}

}

class mysqlModel {

	constructor(){
		this.connection = mysql.createConnection(dbConfig);
		this.connection.connect(errorHandler);
		console.log('Connection established.');
	}

	query(queryObject, values = null, callback = null){
		return new Promise((resolve, reject) => {

			this.connection.query(
				queryObject,
				values,
				(error, results, fields) => {
					if(error) {
						errorHandler(error);
						return reject(error);
					}

					if(typeof callback === 'function') 
						callback(error, results, fields);

					resolve(results);
				}
			);

		});
	}

	close(){
		this.connection.end(errorHandler);
	}

}

module.exports = mysqlHandler;

