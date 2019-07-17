var path = require('path');

//exporting html route
module.exports = function (app) {

    //index
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

    //survey
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
}