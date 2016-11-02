/* ReadFun.js ver. 0.1.2 */
/* 
	ReadFun will read books or other text in English.
	ReadFun will be able to... 

	v.0.1.2 ReadFun simply inputs text directly from a user
	via a text input box and sends it thoughtlessly directly
	to WriteFun
*/

var readfuninput;
var readfundata;

function rfsetup() {
	createP('ReadFun Input:').parent('ReadFunZone');
	readfuninput = createInput();
	readfuninput.parent('ReadFunZone');
	readfuninput.id('readfun');
	//readfuninput.input(readfun);
	readfuninput.changed(readfun);
}

function readfun() {
	readfundata = readfuninput.value();

	var readtext = createP('').parent('ReadFunZone');
	readtext.id('readtext');

	readtext.html(readfundata);

	writefun(readfundata);
}
