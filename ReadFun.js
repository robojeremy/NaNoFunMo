/* ReadFun.js ver. 0.1.2 */
/* 
	ReadFun will read books or other text in English.
	ReadFun will be able to... 

	v.0.1.2 ReadFun simply inputs text directly from a user
	via a text input box and sends it thoughtlessly directly
	to WriteFun
*/

var readfunzone;
var readfuninput;
var readfundata;

function rfsetup() {
	readfunzone = createDiv('');
	readfunzone.id('ReadFunZone');
	readfunzone.class('zone');
	readfunzone.style('background-color','mistyrose');
	readfunzone.style('border-color','darkred');
	createElement('h3', 'ReadFun Lives Here').parent('ReadFunZone');

	createP('/* ReadFun will read books. */').parent('ReadFunZone');

	createP('ReadFun Input:').parent('ReadFunZone');
	readfuninput = createInput();
	readfuninput.parent('ReadFunZone');
	readfuninput.id('readfun');
	readfuninput.input(readfun);
}

function readfun() {
	readfundata = readfuninput.value();
	writefun(readfundata);
}
