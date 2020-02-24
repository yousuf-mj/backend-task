const jobs = {
	jobs: [
		{
			title: "React Developer",
			location: "EC1V, City of London",
			salary: "£75,000",
			type: "Permanent",
			company: "Acme Company",
			post_date: "14 days ago",
			description: "React Developer Circa £75,000 City of London - Marylebone (NW1) ? ShortList Recruitment … The React Developer will work on a re-platforming of existing products to take advantage … The React Developer will benefit from working in a purely greenfield project",
			logo:""
		},
		{
			title: "Senior Developer",
			location: "Shoreditch, London",
			salary: "£80,000",
			type: "Permanent",
			company: "Acme Company",
			post_date: "14 days ago",
			description: "Senior .NET Full Stack Developer - Reigate - Insurance - Azure Cloud / .NET Core / Angular … Net Full Stack Developer to be based at their offices in Reigate. Role & Responsibilities: … casual dress code • Free coffee machine and fruit Senior .NET Full Stack",
			logo:""
		},
		{
			title: "Lead NodeJs Developer",
			location: "London",
			salary: "£90,000",
			type: "Permanent",
			company: "Acme Company",
			post_date: "14 days ago",
			description: "High-quality Lead Node.js Developer required for tech-driven Green Energy organisation based in Central London The sucessful Node.js Developer will be working on a greenfield project, heading up a small, Agile team of NodeJS Developers, ranging from Junior level to Senior, while remaining ~50% hands-on in terms of coding. The successful candidate will be building a modern, next-gen, highly scalable Green Energy product focused on consumer fairness, sustainability and carbon neutrality.",
			logo:""
		},
		{
			title: "React Developer",
			location: "EC1V, City of London",
			salary: "£75,000",
			type: "Permanent",
			company: "Acme Company",
			post_date: "14 days ago",
			description: "React Developer Circa £75,000 City of London - Marylebone (NW1) ? ShortList Recruitment … The React Developer will work on a re-platforming of existing products to take advantage … The React Developer will benefit from working in a purely greenfield project",
			logo:""
		},
		{
			title: "Senior Developer",
			location: "Shoreditch, London",
			salary: "£80,000",
			type: "Permanent",
			company: "Acme Company",
			post_date: "14 days ago",
			description: "Senior .NET Full Stack Developer - Reigate - Insurance - Azure Cloud / .NET Core / Angular … Net Full Stack Developer to be based at their offices in Reigate. Role & Responsibilities: … casual dress code • Free coffee machine and fruit Senior .NET Full Stack",
			logo:""
		},
		{
			title: "Lead NodeJs Developer",
			location: "London",
			salary: "£90,000",
			type: "Permanent",
			company: "Acme Company",
			post_date: "14 days ago",
			description: "High-quality Lead Node.js Developer required for tech-driven Green Energy organisation based in Central London The sucessful Node.js Developer will be working on a greenfield project, heading up a small, Agile team of NodeJS Developers, ranging from Junior level to Senior, while remaining ~50% hands-on in terms of coding. The successful candidate will be building a modern, next-gen, highly scalable Green Energy product focused on consumer fairness, sustainability and carbon neutrality.",
			logo:""
		},
	]
};

const getJobs = (req, res) => {
	res.status(200).json(jobs);
};

module.exports = {
	getJobs
};
