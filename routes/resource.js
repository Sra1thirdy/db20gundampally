var express = require('express');
const walnut_controllers= require('../controllers/walnut');  
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var walnut_controller = require('../controllers/walnut'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
router.get('/', walnut_controllers.walnut_view_all_Page );  
/// walnut ROUTES /// 
 
// POST request for creating a walnut.  
router.post('/walnut', walnut_controller.walnut_create_post); 
 
// DELETE request to delete walnut. 
router.delete('/walnut/:id', walnut_controllers.walnut_delete); 
 
// PUT request to update walnut. 
router.put('/walnut/:id', 
walnut_controllers.walnut_update_put); 
 
// GET request for one walnut. 
router.get('/walnut/:id', walnut_controllers.walnut_detail); 
 
// GET request for list of all walnut items. 
router.get('/walnut', walnut_controllers.walnut_list); 
 
module.exports = router; 
 