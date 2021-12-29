module.exports = app => {
  const detail = require("../controllers/detail.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", detail.create);

  // Retrieve all Tutorials
  router.get("/", detail.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", detail.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/:id", detail.findOne);

  // Update a Tutorial with id
  // router.put("/:id", detail.update);

  // Delete a Tutorial with id
  // router.delete("/:id", detail.delete);

  // Delete all Tutorials
  router.delete("/", detail.deleteAll);

  app.use('/api/detail', router);
};
