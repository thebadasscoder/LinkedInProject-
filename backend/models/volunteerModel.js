"use strict";


module.exports = function(sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
        organization: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
      
    }, {
         classMethods: {
          associate: function(models) {
          Volunteer.hasMany(models.Resume,{ foreignKey: 'volunteer_fields'})

        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        // Education.belongsToMany(models.Song, {through: "SongFeatures"});
        // Volunteer.belongsTo(models.Resume)
          }
        }
    });

    return Volunteer;
};