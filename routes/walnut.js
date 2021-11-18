var express = require("express");
const walnut_controlers= require('../controllers/walnut'); 
var router = express.Router();

/* GET home page. */
router.get('/', walnut_controlers.walnut_view_all_Page);

/* GET detail walnut page */ 
router.get('/detail', walnut_controlers.walnut_view_one_Page); 
/* GET create walnut page */ 
router.get('/create', walnut_controlers.walnut_create_Page);
/* GET create update page */ 
router.get('/update', walnut_controlers.walnut_update_Page); 
/* GET create walnut page */ 
router.get('/delete', walnut_controlers.walnut_delete_Page); 
 





module.exports = router;
