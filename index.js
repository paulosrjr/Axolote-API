var cluster = require('cluster');

if (cluster.isMaster) {

    var cpuCount = require('os').cpus().length;

    //for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
        cluster.fork();
    //}

    cluster.on('exit', function (worker) {
        console.log('Worker %d died :(', worker.id);
        cluster.fork();
    });
} 

else {

    var debug = require('debug')('axolote_api');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var createError = require('http-errors');
    var express = require('express');
    var mongo = require('./modules/mongo');
    var swagger = require('swagger-express');
    var indexRouter = require('./routes/index.js');
    var serversRouter = require('./routes/servers');
    var worksRouter = require('./routes/works');
    var backupsRouter = require('./routes/backups');
    var parametersRouter = require('./routes/parameters');
    var usersRouter = require('./routes/users');

    process.env.UV_THREADPOOL_SIZE = 4

    /* Instance of app in express */
    var axolote = express();

    debug('axolote_api')

    /* Pre charge*/
    axolote.use(function (request, response, next) {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Accept, X-Requested-With, Origin, Content-Type');
        response.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
    axolote.use(express.json());
    axolote.use(express.urlencoded(
        { 
            extended: false 
        })
    );
    axolote.use(cookieParser());
    axolote.use(swagger.init(axolote, {
        apiVersion: '1.0',
        swaggerVersion: '1.0',
        basePath: 'http://localhost:3000',
        swaggerURL: '/swagger',
        swaggerJSON: '/api-docs.json',
        swaggerUI: './public/swagger/',
        apis: ['./docs/serverApi.yml','./docs/workApi.yml']
    }));
    axolote.use(express.static(path.join(__dirname, 'public')));

    /* Routes setup */
    axolote.use('/', indexRouter);
    axolote.use('/servers', serversRouter);
    axolote.use('/works', worksRouter);
    axolote.use('/backups', backupsRouter);
    axolote.use('/parameters', parametersRouter);
    axolote.use('/users', usersRouter);

    /* Default routes setup */
    axolote.use(function (req, res, next) {
        next(createError(404));
    });
    //axolote.use(function (err, req, res, next) {
    //    // Set locals, only providing error in development
    //    res.locals.message = err.message;
    //    res.locals.error = req.axolote.get('env') === 'development' ? err : {};
    //    res.status(500).json({ error: err.status });
    //});

    /* Start Axolote app */
    axolote.listen(3000, function () {
        console.log('Axolote API listening on port 3000');
    });
}
