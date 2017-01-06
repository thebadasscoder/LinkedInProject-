
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
        // classMethods: {
        //   associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        // Experience.belongsTo(models.(SOMETHING), {
        //   onDelete: "CASCADE",
        // });
        // }
        // }
    });

    return Experience;
};