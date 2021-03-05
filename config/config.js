/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Paris",
				locationID: "2988507", //ID from http://bulk.openweathermap.org
				appid: "3f1badfaecbf2a3be703d38e5bf4e0ae"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_center",
			config: {
				feeds: [
					{
						title: "Le Monde",
						url: "https://www.lemonde.fr/rss/une.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},	
		{
  			module: "MMM-CyberSecurityNews",
  			position: "top_right",
  			config: {
    				numberOfArticles: 2,
  			}
		},
		{
    			module: "MMM-RATP",
    			position: "top_left",
    			config: {
        			theme: "dashboard",
        		timetables: {
            			config: [
               			 { type: "metro", line: "5", station: "bobigny+pablo+picasso", direction: "A" },
            			]
        		},
        		traffic: {
           		 	config: [
                		{ type: "metro", line: "5" }
            		]
        		}
   		 }
		},
		{
         		module: "MMM-CoinMarketCap",
         		position: "top_left",
   			header: "Crypto",
        		config: {
              			apiKey: 'c80092e3-52a4-4302-969d-a421b38cd872',
               			currencies: ['bitcoin', 'ethereum', 'litecoin', 'ripple'],
              			view: 'graphWithChanges',
             			conversion: "EUR",
           		 }
      		},
       
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
