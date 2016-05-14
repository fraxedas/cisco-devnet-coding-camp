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
	};
})(module.exports);