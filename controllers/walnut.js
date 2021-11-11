var walnut = require("../models/walnut");

// List of all Costumes
exports.walnut_list = async function (req, res) {
  try {
    thewalnut = await walnut.find();
    res.send(thewalnut);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Costume.
exports.walnut_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: walnut detail: " + req.params.id);
};

// Handle Costume create on POST.
exports.walnut_create_post = async function (req, res) {
  console.log(req.body);
  let document = new walnut();
  document.walnut_type = req.body.walnut_type;
  document.weight = req.body.weight;
  document.cost = req.body.cost;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Costume delete form on DELETE.
exports.walnut_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: walnut delete DELETE " + req.params.id);
};

// Handle Costume update form on PUT.
exports.walnut_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: walnut update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.walnut_view_all_Page = async function (req, res) {
  try {
    thewalnut = await Costume.find();
    res.render("walnut", { title: "walnut Search Results", results: thewalnut });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};