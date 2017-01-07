"use strict";


module.exports = function(sequelize, DataTypes) {
    var Education = sequelize.define("Education", {
        school: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clubs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        society: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            validate:{
              isUrl: true, 
            },
            allowNull: false,
        },
    }, {
        classMethods: {
          associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        // Education.belongsToMany(models.Song, {through: "SongFeatures"});
        // Education.belongsTo(models.Resume)
        Education.hasMany(models.Resume,{ foreignKey: 'education_fields'})
        // Resume.hasMany(models.Language,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Experience,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Education,{ foreignKey: 'resume_fields'})
          }
        }
    });

    return Education;
};
// module.exports = function(sequelize, DataTypes) {
//   var Education = sequelize.define("Education", {
//     school: DataTypes.STRING,
//     degree: DataTypes.STRING,
//     date: DataTypes.STRING,
//     clubs: DataTypes.STRING,
//     society: DataTypes.STRING,
//     image: DataTypes.STRING
//   }, {
//     // classMethods: {
//     //   // associate: function(models) {
//     //   //   // Using additional options like CASCADE etc for demonstration
//     //   //   // Can also simply do Education.belongsTo(models.User);
//     //   //   // Education.belongsTo(models.User, {
//     //   //   //   onDelete: "CASCADE",
//     //   //   //   foreignKey: {
//     //   //   //     allowNull: false
//     //   //   //   }
//     //   //   // });
//     //   // }
//     // }
//   });

//   return Education;
// };