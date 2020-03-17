const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5002;

const api = require('./routes');

app.use(bodyParser.json({ limit: '5MB'}));
app.use(require('morgan')('dev'));

app.use('/api', api);

app.listen(port, () => console.log(`Backend server running on port ${ port } and accessible on http://localhost:5002/api/v1/jobs`));
