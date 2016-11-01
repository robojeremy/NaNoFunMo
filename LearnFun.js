/* LearnFun.js ver. 0.0 */
/* 
	LearnFun will learn from the books/text ReadFun reads. 
*/

var learnfunzone;

function lfsetup() {
	learnfunzone = createDiv('');
	learnfunzone.id('LearnFunZone');
	learnfunzone.class('zone');
	learnfunzone.style('background-color','lightyellow');
	learnfunzone.style('border-color','gold');
	createElement('h3', 'LearnFun Lives Here').parent('LearnFunZone');

	createP('/* LearnFun will learn from the books ReadFun reads. */').parent('LearnFunZone');
}

function learnfun() {

}
