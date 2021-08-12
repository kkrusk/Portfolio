const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
        comment_body: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Comments;
};