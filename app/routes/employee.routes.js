module.exports = app => {
  const employee = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", employee.create);

  // Retrieve all Tutorials
  router.get("/", employee.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", employee.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", employee.findOne);

  // Update a Tutorial with id
  router.put("/:id", employee.update);

  // Delete a Tutorial with id
  router.delete("/:id", employee.delete);

  // Delete all Tutorials
  router.delete("/", employee.deleteAll);

  app.use('/api/employee', router);
};
