"use strict";

module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define("skill", {
    description: DataTypes.STRING,
    quantity:DataTypes.INTEGER
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     // Using additional options like CASCADE etc for demonstration
    //     // Can also simply do Task.belongsTo(models.User);
    //     Skills.belongsTo(models.User, {
    //       onDelete: "CASCADE",
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   }
    // }
    //
  });

  return Skills;
};