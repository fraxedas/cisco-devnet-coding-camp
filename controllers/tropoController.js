(function (tropoController) {

    var persist = require('node-persist');
    persist.initSync();

    tropoController.init = function (app) {
        app.all("/tropo/call", function (req, res) {
            res.send({
                "tropo": [{ "say": { "value": "Guess what? https://www.tropo.com/docs/troporocks.mp3" } }]
            });
        });

        app.all("/tropo/sms", function (req, res) {
            res.send({
                "tropo": [{ "say": { "value": "Really, it's that easy." } }]
            });
        });
    };
})(module.exports);