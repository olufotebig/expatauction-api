'use strict';
module.exports = function(sequelize, DataTypes) {
  var Auction = sequelize.define('Auction', {
    name: DataTypes.STRING,
    datetime: DataTypes.DATETIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Auction;
};