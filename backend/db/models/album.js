'use strict';

module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    coverImageUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      // validate: {
      //   max: 1000
      // }
    }
  }, {});

  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: 'userId' });
    Album.hasMany(models.Image, { foreignKey: 'albumId', onDelete:'CASCADE', hooks:true });
  };

  return Album;
};