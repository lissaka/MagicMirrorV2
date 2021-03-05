/* Magic Mirror
 * Default Modules List
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

// Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.

var defaultModules = ["compliments","MMM-CoinMarketCap", "clock", "currentweather", "newsfeed", "MMM-RATP", "MMM-Trello"];
//var defaultModules = ["MMM-horoscope","MMM-CyberSecurityNews","MMM-RATP"];

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
