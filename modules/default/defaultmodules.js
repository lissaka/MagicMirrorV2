/* Magic Mirror
 * Default Modules List
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

// Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.

var defaultModules = ["MMM-Trello", "MMM-Ratp","compliments","MMM-CoinMarketCap", "clock", "currentweather", "newsfeed"];
//var defaultModules = ["MMM-horoscope","MMM-CyberSecurityNews","MMM-RATP"];

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
