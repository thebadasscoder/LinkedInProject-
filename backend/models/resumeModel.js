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
        // Resume.hasMany(models.Language),
        // Resume.hasMany(models.Experience),
        // Resume.hasMany(models.Volunteer),
        // Resume.hasMany(models.Volunteer,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Language,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Experience,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Education,{ foreignKey: 'resume_fields'})
        // Resume.hasMany(models.Education)
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