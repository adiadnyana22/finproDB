module.exports = (sequelize, Sequelize) => {
  const Outlet = sequelize.define("outlet", {
    outletName: {
      type: Sequelize.STRING
    },
    outletAddress: {
      type: Sequelize.STRING
    }
  }, {
    tableName: 'Outlet',
    timestamps: false
  });

  return Outlet;
};
