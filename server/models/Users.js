const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Users.associate = (models) => { //models arguments include all models we have in our project
        Users.hasMany(models.Posts, {
            onDelete: 'cascade', //ondelete cascade deletes comments
        }); //associating comments to Posts saying Posts may have many comments
    };

    return Users;
};