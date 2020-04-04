	function digitalClock(){
	var today = new Date();
	var day = today.getMonth() + 1 + "월" + today.getDate() + "일";
	var time = today.getHours() + "분" + today.getSeconds() + "초";
	
	document.getElementById("digitalClock").innerHTML = day + time;
	setTimeout('digitalClock()', 1000);
	}
	digitalClock();