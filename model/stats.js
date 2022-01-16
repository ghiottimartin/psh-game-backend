const { DataTypes } = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('stat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        playerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profileImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        indexes: [
            {
                fields: ['playerId']
            },
            {
                fields: ['score']
            }
        ]
    })
};