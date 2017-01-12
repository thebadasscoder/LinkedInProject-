
module.exports = function(sequelize, DataTypes) {
    var Experience = sequelize.define("Experience", {
        company: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        period: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        expdescription: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        classMethods: {
          associate: function(models) {
        Experience.hasMany(models.Resume,{ foreignKey: 'experience_fields'})
        // Resume.hasMany(models.Language,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Experience,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Education,{ foreignKey: 'resume_fields'})
          }
        }
    });

    return Experience;
};