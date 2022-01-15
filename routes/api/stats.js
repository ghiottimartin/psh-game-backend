var express = require('express');
var router = express.Router();

const { Stat } = require('../../db/config');

router.get('/', async (req, res) => {
    try {
        const stats = await Stat.findAll();
        res.json(stats);
    } catch (err) {
        res.status(500).send('There was an error while listing the stats:' + err);
    }
});

router.post('/', async (req, res) => {
    try {
        const stat = await Stat.create(req.body);
        res.json(stat);
    } catch (err) {
        res.status(500).send('There was an error while creating the stat:' + err);
    }
});

module.exports = router;
