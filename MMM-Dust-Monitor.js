/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("MMM-Dust-Monitor",{

    // Default module config.
	defaults: {
        text: "Hello World!",
        //updateInterval: 1000 * 60, 
		//initialLoadDelay: 0,
		//animationSpeed: 1000 * 0.25,
    },
    requiresVersion: "2.1.0",
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},

	getTemplate: function () {
		return "MMM-Dust-Monitor.njk";
	},

	getTemplateData: function () {
		return this.config;
	}






});