
module.exports = function(sequelize, DataTypes) {
    var Experience = sequelize.define("Experience", {
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        period: {
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
        Experience.hasMany(models.Resume,{ foreignKey: 'experience_fields'})
        // Resume.hasMany(models.Language,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Experience,{ foreignKey: 'resume_fields'}),
        // Resume.hasMany(models.Education,{ foreignKey: 'resume_fields'})
          }
        }
    });

    return Experience;
};