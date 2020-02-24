#Full stack technical test

This is the backend for providing job listings to the frontend
there is only one endpoint http://localhost:5002/api/v1/jobs, which returns and object with jobs which is an array of objects.

Example: 
```
{
	jobs: [
		{
			title: "React Developer",
			location: "EC1V, City of London",
			salary: "£75,000",
			type: "Permanent",
			company: "Acme Company",
			post_date: "14 days ago",
			description: "React Developer Circa £75,000 City of London - Marylebone (NW1) ? ShortList Recruitment … The React Developer will work on a re-platforming of existing products to take advantage … The React Developer will benefit from working in a purely greenfield project",
			logo:"https://logo.clearbit.com/company.com"
		},
```

To start the server `npm run dev`
