"use strict";

module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define("skill", {
    name: DataTypes.STRING
  }, 
  {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Skills.belongsTo(models.profile),
        Skills.hasMany(models.endorsement,
        {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Skills;
};