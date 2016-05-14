(function (homeController) {
	
	homeController.init = function (app) {
		
		var data = require('../data');
		var Sparky = require('node-sparky');
		var sparky = new Sparky({ token: data.sparkToken });

		app.get("/", function (req, res) {
			res.send({ name: "Oscar & Shayak" });
		});
		
		app.get("/sos/:id", function (req, res) {
			var details = data.details(req.params.id);
			
			var roomId = data.roomId;
			var text = details.name + " has initiated an SoS call";
			
			sparky.message.send.room(roomId, {
				text: text
			}, function (err, results) {
				res.send({ error: err, result: results });
			});
		});
		
	};
})(module.exports);