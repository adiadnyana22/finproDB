module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    paymentName: {
      type: Sequelize.STRING
    }
  }, {
    tableName: 'PaymentMethod',
    timestamps: false
  });

  return Payment;
};
