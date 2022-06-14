const   express = require('express'),
        app     = express(),
        bodyParser = require('body-parser'),
        path = require('path'),
        port    = 7117;

// ***Requiring ROUTES files
const 	indexRoutes	= require("./routes/indexroute");
	 	

        
// Set Up
app.use(bodyParser.urlencoded({extended: true}));
// view engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(__dirname + "/public")); // Tell express to serve the public directory...



// ***TELL APP.JS to use these ROUTES
app.use("/", indexRoutes);


app.listen(process.env.PORT || port, process.env.IP, () => {
	console.log("LostArkInfo server started at port " + port);
});