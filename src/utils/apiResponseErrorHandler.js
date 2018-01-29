module.exports = (error, res) => {
	res.status(500).json({
		status: 'error', 
		message: error.message,
		code: error.code
	})
};