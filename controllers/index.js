(function(controllers) {
    var homeController = require('./homeController');
    var tropoController = require('./tropoController.js');
    
    controllers.init = function (app){
        homeController.init(app);
        tropoController.init(app);
    };
})(module.exports);