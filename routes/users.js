var express = require('express');
var router = express.Router();
var mongo = require('../modules/mongo');
var user = require('../modules/mongo/user');

/* GET a users list. */
router.get('/', function (request, response, next) {
    user.find({}).exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* GET a user by id. */
router.get('/:id', function (request, response, next) {
    user.find({ _id: request.params.id }).exec(function (e, docs) {
        response.json(docs);
        response.end();
    });
});

/* POST a user for creation. */
router.post('/', function (request, response, next) {
    var newUser = new user({
        name: request.body.name,
        password: request.body.password
    });
    newUser.save(function (error) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(newUser);
        response.end();
    });
});

/* UPDATE a single user. */
router.put('/:id', function (request, response, next) {
    user.findOneAndUpdate({ _id: request.params.id }, request.body, { upsert: true }, function (error, doc) {
        if (error) {
            response.status(500).json({ error: error.message });
            response.end();
            return;
        }
        response.json(request.body);
        response.end();
    });
});

/* DELETE a single user. */
router.delete('/:id', function (request, response, next) {
    user.find({ _id: request.params.id }).remove(function (error) {
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
