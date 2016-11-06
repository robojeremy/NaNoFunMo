/* WriteFun.js ver. 0.3 */
/* 
	WriteFun will write based on stuff ThinkFun thinks. 

	v.0.2 WriteFun simply outputs thoughtlessly whatever
	you give it.
*/


var writefunoutput = [];
var outputcount = 0;
var wfwriting;

function wfsetup() {
	wfwriting = false;
	//make output area
	createP("WriteFun Output:").parent('WriteFunZone');
}

function writefun(writefundata) {
	//writefunoutput.html(data);

	//set status flag
	wfwriting = true;

	//make a new paragraph for the new output
	writefunoutput[outputcount] = createP("");
	writefunoutput[outputcount].parent('WriteFunZone');
	writefunoutput[outputcount].id('writefun' + outputcount);

	var wftext = new RiString(writefundata);
	wftokens = wftext.words();

	var writefuntext = "";
	for (var i = 0; i < wftokens.length; i++) {
		var randomword = wftokens[round(random(wftokens.length-1))];
		if (RiTa.isPunctuation(randomword)) {
			if (writefuntext.length > 0) {
				writefuntext = writefuntext.trim();
				writefuntext = writefuntext + randomword + ' ';
			}
		} else {
			if (writefuntext.length > 0) {
				writefuntext = writefuntext + randomword + ' ';
			} else {
				writefuntext = randomword + ' ';
			}
		}
	}

	//write the output
	typefun('#writefun' + outputcount, writefuntext);

	outputcount++;
	
	//reset status flag
	wfwriting = false;
}