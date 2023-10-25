"use strict";

import { numbers, students, fruits } from "./data.js";

console.log(
	"짝수만 출력해주세요",
	numbers.filter(number => number % 2 === 0)
);

console.log(
	"홀수만 출력해주세요",
	numbers.filter(number => number % 2 === 1)
);

console.log(
	"영어점수가 80점 이상인 학생들은?",
	students.filter(student => student.english >= 80)
);