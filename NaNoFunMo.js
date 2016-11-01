/*  NaNoFunMo.js ver. 0.1.10 Pre-NaNoWriMo Bot */
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



var nanofunmozone;

function setup() {
	noCanvas();

	console.log("NaNoFunMo started");

	nanofunmozone = createDiv('');
	nanofunmozone.id('NaNoFunMoZone');
	nanofunmozone.class('zone');
	nanofunmozone.style('background-color','whitesmoke');
	nanofunmozone.style('border-color','dimgrey');
	createElement('h3', 'NaNoFunMo Lives Here').parent('NaNoFunMoZone');

	createP('/* NaNoFunMo is going to write. In order to write, NaNoFunMo will need to think. In order to think, NaNoFunMo will need to learn. In order to learn, NaNoFunMo will need to read. */').parent('NaNoFunMoZone');

	createP('NaNoFunMo is creating ReadFun...').parent('NaNoFunMoZone');
	rfsetup();

	createP('NaNoFunMo is creating LearnFun...').parent('NaNoFunMoZone');
	lfsetup();

	createP('NaNoFunMo is creating ThinkFun...').parent('NaNoFunMoZone');
	tfsetup();

	createP('NaNoFunMo is creating WriteFun...').parent('NaNoFunMoZone');
	wfsetup();

	console.log("NaNoFunMo done");
}
