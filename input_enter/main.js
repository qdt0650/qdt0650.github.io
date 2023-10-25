let datInput = document.getElementById('datEnter');
let enterBtn = document.getElementById('enterBtn');
let datInput2 = document.getElementsByName('datInput2')[0];
let date_input = document.getElementsByClassName('date_input')[0];

// enter를 누를 때 value 값 콘솔로 가져오기. 

date_input.addEventListener("keyup", (e) => {
	if(e.keyCode == 13){
		console.log(date_input.value);
	}
});

enterBtn.addEventListener("click", () => {

	console.log(date_input.value);
});


