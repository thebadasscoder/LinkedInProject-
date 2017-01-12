"use strict";

module.exports = function(sequelize, DataTypes) {
  var Endorsements = sequelize.define("endorsement", {
    endorsedBy:DataTypes.INTEGER
  }, 
  {
    classMethods: {
      associate: function(models) {
       // Using additional options like CASCADE etc for demonstration
       // Can also simply do Task.belongsTo(models.User);
       // Endorsements.belongsToMany(models.profile, {through:'ProfileEndorsement'}),
        Endorsements.belongsToMany(models.skill,{through:'SkillEndorsement'},
        {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        });
      }
    }
    
  });

  return Endorsements;
};