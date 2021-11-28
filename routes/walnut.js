var express = require("express");
const walnut_controlers= require('../controllers/walnut'); 
var router = express.Router();

/* GET home page. */
router.get('/', walnut_controlers.walnut_view_all_Page);

/* GET detail walnut page */ 
router.get('/detail', walnut_controlers.walnut_view_one_Page); 
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET create walnut page */ 
router.get('/create',secured, walnut_controlers.walnut_create_Page);
/* GET create update page */ 
router.get('/update',secured, walnut_controlers.walnut_update_Page); 
/* GET create walnut page */ 
router.get('/delete',secured, walnut_controlers.walnut_delete_Page); 
 





module.exports = router;
