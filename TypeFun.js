/* TypeFun ver. 0.2 */

var currfield;
var currdata;
var textpos = 1;
var typespeed = 70; //milliseconds per character
var typeready = true;

function typefun(field, data) {
	//set status flag
	typeready = false;

	//get text and target
	currfield = field;
	currdata = data;


	//type the text
	typer();
}

function typer() {
	if (textpos <= currdata.length) { //there is text remaining to type
		var typetext = currdata.slice(0,textpos); //next character to type
		select(currfield).html(typetext); //type out a character
		textpos++;
		setTimeout(typer, randomGaussian(typespeed, 10)); //repeat at typing rate with some variance
	} else { //typing is finished
		textpos = 1; //reset 
		typeready = true; //reset status flag
	}
}


