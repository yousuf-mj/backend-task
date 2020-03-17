const db = require('../db');

const getJobs = (req, res) => {
	const jobs = db.getJobs();
	res.status(200).json(jobs);
};

module.exports = {
	getJobs
};
