"use strict";

module.exports = function(sequelize, DataTypes) {
    var profile = sequelize.define("profile", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            validate:{
            	isEmail: true, 
            },
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        emailverification: {
        	defaultValue: true,
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    }, {
        classMethods: {
            associate: function(models) {
                //Using additional options like CASCADE etc for demonstration
                //Can also simply do Task.belongsTo(models.User);
                profile.hasMany(models.endorsement);
                profile.belongsTo(models.Resume,{
                    defaultValue: null,
                });
                profile.hasMany(models.skill, {
                  onDelete: "CASCADE",
                });
            }
        }
    });

    return profile;
};
