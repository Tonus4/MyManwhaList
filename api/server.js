const express = require('express');
const pool = require('./database.js');
const port = 3000;

const app = express();
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    try {
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
);

app.post('/', async (req, res) => {
    const { name, location } = req.body;
    try {
        res.status(200).send('Stuff i got : ' + name + ' ' + location);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
);

app.get('/setup', async (req, res) => {
    try {
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});