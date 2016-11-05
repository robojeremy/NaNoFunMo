/* ReadFun.js ver. 0.4 */
/* 
	ReadFun will read books or other text in English.
	ReadFun will be able to:
	- break a text down by words, spaces, punctuation, 
	  sentences and paragraphs.

	v.0.4 ReadFun simply inputs text directly from a user
	via a text input box and sends it thoughtlessly directly
	to WriteFun. ReadFun can separate words. 
*/

var readfuninput;
var readfuntext;
var readfundata;
var readtext;
var rfdataready;
var rftokens = [];
var pcount;
var scount;
var rfwork;

function rfsetup() {
	createP('ReadFun Input:').parent('ReadFunZone');
	readfuninput = createInput();
	readfuninput.parent('ReadFunZone');
	readfuninput.id('readfun');
	readfuninput.size(250);
	pcount = 0;
	scount = 0;
	readfuninput.changed(readfun);
	rfdataready = true;
}

function readfun() {
	rfdataready = false; //set status flag

	readfuntext = readfuninput.value(); //get text
	readtext = createP('').parent('ReadFunZone');
	readtext.html(readfuntext); //show text that was read

	//parse text
	readfundata = new RiString(readfuntext);
	rftokens = readfundata.words();

	if (pcount == 0) {
		rfwork = createElement('div', '');
		rfwork.parent('ReadFunZone');
		rfwork.id('rfworkarea');
	}

	pcount++;
	var rfparagraph = createElement('p', '');
	rfparagraph.parent('rfworkarea');
	rfparagraph.class('rfparagraph');
	rfparagraph.id('rp' + pcount);

	scount++;
	var rfsentence  = createElement('span', '');
	rfsentence.parent('rp' + pcount);
	rfsentence.class('rfsentence');
	rfsentence.id('rp' + pcount + 's' + scount);

	for (var i = 0; i < rftokens.length; i++) {
		var displaytext = createElement('span', '');
		displaytext.parent('rp' + pcount + 's' + scount);

		if (RiTa.isPunctuation(rftokens[i])) {
			displaytext.class('rfpunc');
		} else {
			displaytext.class('rfword');
		}

		displaytext.html(rftokens[i]); //show text that was read
	}

	writefun(readfuntext); //send data to writefun

	rfdataready = true; //reset status flag
}
