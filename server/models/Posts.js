const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        post_text: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Posts.associate = (models) => { //models arguments include all models we have in our project
        Posts.hasMany(models.Comments, {
            onDelete: 'cascade', //ondelete cascade deletes comments
        }); //associating comments to Posts saying Posts may have many comments
    };

    return Posts;
};