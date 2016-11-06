/*  NaNoFunMo.js ver. 0.4.4 NaNoWriMo Bot */
/*  
	NaNoFunMo will algorithmically write a 50,000 word novel 
	which may or may not be gibberish during NaNoWriMo. 
	It should write 1666.666... words per day in order to 
	reach 50,000 words in 30 days of November. In order to 
	write, NaNoFunMo will need to think. In order to think, 
	NaNoFunMo will need to learn. In order to learn, NaNoFunMo 
	will need to read. NaNoFunMo will use ReadFun, LearnFun,
	ThinkFun, and WriteFun to do all that.
*/

//state -1: initializing
//state 0: not operating, waiting for user
//state 1: readfun is reading
//state 2: learnfun is learning
//state 3: thinkfun is thinking
//state 4: writefun is writing
var nanofunmostate;
//step 0: building title area
//step 1: building NaNoFunMoZone
//step 2: building ReadFunZone
//step 3: building LearnFunZone
//step 4: building ThinkFunZone
//step 5: building WriteFunZone
var initstep;
var contents = [];
var contentcount;
var currzone;

//setup happens automatically at program startup
function setup() {
	noCanvas();

	console.log("NaNoFunMo started");

	initcontents(); //set up page contents

	initstep = 0; //building
	nanofunmostate = -1; //initializing 
	contentcount = 0;

	//start running main loop
	nanofunmo();
}

function nanofunmo() {

	switch (nanofunmostate) {
		case -1: //state -1: initializing 
			if (typeready == true) { //wait until TypeFun is ready

				if ( initstep < contents.length ) { //remaining steps to initialize

					if (contentcount < contents[initstep].length) { //content to build
						var eltag = contents[initstep][contentcount][0];
						var elid = contents[initstep][contentcount][1];
						var elclass = contents[initstep][contentcount][2];
						var eltext = contents[initstep][contentcount][3];
						var element = createElement(eltag, '');
						element.id(elid);
						element.class(elclass);

						if ( eltag == "div" ) { //element is a div
							currzone = elid;
						} else if ( (eltag == "p") || (eltag == "span") ) { //element is inside a div
							element.parent(currzone);
							element.html(eltext);
						} else { //h2, h3
							element.parent(currzone);
							typefun('#' + elid, eltext);
						}

						contentcount++;
					} else { //subprograms to initialize

						switch (initstep) {
							case 2: //initialize ReadFun
								rfsetup();
								break;
							case 3: //initialize LearnFun
								lfsetup();
								break;
							case 4: //initialize ThinkFun
								tfsetup();
								break;
							case 5: //initialize WriteFun
								wfsetup();
								break;
							default:

						}

						contentcount = 0;
						initstep++; //next step to initialize
					}
				} else { //finished initializing, go to state 0

					select('#nnfstatus').html("ReadFun ready for input");
					select('#nnfstatus').class("status0");
					nanofunmostate = 0;
				}

			}

			break;
		case 0: //state 0: not operating, waiting for user

			//ReadFun started reading, go to state 1
			if (rfreading == true) { 
				select('#nnfstatus').html("ReadFun is reading");
				select('#nnfstatus').class("status1");
				nanofunmostate = 1;
			}

			break;
		case 1: //state 1: readfun is reading

			//ReadFun finished reading, go to state 4
			if ( (rfreading == false) && (rfdataready == true) ) {
				select('#nnfstatus').html("WriteFun is writing");
				select('#nnfstatus').class("status4");
				nanofunmostate = 4;
			}

			break;
		case 2: //state 2: learnfun is learning

			break;
		case 3: //state 3: thinkfun is thinking

			break;
		case 4: //state 4: writefun is writing

			//when entering state 4 
			if (rfdataready == true) {
				rfdataready = false;
				//send data to writefun
				writefun(readfuntext); 
			}

			//WriteFun finished writing, go to state 0
			if (wfwriting == false && typeready == true) {
				select('#nnfstatus').html("WriteFun finished writing; ReadFun ready for more input");
				select('#nnfstatus').class("status0");
				nanofunmostate = 0;				
			}

			break;
		default:
	}

	setTimeout(nanofunmo, 20); //loop continually 

}

//set up page contents
function initcontents() {

	contents[0] = [
		["div", "TitleZone", "titlearea", ""],
		["h2", "maintitle", "", "NaNoFunMo ver. 0.4.4 NaNoWriMo Bot"],
		["p", "maindescription", "infotext", "/* NaNoFunMo will algorithmically write a " + 
		"50,000 word novel which may or may not be gibberish during NaNoWriMo. " + 
		"(Learn about NaNoWriMo at: <a href='http://nanowrimo.org'>http://nanowrimo.org</a>) " + 
		"NaNoFunMo is written in JavaScript using the p5.js library and RiTa.js library. */"]
	]
	contents[1] = [
		["div", "NaNoFunMoZone", "zonearea", ""],
		["h3", "nnfh", "zonetitle", "NaNoFunMo"],
		["p", "nnfinfo", "infotext", "/* NaNoFunMo is going to write. In order to write, " + 
		"NaNoFunMo will need to think. In order to think, NaNoFunMo will need to learn. " + 
		"In order to learn, NaNoFunMo will need to read. " + 
		"NaNoFunMo will use ReadFun, LearnFun, ThinkFun, and WriteFun. " + 
		"v.0.4.4 Only ReadFun and WriteFun currently do something. */"],
		["span", "nnfstatus", "status0", "Initializing..."]
	]
	contents[2] = [
		["div", "ReadFunZone", "zonearea", ""],
		["h3", "rfh", "zonetitle", "ReadFun"],
		["p", "rfinfo", "infotext", "/* ReadFun will read texts. v.0.4.4 ReadFun separates paragraphs and " + 
		"sentences, and distinguishes words and punctuation. ReadFun then provides its data for " + 
		"NaNoFunMo to use. Type some text into the input box for ReadFun to read. */"]
	]
	contents[3] = [
		["div", "LearnFunZone", "zonearea", ""],
		["h3", "lfh", "zonetitle", "LearnFun"],
		["p", "lfinfo", "infotext", "/* LearnFun will learn from the texts ReadFun reads. " + 
		"LearnFun does not do anything yet */"]
	]
	contents[4] = [
		["div", "ThinkFunZone", "zonearea", ""],
		["h3", "tfh", "zonetitle", "ThinkFun"],
		["p", "tfinfo", "infotext", "/* ThinkFun will think about the stuff that LearnFun learns. " + 
		"ThinkFun does not do anything yet. */"]
	]
	contents[5] = [
		["div", "WriteFunZone", "zonearea", ""],
		["h3", "wfh", "zonetitle", "WriteFun"],
		["p", "wfinfo", "infotext", "/* WriteFun will write based on stuff ThinkFun thinks. " + 
		"v.0.4.4 WriteFun receives text data and then writes randomly from the data. */"]
	]

}
