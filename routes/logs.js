var express = require('express');
var router = express.Router();
var mongo = require('../modules/mongo');

/* GET a Logs list. */
router.get('/', function (req, res, next) {
    var Logs = mongo.Mongoose.model('Logs', mongo.LogsSchema, 'Logs');

    Logs.find({}).lean().exec(function (e, docs) {
        res.json(docs);
        res.end();
    });
    //res.send('respond with a Log resource');
});

/* GET a Log by id. */
router.get('/:id', function (req, res, next) {
    var Log = mongo.Mongoose.model('Logs', mongo.LogsSchema, 'Logs');

    Log.find({ _id: req.params.id}).lean().exec(function (e, docs) {
        res.json(docs);
        res.end();
    });
    //res.send('respond with a Log resource');
});

/* POST a Log for creation. */
router.post('/', function (req, res, next) {
    var Log = mongo.Mongoose.model('Logs', mongo.LogsSchema, 'Logs');

    var newLog = new Log({ name: req.body.name, host: req.body.host });
    newLog.save(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(newLog);
        res.end();
    });
});

/* UPDATE a single Log. */
router.put('/:id', function (req, res, next) {
    var Log = mongo.Mongoose.model('Logs', mongo.LogsSchema, 'Logs');

    Log.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    });
});

/* DELETE a single Log. */
router.delete('/:id', function (req, res, next) {
    var Log = mongo.Mongoose.model('Logs', mongo.LogsSchema, 'Logs');

    Log.find({ _id: req.params.id }).remove(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({ "success": true });
        res.end();
    });
});

module.exports = router;
