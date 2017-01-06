"use strict";


module.exports = function(sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
        organization: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
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