var ExampleController = require("../controllers/ExampleController.js");
// Routes
module.exports = function(app) {
    app.get('/', ExampleController.example);
};
