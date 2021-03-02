const check = require('./check');
module.exports = function(app){
    app.use('/check',check)
}