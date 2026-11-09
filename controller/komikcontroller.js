const db = require('../models');

async function getALLKomik(req, res) {
    try {
        const komik = await db.komik.findAll();
        res.statys(200).json(komik);
    } catch (error) {
        console.error('Error fetching komik:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

