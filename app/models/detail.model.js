module.exports = (sequelize, Sequelize) => {
  const Detail = sequelize.define("detail", {
    orderID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    productID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    quantity: {
      type: Sequelize.INTEGER
    }
  }, {
    tableName: 'Detail',
    timestamps: false
  });

  return Detail;
};
