/* WriteFun.js ver. 0.1.1 */
/* 
	WriteFun will write based on stuff ThinkFun thinks. 

	v.0.1.1 WriteFun simply outputs thoughtlessly whatever
	you give it.
*/


var writefunzone;
var writefunoutput;

function wfsetup() {
	writefunzone = createDiv('');
	writefunzone.id('WriteFunZone');
	writefunzone.class('zone');
	writefunzone.style('background-color','aliceblue');
	writefunzone.style('border-color','darkblue');
	createElement('h3', 'WriteFun Lives Here').parent('WriteFunZone');

	createP('/* WriteFun will write based on stuff ThinkFun thinks. */').parent('WriteFunZone');

	createP("WriteFun Output:").parent('WriteFunZone');
	writefunoutput = createP("");
	writefunoutput.parent('WriteFunZone');
	writefunoutput.id('writefun');
}

function writefun(data) {
	writefunoutput.html(data);
}