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
			module: "helloworld",
			position: "lower_third",
			config: {
				text: "Je suis le maître de mon destin, Je suis le capitaine de mon âme. - Invictus"
			}
		},
		{
		  module: "MMM-CyberSecurityNews",
		  position: "bottom_center",
		  header: "Cybersecurity",
		  config: {
		    numberOfArticles: 2
		  }
		},
		{
			module: "newsfeed",
			position: "top_center",
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
			module: 'MMM-Trello',
			position: 'top_right',
			config: {
				api_key: "228eec1016b3b42e320416de04fe7423",
				token: "dcec98cca570849e65b1bdfe565d2c304431d6bca21096f1c26c0aed93650f31",
				list: "604268437c125c8d618cd85a"
			}
		},
		{
			module: 'MMM-Paris-RATP-PG',
			position: 'bottom_right',
			header: 'Connections',
			config: {
				lines: [
					  {type: 'buses', line: 148, stations: 'lieutenant+lebrun', destination: 'A+R', firstCellColor: '#0055c8'},
					  {type: 'buses', line: 146, stations: 'lieutenant+lebrun', destination: 'A+R', firstCellColor: '#dc9600'},
					  {type: 'metros', line: '5', stations: 'bobigny+pablo+picasso', destination: 'A+R', label: '5', firstCellColor: '#6ECA97'},
				]
			}
    		},
		{
		     module: 'MMM-Ratp',
		     position: 'bottom_right',
		     header: 'Bus 148', // the title that will be displayed on top on the widget
		     config:{
			 apiURL:'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/148/lieutenant+lebrun/A+R', // more info about API documentation : https://github.com/pgrimaud/horaires-ratp-api
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
