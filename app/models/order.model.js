module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    employeeID: {
      type: Sequelize.INTEGER
    },
    outletID: {
      type: Sequelize.INTEGER
    },
    customerID: {
      type: Sequelize.INTEGER
    },
    outletID: {
      type: Sequelize.INTEGER
    },
    totalPrice: {
      type: Sequelize.DECIMAL(10, 2)
    }
  }, {
    tableName: 'Order',
    timestamps: false
  });

  return Order;
};
