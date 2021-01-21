
//lazy evaluation
function randomNumber(){
	console.log('Generating a random number...');

	return Math.random() * 10;
}
function multiply(a, b = randomNumber()){
	return a * b;
}
console.log(multiply(5));
console.log(multiply(5));


/*
//Atribuições de maneira enxuta
function multiply(a = 2, b = 1){
	return a * b;
}
console.log(multiply(undefined,5));

*/

//Arrow functions- substituindo o bind

/*
var obj = {
	showContext: function showContext(){
		setTimeout(() => {
			this.log('after 1000ms');
		}, 1000);
	},
	log: function log(value) {
		console.log(value);
	}
};
obj.showContext();
*/

/*
//Gerando objeto através da função contrutora
function Car(){
	this.foo = 'bar';
}
console.log(new Car());
*/


/*
var sum = function(a,b){
	return a + b;
};
console.log(sum(5,5));

// Arrow functions

console.log(sum(5,5));

var creatObj = () => ({test:123});
console.log(creatObj());
*/