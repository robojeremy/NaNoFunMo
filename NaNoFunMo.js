/*  NaNoFunMo.js ver. 0.2.3 NaNoWriMo Bot */
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

function setup() {
	noCanvas();

	console.log("NaNoFunMo started");

	initstep = 0; //building
	nanofunmostate = -1; //initializing 
	contentcount = 0;
	elementcount = 0;

	contents[0] = [
		["div", "TitleZone", ""],
		["h2", "maintitle", "NaNoFunMo ver. 0.2.3 NaNoWriMo Bot"],
		["p", "maindescription", "/* NaNoFunMo will algorithmically write a 50,000 word novel which may or may not be gibberish during NaNoWriMo. */"]
	]
	contents[1] = [
		["div", "NaNoFunMoZone", ""],
		["h3", "nnfh", "NaNoFunMo Lives Here"],
		["p", "nnfp1", "/* NaNoFunMo is going to write. In order to write, NaNoFunMo will need to think. In order to think, NaNoFunMo will need to learn. In order to learn, NaNoFunMo will need to read. NaNoFunMo uses ReadFun, LearnFun, ThinkFun, and WriteFun. */"]
	]
	contents[2] = [
		["div", "ReadFunZone", ""],
		["h3", "rfh", "ReadFun Lives Here"],
		["p", "rfp1", "/* ReadFun will read texts. */"]
	]
	contents[3] = [
		["div", "LearnFunZone", ""],
		["h3", "lfh", "LearnFun Lives Here"],
		["p", "lfp1", "/* LearnFun will learn from the texts ReadFun reads. */"]
	]
	contents[4] = [
		["div", "ThinkFunZone", ""],
		["h3", "tfh", "ThinkFun Lives Here"],
		["p", "tfp1", "/* ThinkFun will think about the stuff that LearnFun learns. */"]
	]
	contents[5] = [
		["div", "WriteFunZone", ""],
		["h3", "wfh", "WriteFun Lives Here"],
		["p", "wfp1", "/* WriteFun will write based on stuff ThinkFun thinks. */"]
	]

	setTimeout(nanofunmo, 20);
}

function nanofunmo() {

	switch (nanofunmostate) {
		case -1: //state -1: initializing 
			if (typingdone == true) { //wait until TypeFun is ready

				if ( initstep < contents.length ) { 

					if (contentcount < contents[initstep].length) { 
						var eltag = contents[initstep][contentcount][0];
						var elid = contents[initstep][contentcount][1];
						var eltext = contents[initstep][contentcount][2];
						elements[elementcount] = createElement(eltag, '');
						elements[elementcount].id(elid);

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
					} else {

						switch (initstep) {
							case 2: //ReadFun
								rfsetup();
								break;
							case 3: //LearnFun
								lfsetup();
								break;
							case 4: //ThinkFun
								tfsetup();
								break;
							case 5: //WriteFun
								wfsetup();
								break;
							default:

						}

						contentcount = 0;
						initstep++;
					}
				} else {

					nanofunmostate = 0;
				}

			}

			setTimeout(nanofunmo, 20);

			break;
		case 0: //state 0: not operating

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

}
