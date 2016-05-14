(function (homeController) {
	homeController.init = function (app) {

		var Sparky = require('node-sparky');

		var sparky = new Sparky({ token: 'NDEyZmJlOWQtZWI1MS00YzUwLWI5ZmQtYjRhMmRkZDYxNzliNjAwOGVkMjUtYzc0' });

		app.get("/", function (req, res) {
			res.send({ name: "Oscar & Shayak" });
		});

		app.get("/rooms", function (req, res) {
			sparky.rooms.get(function (err, results) {
				res.send(results);
			});
		});

		app.all("/rooms/:roomId", function (req, res) {
			var roomId = req.params.roomId;
			sparky.message.get(roomId, function (err, results) {
				res.send({ error: err, result: results });
			});
		});

		app.all("/rooms/:roomId/:text", function (req, res) {
			var roomId = req.params.roomId;
			var text = req.params.text;
			sparky.message.send.room(roomId, {
				text: text
			}, function (err, results) {
				res.send({ error: err, result: results });
			});
		});
	};
})(module.exports);