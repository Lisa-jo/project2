var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.render("index", {
        msg: "Welcome",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("user", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
