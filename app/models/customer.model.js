module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    customerName: {
      type: Sequelize.STRING
    },
    customerAddress: {
      type: Sequelize.STRING
    },
    customerPhone: {
      type: Sequelize.STRING
    },
    customerGender: {
      type: Sequelize.STRING
    }
  }, {
    tableName: 'Customer',
    timestamps: false
  });

  return Customer;
};
