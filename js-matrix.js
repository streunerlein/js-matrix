
var charnumber = 9;

// only ascii stuff
var maxcharcode = 127;
var mincharcode = 32;
var charcodecount = maxcharcode - mincharcode;

var string = "";
var firstchar = String.fromCharCode(mincharcode);

var maxpossibilites = Math.pow(charcodecount, charnumber);

var str = "";
var num = 0;
var starti = Math.pow(charcodecount, charnumber - 1);

for (var i = starti; i < maxpossibilites; i++) {

	num = i;
	do {
		str = String.fromCharCode(num % charcodecount + mincharcode) + str;
		num = Math.floor(num / charcodecount);
	} while (num !== 0);

	console.log(str);

	str = "";
}