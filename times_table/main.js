// let arr = [];
// for (let i = 9; i > 1; i--) {

// 	for (let a = 9; a > 0; a--) {
// 		let num = i*a;
// 		console.log(i + ' * ' + a + ' = ' + num);
// 	}
// } 
// console.log(num.length);

// const num = [ 2, 3, 4, 5, 6, 7, 8, 9 ];
// const count = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// // let i = 0
// // let j = 0;
// for (let i = 0; i < num.length; i++){

// 	for (let j = 0; j < count.length; j++){
// 		let result = num[i]*count[j];
// 		console.log(num[i] + ' * ' + count[j] + ' = ' + result );
// 	}

// }

const num1 = [2, 3, 4,5,6,7,8,9];
const num2 = [1,2, 3, 4,5,6,7,8,9];
const result = num1.map(x => num2.map(y => x * y));
console.log(result);
// const num2 = num1.map((x) => x * 2);
// console.log(num2);


// i -> 10

// const count = num.map(function (num){
// 	return num * ???
// });
// console.log(count);



