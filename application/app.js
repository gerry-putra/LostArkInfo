const   express = require('express'),
        app = express(),
        port = 7117;






// Temporary route. Will be refactored to 'route' dir.
app.get('/', (req, res) => {
    res.send("LOST ARK INFO HOMEPAGE !!!");
});





app.listen(process.env.PORT || port, process.env.IP, () => {
	console.log("The greyBook server start at port " + port);
});