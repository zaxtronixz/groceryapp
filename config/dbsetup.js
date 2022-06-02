///
/// The CLoud Database setup for the application is configured here
///	clever-cloud.com is used as the cloud db provider

// IMPORT MODULES
///////////////////////////////////


	// To include the mysql module 
	var mysql = require('mysql');


// SETUP MODULES
////////////////////////////////////

	// given variables
	var connect = createConnection({

		host: "bmu9xvn7rdk4oq98mlkx-mysql.services.clever-cloud.com",
		user: "ujxezoszgxsbcpfd",
		password: "08I8Vi1IKiRdSl0DfASY",
		port: 3306,
		database: "bmu9xvn7rdk4oq98mlkx"
	})


// EXECUTE & EXPORT
/////////////////////////////////////


module.exports = connect;

