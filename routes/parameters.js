var express = require('express');
var router = express.Router();
var mongo = require('../modules/mongo');
var parameter = require('../modules/mongo/parameter');

/* GET a parameters list. */
router.get('/', function (request, response, next) {
    parameter.find({}).exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* GET a parameter by id. */
router.get('/:id', function (request, response, next) {
    parameter.find({ _id: request.params.id }).exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* POST a parameter for creation. */
router.post('/', function (request, response, next) {
    var newParameter = new parameter({
        name: request.body.name,
        address: request.body.address,
        address_type: request.body.address_type,
        description: request.body.description,
        environment: request.body.environment
    });
    newParameter.save(function (error) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(newParameter);
        response.end();
    });
});

/* UPDATE a single parameter. */
router.put('/:id', function (request, response, next) {
    parameter.findOneAndUpdate({ _id: request.params.id }, request.body, { upsert: true }, function (error, doc) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(request.body);
        response.end();
    });
});

/* DELETE a single parameter. */
router.delete('/:id', function (request, response, next) {
    parameter.find({ _id: request.params.id }).remove(function (error) {
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
