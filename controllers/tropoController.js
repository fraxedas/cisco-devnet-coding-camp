(function (tropoController) {

    var persist = require('node-persist');
    persist.initSync();

    tropoController.init = function (app) {
        
        //https://www.tropo.com/docs/rest/tutorials/starting-session-webapi
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
                                "value": "You have initiated an SoS call. Do you want to cancel it?"
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