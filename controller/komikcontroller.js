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

async function getKomikById(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        res.status(200).json(komik);
    } catch (error) {
        console.error('Error fetching komik by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createKomik(req, res) {
    const { judul, description, author } = req.body;
    try {
        const newKomik = await db.komik.create({ judul, description, author });
        res.status(201).json(newKomik);
    } catch (error) {
        console.error('Error creating komik:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}