/* ThinkFun.js ver. 0.0 */
/* 
	ThinkFun will think about the stuff that LearnFun learns. 
*/

var thinkfunzone;

function tfsetup() {
	thinkfunzone = createDiv('');
	thinkfunzone.id('ThinkFunZone');
	thinkfunzone.class('zone');
	thinkfunzone.style('background-color','mintcream');
	thinkfunzone.style('border-color','darkgreen');
	createElement('h3', 'ThinkFun Lives Here').parent('ThinkFunZone');

	createP('/* ThinkFun will think about the stuff that LearnFun learns. */').parent('ThinkFunZone');
}

function thinkfun() {

}