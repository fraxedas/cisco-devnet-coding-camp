(function (data) {
    var database = [
        {
            name: "Shayak Dutta",
            phone: "6479907435",
            location: "123 Sesame St, Toronto, ON M1W, Canada"
        },
        {
            name: "Oscar Fraxedas",
            phone: "6479716879",
            location: "123 Sesame St, Toronto, ON M1W, Canada"
        }];

    data.details = function (id) {
        return database[id];
    };
    
    data.roomId = "Y2lzY29zcGFyazovL3VzL1JPT00vZTQ4ODFmYjAtMTlkYS0xMWU2LWJmNGMtYzc2MWViNjMyMTg2";
    data.sparkToken = "NDEyZmJlOWQtZWI1MS00YzUwLWI5ZmQtYjRhMmRkZDYxNzliNjAwOGVkMjUtYzc0";
    
})(module.exports);