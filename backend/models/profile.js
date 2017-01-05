"use strict";

module.exports = function(sequelize, DataTypes) {
    var profile = sequelize.define("profile", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate:{
            	isEmail: true, 
            },
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emailverification: {
            type: DataTypes.BOOLEAN ,
            allowNull: false,
        },
    }, {
        // classMethods: {
        //   associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        // profile.belongsTo(models.(SOMETHING), {
        //   onDelete: "CASCADE",
        // });
        // }
        // }
    });

    return profile;
};
