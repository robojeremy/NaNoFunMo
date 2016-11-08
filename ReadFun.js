/* ReadFun.js ver. 0.6 */
/* 
	ReadFun will read books or other text in English.
	ReadFun will be able to:
	- break a text down by words, spaces, punctuation, 
	  sentences and paragraphs.

	v.0.6 ReadFun inputs text from a user via a text input 
	box and then parses the text. ReadFun can separate 
	sentences. ReadFun can distinguish words and punctuation.
	ReadFun puts the parsed text into a data structure for
	NaNoFunMo or other functions to use.  
*/

var readfuninput; //user input box
var readfuntext; //text retrieved from input box
var readfunsentences = []; //array of sentences
var readfundata = []; //array of RiTa strings
var rfreading; //ReadFun status flag
var rfdataready; //data status flag
var rftokens = []; //tokenized RiTa string
var rfpcount; //paragraph counter
var rfscount; //sentence counter
var rfwork; //text parsing display area

function rfsetup() {
	createP('ReadFun Input:').parent('ReadFunZone');
	readfuninput = createInput();
	readfuninput.parent('ReadFunZone');
	readfuninput.id('readfun');
	readfuninput.size(250);
	rfpcount = 0;
	rfscount = 0;
	readfuninput.changed(rfreceive);
	rfdataready = false;
	rfreading = false;
}

function rfreceive() {
	//set status flags
	rfreading = true;
	rfdataready = false; 

	//get new input to read
	readfuntext = readfuninput.value(); //get text

	setTimeout(readfun, 40);
}

function readfun() {

	//open up work area if it hasn't been already
	if (rfpcount == 0) {
		rfwork = createElement('div', '');
		rfwork.parent('ReadFunZone');
		rfwork.id('rfworkarea');
	}

	//make a new paragraph display element for the new input
	rfpcount++;
	var rfparagraph = createElement('p', '');
	rfparagraph.parent('rfworkarea');
	rfparagraph.class('rfparagraph');
	rfparagraph.id('rp' + rfpcount);

	//parse text
	readfunsentences = RiTa.splitSentences(readfuntext);

	rfscount = 0;
	for (var j = 0; j < readfunsentences.length; j++) {

		//convert a sentence into a RiTa string
		readfundata[j] = new RiString(readfunsentences[j]);
		//then tokenize the sentence into words
		rftokens = readfundata[j].words(); 

		//make a new sentence display element for each sentence
		rfscount++;
		var rfsentence  = createElement('span', '');
		rfsentence.parent('rp' + rfpcount);
		rfsentence.class('rfsentence');
		rfsentence.id('rp' + rfpcount + 's' + rfscount);

		//print out the sentence with tokenized words and punctuation
		for (var i = 0; i < rftokens.length; i++) {
			var displaytext = createElement('span', '');
			displaytext.parent('rp' + rfpcount + 's' + rfscount);

			if (RiTa.isPunctuation(rftokens[i])) {
				displaytext.class('rfpunc');
			} else {
				displaytext.class('rfword');
			}

			//show text that was read
			displaytext.html(rftokens[i]); 
		}

	}

	//reset status flags
	rfdataready = true; 
	rfreading = false;
}
