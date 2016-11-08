/* LearnFun.js ver. 0.2 */
/* 
	LearnFun will learn from the books/text ReadFun reads. 
*/

var learnfuninput = []; //array of RiTa strings from ReadFun
var lftokens = [];	//array of words/tokens (all words & tokens from input?)
var lftokenscount;
var lfbegins = [];	//words/tokens that begin sentences
var lfbeginscount;
var lfinsides = []; //words/tokens inside sentences
var lfinsidescount;
var lfends = [];	//words/tokens that end sentences
var lfendscount;
var learnfundata = [];	
var lfdatacount;
var lflearning;		//LearnFun status flag
var lfdataready;	//data status flag
var lfwork;
var lfpcount;

function lfsetup() {
	lftokenscount = 0;
	lfbeginscount = 0;
	lfinsidescount = 0;
	lfendscount = 0;
	lfpcount = 0;
	lflearning = false;
	lfdataready = false;
	lfdatacount = 0;
}

function lfreceive(data) {

	for (var i = 0; i < data.length; i++) {
		learnfuninput[i] = data[i];	//an array of RiTa strings
	}

	if (lfdatacount == 0) {	//create work area if it hasn't been already
		lfwork = createElement('div', '');
		lfwork.parent('LearnFunZone');
		lfwork.id('lfworkarea');
	} else { //reset work area if new data
		lfwork.html('');
	}

	lflearning = true;	//set status flags
	lfdataready = false;
	setTimeout(learnfun, 30);
}

function learnfun() {

	//tokenize each sentence
	for (var i = 0; i < learnfuninput.length; i++) {
		//tokenize a sentence
		var inputwords = learnfuninput[i].words();
		for (var j = 0; j < inputwords.length; j++) {


			lftokens[lftokenscount] = inputwords[j];
			lftokenscount++;

			if (j == 0) { //first token of sentence
				if (!lfbegins.includes(inputwords[j])) { //only include unique tokens
					lfbegins[lfbeginscount] = inputwords[j];
					lfbeginscount++;
				}
			} else if (j == (inputwords.length - 1) ) { //last token of sentence
				if (!lfends.includes(inputwords[j])) { //only include unique tokens
					lfends[lfendscount] = inputwords[j];
					lfendscount++;
				}
			} else { //token inside sentence (i.e. not first or last)
				if (!lfinsides.includes(inputwords[j])) { //only include unique tokens
					lfinsides[lfinsidescount] = inputwords[j];
					lfinsidescount++;
				}
			}
		}
	}

	//sort tokens into alphabetical order
	lfbegins = sort(lfbegins);
	lfinsides = sort(lfinsides);
	lfends = sort(lfends);

	var lfparagraph = createElement('p', '');
	lfparagraph.parent('lfworkarea');
	lfparagraph.id('lfp' + lfpcount);
	lfparagraph.class('lfparagraph');
	createElement('p', 'LearnFun Tokens:').parent('lfp' + lfpcount);

	//display all tokens
	for (var i = 0; i < lftokens.length; i++) {
		var displaytext = createElement('span', '');
		displaytext.parent('lfp' + lfpcount);

		if (RiTa.isPunctuation(lftokens[i])) {
			displaytext.class('rfpunc');
		} else {
			displaytext.class('rfword');
		}

		//show text that was read
		displaytext.html(lftokens[i]); 
	}

	lfparagraph = createElement('p', '');
	lfparagraph.parent('lfworkarea');
	lfpcount++;
	lfparagraph.id('lfp' + lfpcount);
	lfparagraph.class('lfparagraph');

	var lfdisplay = createElement('div', '');
	lfdisplay.parent('lfp' + lfpcount);
	lfdisplay.id('lfp' + lfpcount + 'd1');
	lfdisplay.class('lfdisplay');
	createElement('p', 'Beginning Tokens:').parent('lfp' + lfpcount + 'd1');

	//display all first tokens of sentences
	for (var i = 0; i < lfbegins.length; i++) {
		var displaytext = createElement('span', '');
		displaytext.parent('lfp' + lfpcount + 'd1');

		if (RiTa.isPunctuation(lfbegins[i])) {
			displaytext.class('rfpunc');
		} else {
			displaytext.class('rfword');
		}

		//show text that was read
		displaytext.html(lfbegins[i]); 
	}

	lfdisplay = createElement('div', '');
	lfdisplay.parent('lfp' + lfpcount);
	lfdisplay.id('lfp' + lfpcount + 'd2');
	lfdisplay.class('lfdisplay');
	createElement('p', 'Middle Tokens:').parent('lfp' + lfpcount + 'd2');

	//display all inside tokens of sentences
	for (var i = 0; i < lfinsides.length; i++) {
		var displaytext = createElement('span', '');
		displaytext.parent('lfp' + lfpcount + 'd2');

		if (RiTa.isPunctuation(lfinsides[i])) {
			displaytext.class('rfpunc');
		} else {
			displaytext.class('rfword');
		}

		//show text that was read
		displaytext.html(lfinsides[i]); 
	}

	lfdisplay = createElement('div', '');
	lfdisplay.parent('lfp' + lfpcount);
	lfdisplay.id('lfp' + lfpcount + 'd3');
	lfdisplay.class('lfdisplay');
	createElement('p', 'Ending Tokens:').parent('lfp' + lfpcount + 'd3');

	//display all last tokens of sentences
	for (var i = 0; i < lfends.length; i++) {
		var displaytext = createElement('span', '');
		displaytext.parent('lfp' + lfpcount + 'd3');

		if (RiTa.isPunctuation(lfends[i])) {
			displaytext.class('rfpunc');
		} else {
			displaytext.class('rfword');
		}

		//show text that was read
		displaytext.html(lfends[i]); 
	}

	lfdatacount++;

	lflearning = false;
	lfdataready = true;

}
