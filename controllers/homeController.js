(function (homeController) {
	homeController.init = function (app) {

		app.get("/", function (req, res) {
			res.send({ name: "Oscar & Shayak"});
		});
	};
})(module.exports);