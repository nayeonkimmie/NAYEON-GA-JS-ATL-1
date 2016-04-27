var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

var howAreYou;
howAreYou = ["Great!", "Fabulous!", "I love mushrooms!", "Pretty good!", "I want some food", "Good, how about you?"];

module.exports = function(robot) {
	robot.respond(/hi|hello|yo|sup|nayeonibot1/i, function(msg) {
		return msg.send("Sup?");
  	});

	robot.hear(/ship it/i, function(msg) {
		return msg.send(msg.random(squirrels));
  	});

	robot.hear(/how are you/i, function(msg) {
		return msg.send(msg.random(howAreYou));
  	});  

	robot.respond(/What do you like to eat/i, function(msg) {
		return msg.send("Everything! Give me some pizza.");
 	});

};