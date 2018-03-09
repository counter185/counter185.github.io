theme = "dark";

function themecolor(color) {
	themeColorQuery.setAttribute("content", color);
}

function init3ds() {
	dlBtn.innerHTML = " Download";
}
		
function changeImage() {
	
	var parseString = idBox.value;

	if (parseString.substring(0, 32) == "https://www.youtube.com/watch?v=") {
		idBox.value = parseString.substring (32, 32 + 11);
	}
	
	if (parseString.substring(0, 17) == "https://youtu.be/") { 
		idBox.value = parseString.substring (17, 17 + 11);
	}
	
	if (parseString.substring(0, 24) == "www.youtube.com/watch?v=") {
		idBox.value = parseString.substring (24, 24 + 11);
	}
				
	if (parseString.substring(0, 9) == "youtu.be/") {
		idBox.value = parseString.substring (9, 9 + 11);
	}

	if (idBox.value.length == 11){

		errorText.innerHTML = "";
		imgs.style.display = "block";
		i720.src = "https://i.ytimg.com/vi/" + idBox.value + "/maxresdefault.jpg";
		i480.src = "https://i.ytimg.com/vi/" + idBox.value + "/sddefault.jpg";
		i360.src = "https://i.ytimg.com/vi/" + idBox.value + "/hqdefault.jpg";
		i180.src = "https://i.ytimg.com/vi/" + idBox.value + "/mqdefault.jpg";
		i90.src = "https://i.ytimg.com/vi/" + idBox.value + "/default.jpg";
	
	} else if (idBox.value.length == 0) {
		imgs.style.display = "none";
		errorText.innerHTML = "";
	} else {
		imgs.style.display = "none";
		errorText.innerHTML = "Invalid Video link/ID";
	}
}

function keyDetect(e) {
	if (e.keyCode == 13) {
		changeImage();
	}
}
			
function displayAll() {
	idBox.className = "inText";
	dlBtn.className = "buttonDark";
	themeBtn.className = "buttonDark";
	idP.className = "vis";
}

function darkTheme() {
	createCookie("theme", "dark", false);
	theme = "dark";
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
	themeBtn.className = 'buttonDark';
	idBox.className = "inTextDark";
	themeBtn.innerHTML = "Light Theme";
	dlBtn.className = 'buttonDark';
	themecolor("#000000");
}
			
function lightTheme() {
	createCookie("theme", "light", false);
	theme = "light";
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
	themeBtn.className = 'buttonLight';
	idBox.className = "inTextLight";
	themeBtn.innerHTML = "Dark Theme";
	dlBtn.className = 'buttonLight';
	themecolor("#FFFFFF");
}

function changeTheme() {
	if (theme == "dark") {
		lightTheme();
	} else {
		darkTheme();
	}
}

function getDocumentVars() {
	themeColorQuery = document.querySelector("meta[name=theme-color]");
	dlBtn = document.getElementById("dlBtn");
	idBox = document.getElementById('ID');
	errorText = document.getElementById("errorText");
	imgs = document.getElementById("imgs");
	i720 = document.getElementById("720");
	i480 = document.getElementById("480");
	i360 = document.getElementById("360");
	i180 = document.getElementById("180");
	i90 = document.getElementById("90");
	themeBtn = document.getElementById("themebtn");
	idP = document.getElementById("idtext");
}

function onLoad() {
	getDocumentVars();
	displayAll();
	loadCookie();
	document.onkeyup = keyDetect;
	if (navigator.platform == "Nintendo 3DS") {
		init3ds();
	}
}

//stolen code begins here

function loadCookie() {
	if (readCookie("theme") == "light") {
		lightTheme();
	} else {
		darkTheme();
	}
}

function createCookie(name, value, days) {
	var expires = '',
		date = new Date();
	if (days) {
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = '; expires=' + date.toGMTString();
	}
	document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
	var cookies = document.cookie.split(';'),
		length = cookies.length,
		i,
		cookie,
		nameEQ = name + '=';
	for (i = 0; i < length; i += 1) {
			cookie = cookies[i];
			while (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1, cookie.length);
			}
			if (cookie.indexOf(nameEQ) === 0) {
			return cookie.substring(nameEQ.length, cookie.length);
		}
	}
	return null;
}
		
//stolen code ends here