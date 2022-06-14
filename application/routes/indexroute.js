const   express         = require("express"),
        router          = express.Router();
        // passport		= require("passport"),
		// User 	 		= require("../models/user"),
		// middleware 		= require("../middleware");

// LANDING PAGE route
router.get('/', (req, res) => {
    res.send("LOST ARK INFO LANDING PAGE !!!");
});
// HOME PAGE route (required user logged in to access this page)
router.get('/home', (req, res) => {
    res.render("pages/Home");
});

// LOGIN route
router.get('/login', (req, res) => {
    // if(req.isAuthenticated()) {
	// 	req.flash("error", "You are already signed in.");
	// 	return res.redirect("/home");
	// }
    res.render("login");
});
// LOGIN logic
// router.post("/login", passport.authenticate("local", 
// 	{
// 		successRedirect: "/greybook",
// 		failureRedirect: "/login",
// 		failureFlash: true,
//         successFlash: "Successfully signed in!" 
// 	}), (req, res) => {
// });
router.post("/login", async (req, res) => {
    res.send("LOGIN POST PAGE!");
});

// RREGISTER route
router.get('/register', (req, res) => {
    res.render("Registration");
});
// REGISTER logic
router.post("/register", async (req, res) => {
	// let newUser	= new User({
	// 		username: req.body.username,
	// 		email: req.body.email
	// });
	// try {
	// 	let user = await User.register(newUser, req.body.password);	
	// 	passport.authenticate("local")(req, res, () => {
	// 		req.flash("success", "Welcome to Greybook " + user.username + "!");
	// 		res.redirect("/greybook");
	// 	});
	// } catch(error) {
	// 	req.flash("error", error.message);
	// 	return res.redirect("/register");
	// }
    res.send("REGISTER POST PAGE!");
});

module.exports = router;