const express = require('express');
const app = express();
const process = require('process')
const exec = require('child_process').exec;
var dependency = require('./../lib/dependency.js');

var node_version;

exec("node -v", function (error, stdout, stderr) {
    node_version = stdout.trim();
});

app.get('/', function (request, response) {
    var number = dependency.getNumber();
    var output = {'app_name': "Hello Express CICD", 'node_version': node_version, 'env_vars': process.env, 'Number from library dependency': number};
    response.send(output);
});

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
