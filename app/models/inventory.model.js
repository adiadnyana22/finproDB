module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define("inventory", {
    productID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    outletID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    quantity: {
      type: Sequelize.INTEGER
    }
  }, {
    tableName: 'Inventory',
    timestamps: false
  });

  return Inventory;
};
