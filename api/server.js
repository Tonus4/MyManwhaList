const express = require('express');
const routes = require('./server/routes');
const serveFavicon = require('serve-favicon');
const path = require('path');
const port = 3000;

const app = express();
app.use(express.json());

// Routes
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});