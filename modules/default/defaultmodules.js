/* Magic Mirror
 * Default Modules List
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

// Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.

var defaultModules = ["MMM-CyberSecurityNews","helloworld","MMM-Trello","MMM-Paris-RATP-PG","twitControl","MMM-CoinMarketCap", "clock", "currentweather", "newsfeed"];

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
