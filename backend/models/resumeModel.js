"use strict";



module.exports = function(sequelize, DataTypes) {
    var Resume = sequelize.define("Resume", {
        name: DataTypes.STRING
        
    }, {
       classMethods: {
          associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        // Education.belongsToMany(models.Song, {through: "SongFeatures"});
        Resume.belongsTo(models.Language),
        Resume.belongsTo(models.Experience),
        Resume.belongsTo(models.Volunteer),
        Resume.belongsTo(models.Education)
          }
        }
    });

    return Resume;
};

// module.exports = function(sequelize, DataTypes) {
//   var Resume = sequelize.define("Language", {
//     language: DataTypes.STRING,
//     proficiency: DataTypes.STRING
    
//   }, {
//     // classMethods: {
//     //   // associate: function(models) {
//     //   //   // Using additional options like CASCADE etc for demonstration
//     //   //   // Can also simply do Language.belongsTo(models.User);
//     //   //   // Language.belongsTo(models.User, {
//     //   //   //   onDelete: "CASCADE",
//     //   //   //   foreignKey: {
//     //   //   //     allowNull: false
//     //   //   //   }
//     //   //   // });
//     //   // }
//     // }
//   });

//   return Language;
// };