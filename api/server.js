const express = require('express');
const routes = require('./server/routes');
const serveFavicon = require('serve-favicon');
const path = require('path');
const port = 3000;
const cors = require('cors');
const app = express();

app.use(cors())

app.use(serveFavicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.json());

// Routes
app.use('/api', routes, );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});