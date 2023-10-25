let time1 = setTimeout(() => {
  console.log("called Time 1");
}, 1000);

window.addEventListener("DOMContentLoaded", (event) => {
	let btnStart = document.getElementById('btnStart');
	let numCount = document.getElementById('numCount');
	let setClear = document.getElementById('setClear');
	let btnStop = document.getElementById('btnStop');
	let timeCount = 0;
	let timer = null;
	let toggle = false;

	btnStart.addEventListener("click", () => {
		if(timer == null){
			timer = setInterval(()=> {
				// timeCount = timeCount + 1;
				if (toggle == false) {						
					timeCount++
					numCount.innerText = timeCount;
				}
			}, 1000);
		}
		
		// numCount.innerText = '100';
		//console.log('click', numCount.innerHTML);
	});

	btnStop.addEventListener("click", () => {
		if (false == toggle) {
			toggle = true;
		} else {
			toggle = false;
		}
	});

	setClear.addEventListener("click", () => {
		timeCount = 0;
		numCount.innerText = timeCount;
		clearInterval(timer);
		timer = null;
		toggle = false;
	});
});