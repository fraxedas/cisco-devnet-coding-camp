(function (tropoController) {

    var persist = require('node-persist');
    persist.initSync();

    tropoController.init = function (app) {
        app.post("/tropo/call", function (req, res) {
            var session = req.body.session;
            res.send({
                "tropo": [
                    {
                        "call": {
                            "to": [
                                session.parameters.numberToDial
                            ]
                        }
                    },
                    {
                        "say": [
                            {
                                "value": "Remember, you have a meeting at 2 PM"
                            }
                        ]
                    }
                ]
            });
        });

        app.all("/tropo/sms", function (req, res) {
            res.send({
                "tropo": [{ "say": { "value": "Really, it's that easy." } }]
            });
        });
    };
})(module.exports);