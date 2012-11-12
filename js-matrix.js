
var jshint = require("jshint").JSHINT;

var charnumber = process.argv[2];

while (true) {
	run();
	if (process.argv.length > 3 && process.argv[3] == 'continue') {
		charnumber++;
		continue;
	}
	break;
}

function run() {
	// only ascii stuff
	var maxcharcode = 127;
	var mincharcode = 32;

	var firstchar = String.fromCharCode(mincharcode);

	var str = strpad("", charnumber, firstchar);

	var num = 0;
	var i = 0;
	var starttime = new Date().getTime(), endtime = 0, persec = 0;

	while (true) {
		// increment word
		for (i = charnumber-1; i > -1; i--) {
			var cc = str.charCodeAt(i);

			if (cc < maxcharcode) {
				str = replaceAt(str, i, String.fromCharCode(cc + 1));
				break;
			}
			else {
				str = replaceAt(str, i, firstchar);
			}
		}

		if (i === 0) {
			break;
		}

		if (jshint(str)) {
			console.log(str);
		}
	}
}

function strpad(str, length, padder) {
	var strlen = str.length; 

	for (var i = strlen; i < length; i++) {
		str = padder + str;
	}

	return str;
}

function replaceAt(str, index, char) {
	return str.substr(0, index) + char + str.substr(index + 1);
}