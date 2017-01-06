"use strict";

module.exports = function(sequelize, DataTypes) {
  var Endorsements = sequelize.define("endorsements", {
    count: DataTypes.INTEGER
  }, 
  {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Endorsements.hasMany(models.skills, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
    
  });

  return Endorsements;
};