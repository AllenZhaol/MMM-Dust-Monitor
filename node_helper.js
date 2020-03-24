/**
 * Magic Mirror
 * Node Helper: MMM-LocalTemperature
 *
 * By David Dearden
 * MIT Licensed.
 */

/**
 * Load resources required by this module.  
 */
var NodeHelper = require("node_helper");
const exec = require("child_process").exec;

/**
 * Use NodeHelper to create a module.  
 */
module.exports = NodeHelper.create({
	
	/**
	 * The minimum version of magic mirror that is required for this module to run. 
	 */
	requiresVersion: "2.2.1",
	
	/**
	 * Override the start function to run when the module is started up.  
	 * Used to provide initialization information to the console.
	 */
	start: function () {
		var self = this;
		console.log(self.name + ": module loaded! Path: " + this.path);
	},
	
	/**
	 * Override the socketNotificationReceived function to handle notifications sent from the client script. 
	 * 
	 * @param notification (string) The type of notification sent
	 * @param payload (any) The data sent with the notification
	 */
	socketNotificationReceived: function(notification, payload) {
		var self = this;
		console.log("1111111-1");
		self.getSensorData();
		

	},
	
	/**
	 * The getSensorData queries the sensor for data usin the provided script
	 * 
	 * @param payload (object) Contains the data required for querying the sensor
	 */
	getSensorData: function() {
		var self = this;
		console.log("1111111-2");
		exec("sudo python 001.py", {}, function(error, stdout, stderr){
			var result;
			if (!error) {
				result = '11';s
			} else {
				result = '22';
			}
			console.log("1111111-3");
			 self.sendSocketNotification(result); 
		});
	},
	
});
