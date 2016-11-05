/*  NaNoFunMo.js ver. 0.4.1 NaNoWriMo Bot */
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

//state 0: initializing or not operating
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
var elements = [];
var elementcount;
var currzone;

//setup happens automatically at program startup
function setup() {
	noCanvas();

	console.log("NaNoFunMo started");

	initcontents(); //set up page contents

	initstep = 0; //building
	nanofunmostate = -1; //initializing 
	contentcount = 0;
	elementcount = 0;

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
						elements[elementcount] = createElement(eltag, '');
						elements[elementcount].id(elid);
						elements[elementcount].class(elclass);

						if ( eltag == "div" ) { //element is a div
							currzone = elid;
						} else if ( eltag == "p" ) { //element is inside a div
							elements[elementcount].parent(currzone);
							elements[elementcount].html(eltext);
						} else { //h2, h3
							elements[elementcount].parent(currzone);
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
				} else { //finished initializing

					nanofunmostate = 0;
				}

			}

			break;
		case 0: //state 0: not operating, waiting for user

			break;
		case 1: //state 1: readfun is reading

			break;
		case 2: //state 2: learnfun is learning

			break;
		case 3: //state 3: thinkfun is thinking

			break;
		case 4: //state 4: writefun is writing

			break;
		default:
	}

	setTimeout(nanofunmo, 20); //loop continually 

}

//set up page contents
function initcontents() {

	contents[0] = [
		["div", "TitleZone", "titlearea", ""],
		["h2", "maintitle", "", "NaNoFunMo ver. 0.4.1 NaNoWriMo Bot"],
		["p", "maindescription", "infotext", "/* NaNoFunMo will algorithmically write a " + 
		"50,000 word novel which may or may not be gibberish during NaNoWriMo. */"]
	]
	contents[1] = [
		["div", "NaNoFunMoZone", "zonearea", ""],
		["h3", "nnfh", "zonetitle", "NaNoFunMo Lives Here"],
		["p", "nnfp1", "infotext", "/* NaNoFunMo is going to write. In order to write, " + 
		"NaNoFunMo will need to think. In order to think, NaNoFunMo will need to learn. " + 
		"In order to learn, NaNoFunMo will need to read. " + 
		"NaNoFunMo will use ReadFun, LearnFun, ThinkFun, and WriteFun. " + 
		"v. 0.4.1 Only ReadFun and WriteFun currently do something.  */"]
	]
	contents[2] = [
		["div", "ReadFunZone", "zonearea", ""],
		["h3", "rfh", "zonetitle", "ReadFun Lives Here"],
		["p", "rfp1", "infotext", "/* ReadFun will read texts. v.0.4.1 ReadFun distinguishes " + 
		"words and punctuation. Currently sends text data directly to WriteFun. Type some text into the " + 
		"input box for ReadFun to read. */"]
	]
	contents[3] = [
		["div", "LearnFunZone", "zonearea", ""],
		["h3", "lfh", "zonetitle", "LearnFun Lives Here"],
		["p", "lfp1", "infotext", "/* LearnFun will learn from the texts ReadFun reads. " + 
		"LearnFun does not do anything yet */"]
	]
	contents[4] = [
		["div", "ThinkFunZone", "zonearea", ""],
		["h3", "tfh", "zonetitle", "ThinkFun Lives Here"],
		["p", "tfp1", "infotext", "/* ThinkFun will think about the stuff that LearnFun learns. " + 
		"ThinkFun does not do anything yet. */"]
	]
	contents[5] = [
		["div", "WriteFunZone", "zonearea", ""],
		["h3", "wfh", "zonetitle", "WriteFun Lives Here"],
		["p", "wfp1", "infotext", "/* WriteFun will write based on stuff ThinkFun thinks. " + 
		"v.0.4.1 WriteFun receives text data and then writes randomly from the data. */"]
	]

}
