(function(controllers) {
    var homeController = require('./homeController');
    var applicationController = require('./applicationController.js');
    
    controllers.init = function (app){
        homeController.init(app);
        applicationController.init(app);
    };
})(module.exports);