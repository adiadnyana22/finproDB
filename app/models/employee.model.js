module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    employeeName: {
      type: Sequelize.STRING
    },
    employeeAddress: {
      type: Sequelize.STRING
    },
    employeePhone: {
      type: Sequelize.STRING
    },
    employeeGender: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    access: {
      type: Sequelize.STRING
    }
  }, {
    tableName: 'Employee',
    timestamps: false
  });

  return Employee;
};
