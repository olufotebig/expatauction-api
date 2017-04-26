'use strict';
module.exports = function(sequelize, DataTypes) {
  var AuctionItem = sequelize.define('AuctionItem', {
    name: DataTypes.STRING,
    min_price: DataTypes.STRING,
    description: DataTypes.TEXT,
    coverphoto: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AuctionItem;
};