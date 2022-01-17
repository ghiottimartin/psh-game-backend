const { Stat, sequelize } = require('../db/config');
const { downloadResource } = require('../utils/csv');
const controller = {};

const getTopTen = async () => {
    const stats = await Stat.findAll({
        attributes: [
            'id',
            'playerId',
            'nickname',
            [sequelize.fn('MAX', sequelize.col('score')), 'score'],
            'createdAt'
        ],
        order: [
            [sequelize.fn('max', sequelize.col('score')), 'DESC'],
            ['createdAt', 'ASC'],
        ],
        group: 'playerId',
        limit: 10
    });
    return stats;
};

controller.getTopTen = async (req, res) => {
    try {
        const stats = await getTopTen();
        res.json(stats);
    } catch (err) {
        res.status(500).send('There was an error while listing the top ten stats:' + err);
    }
};

controller.csv = async (req, res) => {
    const fields = [
        {
            label: 'Player',
            value: 'nickname'
        },
        {
            label: 'Score',
            value: 'score'
        },
        {
            label: 'Creation',
            value: 'createdAt'
        }
    ];
    const data = await getTopTen();
    return await downloadResource(res, 'csv', fields, data);
}

module.exports = controller;