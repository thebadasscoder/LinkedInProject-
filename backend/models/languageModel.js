"use strict";



module.exports = function(sequelize, DataTypes) {
    var Language = sequelize.define("Language", {
        language: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        proficiency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    }, {
        classMethods: {
          associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        // Education.belongsToMany(models.Song, {through: "SongFeatures"});
        // Language.belongsTo(models.Resume)
          }
        }
    });

    return Language;
};

// module.exports = function(sequelize, DataTypes) {
//   var Language = sequelize.define("Language", {
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