module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    productName: {
      type: Sequelize.STRING
    },
    productType: {
      type: Sequelize.STRING
    },
    productPrice: {
      type: Sequelize.DECIMAL(10, 2)
    }
  }, {
    tableName: 'Product',
    timestamps: false
  });

  return Product;
};
