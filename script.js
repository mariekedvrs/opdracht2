window.setInterval(function(){


	//dates
	var mydate = new Date();
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var year = mydate.getFullYear();
	var daym = mydate.getDate();
	var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

	//time
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

		if (h == 24){
			h = 0;
		} else if (h > 12){
			h = h - 0;
		}

		if (h < 10) {
			h = "0" + h;
		}

		if (m < 10) {
			m = "0" + m;
		}

		if (s < 10) {
			s = "0" + s;
		}

		var CDClock = document.getElementById("CD");
		CDClock.textContent = dayarray[day] + " " + daym+  " " + montharray[month] + " " + year;
		CDClock.innerText = dayarray[day] + " " + daym+  " " + montharray[month] + " " + year;

		var hours   = document.getElementById('hours');
		var minutes = document.getElementById('minutes');
		var seconds = document.getElementById('seconds');

		hours.innerText = h + " :";
		minutes.innerText = m;
		seconds.innerText = ": " + s;

		if (h < 8) {
		document.body.style.backgroundImage = "url('images/backgroundnight.jpg')";
		document.getElementById("sun").style.display = "none";
		}	else if (h >19) {
		document.body.style.backgroundImage = "url('images/backgroundnight.jpg')";
		document.getElementById("sun").style.display = "none";
		}

		if (h > 8 && h < 22) {
		document.body.style.backgroundImage = "url('images/backgroundday.jpg')";
		document.getElementById("comet").style.display = "none";
		}


}, 1000);