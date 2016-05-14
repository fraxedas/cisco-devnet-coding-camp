(function(applicationController){

    var persist = require('node-persist');
    persist.initSync();
    
    applicationController.init = function(app){
        app.post("/app/enable", function(req, res){
            res.send({ name : "Oscar Fraxedas", isValid: true });
        });
        
        app.get("/app/status", function (req, res) {
            res.send({ message : "I'm alive" });
        });
        
        app.get("/app/:appId/status", function (req, res) {
            var appId = req.params.appId;
            var client_secret = persist.getItem(appId);
            var url = 'https://' + req.get('host') + req.originalUrl;
            if(eloqua.verify(url, req.method, appId, client_secret)){
                res.send({ message : "I'm alive" });
            }
            else{
                res.send({ message : "Oauth verification failed on " + url});
            }
        });

        app.get("/app/callback", function (req, res) {
            res.send();
        });

        app.get("/apps", function(req, res){
            data.getApps(function (err, result) {
                res.render("apps", 
                {
                    title: "Applications", 
                    apps: result, 
                    error: req.flash("appError")
                });
            });
        });

        app.get("/apps/:name", function(req, res){
            var name = req.params.name;
            data.getApp(name, function (err, result) {
                res.render("app", 
                {
                    title: name,
                    app: result
                });
            });
        });
	};
})(module.exports);