var express = require('express');
const { demo_insert, get_data, get_update_data, update_get_data, delete_data } = require('../controller/demo');
var router = express.Router();

/* GET home page. */
router.post('/', demo_insert);
router.get('/',get_data);
router.get('/update/:id',get_update_data);
router.post('/update/:id',update_get_data);
router.get('/delete/:id',delete_data);
module.exports = router;
