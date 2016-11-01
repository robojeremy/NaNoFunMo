/* TypeFun ver. 0.1 */

var currfield;
var currdata;
var textpos = 1;
var typespeed = 70;
var typingdone = true;

function typefun(field, data) {
	currfield = field;
	currdata = data;

	typingdone = false;
	setTimeout(typer, randomGaussian(typespeed, 10));
}

function typer() {
	if (textpos <= currdata.length) {
		var typetext = currdata.slice(0,textpos);
		select(currfield).html(typetext);
		textpos++;
		setTimeout(typer, randomGaussian(typespeed, 10));
	} else {
		textpos = 1;
		typingdone = true;
	}
}


