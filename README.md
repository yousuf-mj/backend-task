# Full stack technical test (backend)

This is the backend for providing job listings. There is only one endpoint `http://localhost:5002/api/v1/jobs` 

Here is an example what the structure will look like: 
 
```
    {
        jobs: [
            {
                id: "job-1001",
                title: "React Developer",
                location: "EC1V, City of London",
                salary: "£75,000",
                type: "Permanent",
                company: "Acme Company",
                post_date: "14 days ago",
                description: "React Developer Circa £75,000 City of London - Marylebone (NW1) The React Developer will work on a re-platforming of existing products ...",
                logo:"https://logo.clearbit.com/company.com"
            }
        ]
    }
```

## Bonus Points (as shown [here](https://github.totaljobsgroup.com/OrlandoBrown/bravo-technical-test-frontend#extra-bonus-points))
Create a new endpoint to return a single job by its `id`

## Setup Instructions
##### Dependencies
- `npm install` or `yarn install`

##### Start Backend Application
- `npm run dev` or `yarn dev`
