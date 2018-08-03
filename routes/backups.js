var express = require('express');
var router = express.Router();
var mongo = require('../modules/mongo');
var backup = require('../modules/mongo/backup');

/* GET a backups list. */
router.get('/', function (request, response, next) {
    backup.find({}).exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* GET a backup by id. */
router.get('/:id', function (request, response, next) {
    backup.find({ _id: request.params.id }).exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* POST a backup for creation. */
router.post('/', function (request, response, next) {
    var newBackup = new backup({
        name: request.body.name,
        address: request.body.address,
        address_type: request.body.address_type,
        description: request.body.description,
        environment: request.body.environment
    });
    newBackup.save(function (error) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(newBackup);
        response.end();
    });
});

/* UPDATE a single backup. */
router.put('/:id', function (request, response, next) {
    backup.findOneAndUpdate({ _id: request.params.id }, request.body, { upsert: true }, function (error, doc) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(request.body);
        response.end();
    });
});

/* DELETE a single backup. */
router.delete('/:id', function (request, response, next) {
    backup.find({ _id: request.params.id }).remove(function (error) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json({ "deleted": "true" });
        response.end();
    });
});

module.exports = router;
