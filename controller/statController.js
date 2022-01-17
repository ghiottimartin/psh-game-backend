const { Stat, sequelize } = require('../db/config');

const controller = {};

controller.getTopTen = async (req, res) => {
    try {
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
        res.json(stats);
    } catch (err) {
        res.status(500).send('There was an error while listing the top ten stats:' + err);
    }
};

module.exports = controller;