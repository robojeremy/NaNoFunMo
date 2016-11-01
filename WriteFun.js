/* WriteFun.js ver. 0.1.1 */
/* 
	WriteFun will write based on stuff ThinkFun thinks. 

	v.0.1.1 WriteFun simply outputs thoughtlessly whatever
	you give it.
*/


var writefunoutput;

function wfsetup() {
	createP("WriteFun Output:").parent('WriteFunZone');
	writefunoutput = createP("");
	writefunoutput.parent('WriteFunZone');
	writefunoutput.id('writefun');
}

function writefun(data) {
	writefunoutput.html(data);
}