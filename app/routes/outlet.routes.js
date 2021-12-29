module.exports = app => {
  const outlet = require("../controllers/outlet.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", outlet.create);

  // Retrieve all Tutorials
  router.get("/", outlet.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", outlet.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", outlet.findOne);

  // Update a Tutorial with id
  router.put("/:id", outlet.update);

  // Delete a Tutorial with id
  router.delete("/:id", outlet.delete);

  // Delete all Tutorials
  router.delete("/", outlet.deleteAll);

  app.use('/api/outlet', router);
};
