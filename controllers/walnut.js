var walnut = require("../models/walnut");

// List of all walnuts
exports.walnut_list = async function (req, res) {
  try {
    thewalnut = await walnut.find();
    res.send(thewalnut);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific walnut. 
exports.walnut_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await walnut.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 

// Handle walnut create on POST.
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

// Handle walnut delete on DELETE. 
exports.walnut_delete = async function(req, res) { 
  console.log("delete "  + req.params.id) 
  try { 
      result = await walnut.findByIdAndDelete( req.params.id) 
      console.log("Removed " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": Error deleting ${err}}`); 
  } 
};

// Handle walnut update form on PUT. 
exports.walnut_update_put = async function(req, res) { 
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
  try { 
      let toUpdate = await walnut.findById( req.params.id) 
      // Do updates of properties 
      if(req.body.walnut_type)  
             toUpdate.walnut_type = req.body.walnut_type; 
      if(req.body.cost) toUpdate.cost = req.body.cost; 
      if(req.body.weight) toUpdate.weight = req.body.weight; 
      let result = await toUpdate.save(); 
      console.log("Sucess " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
  } 
}; 

// VIEWS
// Handle a show all view
exports.walnut_view_all_Page = async function (req, res) {
  try {
    thewalnut = await walnut.find();
    res.render("walnut", { title: "walnut Search Results", results: thewalnut });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle a show one view with id specified by query
exports.walnut_view_one_Page = async function(req, res) {
  console.log("single view for id "  + req.query.id)
  try{
      result = await walnut.findById( req.query.id)
      res.render('walnutdetail', {
          title: 'walnut Detail', 
          toShow: result
      });
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};
//Handle building the view for creating a walnut.
// No body, no in path parameter, no query.
// Does not need to be async
exports.walnut_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('walnutcreate', { title: 'walnut Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a walnut. 
// query provides the id 
exports.walnut_update_Page =  async function(req, res) { 
  console.log("update view for item "+req.query.id) 
  try{ 
      let result = await walnut.findById(req.query.id) 
      res.render('walnutupdate', { title: 'walnut Update', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 
// Handle a delete one view with id from query 
exports.walnut_delete_Page = async function(req, res) { 
  console.log("Delete view for id "  + req.query.id) 
  try{ 
      result = await walnut.findById(req.query.id) 
      res.render('walnutdelete', { title: 'walnut Delete', toShow: 
result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 