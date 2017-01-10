"use strict";

module.exports = function(sequelize, DataTypes) {
    var blog = sequelize.define('blog', {
        title: {
             type: DataTypes.STRING
        },
        text_body: {
             type: DataTypes.TEXT
        },
        author: {
             type: DataTypes.STRING
        },
        likes: {
            type: DataTypes.INTEGER,
            
        },
        dislikes: {
            type: DataTypes.INTEGER
            
        }
    })
    
     return blog
}