"use strict";

import { numbers, students, fruits } from "./data.js";

// const result = numbers.reduce((acc, cur, idx, src) => {
// 	console.log("acc:", acc, "cur:", cur, "idx:", idx);
// 	return acc + cur;
// }, 0);
// console.log("result:", result);

// 누적 값 (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)

console.log(fruits);
const result = fruits.reduce((acc, cur) => {
	console.log("acc:", acc, "cur:", cur);
	if (acc.includes(cur) === false) {
		acc.push(cur);
	}
	return acc;
},[]);
console.log(result);
