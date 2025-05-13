const express = require('express');
const router = express.Router();
const pool = require('../database');
const e = require('express');

router.get('/', async (req, res) => {
    try {
        res.send('Manwha API online :)').status(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
);

router.get('/manwha', async (req, res) => {
    try {
        const query = `
            SELECT * 
            FROM manwha
            Order by id;
        `;
        pool.query(query, 
            (error, results) => {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            }
            else {
                res.status(200).json(results.rows);
            }
        }
        );
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
);

router.post('/manwha', async (req, res) => {
    const { title, author, description, poster } = req.body;

    try {
        const query = `
        INSERT INTO manwha (title, author, description, poster)
        VALUES ($1, $2, $3, $4)
        `;
        await pool.query(query, [title, author, description, poster]);

        res.status(201).json({ message: 'Manwha created successfully!' });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
);


router.get('/setup', async (req, res) => {
    try {
        const query = `
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' AND table_type = 'BASE TABLE';
        `;
        pool.query(query, 
            (error, results) => {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            }
            else {
                res.status(200).json(results.rows);
            }
        }
        );
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}
);

module.exports = router;