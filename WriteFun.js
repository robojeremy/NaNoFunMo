/* WriteFun.js ver. 0.1.1 */
/* 
	WriteFun will write based on stuff ThinkFun thinks. 

	v.0.1.1 WriteFun simply outputs thoughtlessly whatever
	you give it.
*/


var writefunoutput = [];
var outputcount = 0;

function wfsetup() {
	createP("WriteFun Output:").parent('WriteFunZone');
}

function writefun(data) {
	//writefunoutput.html(data);
	if (typingdone == true) {

		writefunoutput[outputcount] = createP("");
		writefunoutput[outputcount].parent('WriteFunZone');
		writefunoutput[outputcount].id('writefun' + outputcount);

		typefun('#writefun' + outputcount, data);

		outputcount++;
	}
}