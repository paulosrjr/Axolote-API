var express = require('express');
var router = express.Router();

/* GET api */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'api' });
    res.json({"docs": "not yet"})
});

module.exports = router;
