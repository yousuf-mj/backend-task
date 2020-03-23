const db = require('../db');

const getJobs = async (req, res, next) => {
	try {
        const jobs = await db.getJobs();
        let results;

        if(Object.keys(req.query).length === 0) {
            results = jobs
        }else {
            results = await filterJobs(req.query, jobs);
        }

        res.status(200).json(results)
	}
	catch (e) {
		next(e);
	}
};

const filterJobs = async (query, allJobs) => {
    try {

        return allJobs.filter((job) => {
            if(query.title) return job.title === query.title
            if(query.location) return job.location === query.location
        });

    } catch (error) {
        console.error({
            message: 'Error filtering job',
            error: error
        });

        throw new Error('Error Filtering')
    }
}

module.exports = {
    getJobs,
    filterJobs
};
