var express = require('express');
var router = express.Router();
var mongo = require('../modules/mongo');
var work = require('../modules/mongo/work');
var server = require('../modules/mongo/server');

/* GET a works list. */
router.get('/', function (request, response, next) {
    work.find({}).populate('server_id').exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* GET a work by id. */
router.get('/:id', function (request, response, next) {
    work.find({ _id: request.params.id }).populate('server_id').exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* POST a work for creation. */
router.post('/', function (request, response, next) {
    var newWork = new work({
        origin_path: request.body.origin_path,
        destination_path: request.body.destination_path,
        user: request.body.user,
        authentication: request.body.authentication,
        authentication_type: request.body.authentication_type,
        command: request.body.command,
        server_id: request.body.server_id
    });
    newWork.save(function (error) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        var push_work = { work_id: newWork._id };
        server.findByIdAndUpdate(request.body.server_id,
            { $push: { works: push_work } },
            { safe: true, upsert: true },
            function (error, doc) {
                if (error) {
                    response.status(500).json({ error: error.message });
                    response.end();
                    return;
                } else {
                    console.log(push_work + " inserted in " + request.body.server_id);
                }
            }
        );
        response.json(newWork);
        response.end();
    });
});

/* UPDATE a single work. */
router.put('/:id', function (request, response, next) {
    work.findOneAndUpdate({ _id: request.params.id }, request.body, { upsert: true }, function (error, doc) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(request.body);
        response.end();
    });
});

/* DELETE a single work. */
router.delete('/:id', function (request, response, next) {
    work.find({ _id: request.params.id }).remove(function (error) {
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
