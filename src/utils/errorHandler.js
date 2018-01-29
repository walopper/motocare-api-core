module.exports = {
	dbError : err => {
		if(!err) return;
		console.log("DB Error:", err.Error)
	}
};