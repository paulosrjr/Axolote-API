var express = require('express');
var router = express.Router();
var mongo = require('../modules/mongo');
var server = require('../modules/mongo/server');

/* GET a servers list. */
router.get('/', function (request, response, next) {
    server.find({})
        .sort({ name: 'asc' })
        .exec(function(e, docs){
            response.json(docs);
            response.end();
    });
});

/* GET a paginate servers list. */
router.get('/page/:page', function (request, response, next) {
    var perPage = 10;
    var pageNumber = request.params.page > 0 ? request.params.page : 0;
    server.count({}, function (err, count) {
        if (err) console.log('Error %d', err);
        console.log('there are %d servers', count);
        var pageCount = Math.round(count / perPage, 0) + 1;
        server.find({})
            .limit(perPage)
            .skip(perPage * pageNumber)
            .sort({ name: 'asc' })
            .exec(function (e, docs) {
                ret = { pages: pageCount, page: pageNumber, data: docs };
                response.json(ret);
                response.end();
            });
    });   
});

/* GET a server by id. */
router.get('/:id', function (request, response, next) {
    server.find({_id: request.params.id}).exec(function(e, docs){
        response.json(docs);
        response.end();
    });
});

/* POST a server for creation. */
router.post('/', function (request, response, next) {
    var newServer = new server({
        name: request.body.name,
        address: request.body.address,
        address_type: request.body.address_type,
        description: request.body.description,
        environment: request.body.environment
    });
    newServer.save(function(error){
        if(error){
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(newServer);
        response.end();
    });
});

/* UPDATE a single server. */
router.put('/:id', function (request, response, next) {
    server.findOneAndUpdate({ _id: request.params.id }, request.body, { upsert: true }, function (error, doc) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(request.body);
        response.end();
    });
});

/* DELETE a single server. */
router.delete('/:id', function (request, response, next) {
    server.find({ _id: request.params.id }).remove(function (error) {
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
