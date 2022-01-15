var express = require('express');
var router = express.Router();

const apiStatsRouter = require('./api/stats');

router.use('/stats', apiStatsRouter);

module.exports = router;
