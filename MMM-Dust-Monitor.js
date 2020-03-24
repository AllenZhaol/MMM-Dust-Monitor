/* global Module */

/* Magic Mirror
 * Module: MMM-Dust-Monitor
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
var Dustnum =0;

Module.register("MMM-Dust-Monitor",{

    // Default module config.
	defaults: {
        text: "Hello World!",
 
	},
	
	requiresVersion: "2.1.0",

	start: function() {
		var self = this;
		console.log("2222222-1");
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, 1000); //perform every 1000 milliseconds.
	},

/**
	 * Override the socketNotificationReceived function to handle the notifications sent from the node helper
	 *
	 * @param notification (string) The type of notification sent
	 * @param payload (any) The data sent with the notification
	 */
	socketNotificationReceived: function(notification, payload) {
		var self = this;
		console.log("2222222-2");
		self.getDom();
	},







	// Override dom generator.
	getDom: function() {
		console.log("2222222-3");
		self.sendSocketNotification();
		console.log("2222222-4");

		//var wrapper = document.createElement("div");
		//wrapper.innerHTML = Dustnum;
		//return wrapper;
	},







});