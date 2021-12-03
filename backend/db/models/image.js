'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});

  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' });
    Image.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  
  return Image;
};