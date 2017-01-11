"use strict";

module.exports = function(sequelize, DataTypes) {
    var blog = sequelize.define('blog', {
        title: {
             type: DataTypes.STRING,
             allowNull: false
        },
        text_body: {
             type: DataTypes.TEXT,
             allowNull: false
        },
        author: {
             type: DataTypes.STRING,
             allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER
            
        },
        dislikes: {
            type: DataTypes.INTEGER
            
        }
    })
    
     return blog
}