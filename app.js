///// 1. Load Modules
	
	var express =  require("express"); // load express

	var mysql = require("mysql"); // load mysql

	var path  = require("path"); // load path to directories

	var dbsetup = require("./dbsetup.js") // load db connection setup


///// 2. configure app
	
	var app = express();

	app.set("views", path.join(__dirname, "views"));

	app.use(express.urlencoded({extended: true}))

	app.use(express.static(path.join(__dirname, "public")))

	var connection = dbsetup;

	 // establish temporary connecton with cloud db (clever-cloud.com) to fetch data and
	 // release connection or display error
	connection.getConnection(function(err, tempConnect){
		if(err){ 
			console.log("Can not connect to DB: ", err);
		}
		else{
			console.log("connection to db is successful");
		}
		if(tempConnect){
			tempConnect.release();
		}
	})



///// 3. route request
	
	// default router
	app.get("/", function(req, res){
		res.sendFile(__dirname + "/views/index.html")
	})

///// 4. launch app
app.listen(4000, ()=>{
	console.log("Our Application is live at 4000")
})
