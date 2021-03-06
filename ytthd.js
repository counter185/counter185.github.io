reset = true;
/*cookies:
"theme" - "light" or "dark" - controls theme
"lastId" - previous id
*/

		
function getVar(){
	partialT = document.getElementById("partial");
	partBB = document.getElementById("partialBack");
	dlBtn = document.getElementById("dlBtn");
	idBox = document.getElementById('ID');
	imgs = document.getElementById("imgs");
	i720 = document.getElementById("720");
	i480 = document.getElementById("480");
	i360 = document.getElementById("360");
	i180 = document.getElementById("180");
	i90 = document.getElementById("90");
	p720 = document.getElementById("p720");
	p480 = document.getElementById("p480");
	p360 = document.getElementById("p360");
	p180 = document.getElementById("p180");
	idP = document.getElementById("idtext");
}
		
function parseLink(inpLink) {
	if (inpLink.substring(0, 32) == "https://www.youtube.com/watch?v=") {
		return inpLink.substring (32, 32 + 11);
	}
	
	if (inpLink.substring(0, 17) == "https://youtu.be/") { 
		return inpLink.substring (17, 17 + 11);
	}
	
	if (inpLink.substring(0, 30) == "https://m.youtube.com/watch?v=") {
		return inpLink.substring(30, 30 + 11);
	}
	
	if (inpLink.substring(0, 24) == "www.youtube.com/watch?v=") {
		return inpLink.substring (24, 24 + 11);
	}
				
	if (inpLink.substring(0, 9) == "youtu.be/") {
		return inpLink.substring (9, 9 + 11);
	}
	return inpLink;
}

function changeImage() {
	
	idBox.value = parseLink(idBox.value);

	if (idBox.value.length == 11){

		document.getElementById("errorText").innerHTML = "";
		imgs.style.display = "block";
		i720.src = "https://i.ytimg.com/vi/" + idBox.value + "/maxresdefault.jpg";
		i480.src = "https://i.ytimg.com/vi/" + idBox.value + "/sddefault.jpg";
		i360.src = "https://i.ytimg.com/vi/" + idBox.value + "/hqdefault.jpg";
		i180.src = "https://i.ytimg.com/vi/" + idBox.value + "/mqdefault.jpg";
		i90.src = "https://i.ytimg.com/vi/" + idBox.value + "/default.jpg";
		resetPs();
		checkImgs();
	} else if (idBox.value.length == 0) {
		imgs.style.display = "none";
		document.getElementById("errorText").innerHTML = "";
	} else {
		imgs.style.display = "none";
		document.getElementById("errorText").innerHTML = "Invalid Video link/ID";
	}
	
	
}

function resetPs() {
	reset = true;
	p720.style = p480.style = "display: block;";
	p360.style = p180.style = "display: inline-block;";
}

function checkImgs() {
	if (reset == true) {
		if (i720.clientWidth == 0 || i480.clientWidth == 0 || i360.clientWidth == 0 || i180.clientWidth == 0) {
			setTimeout(function() {checkImgs();}, 300);
		}
		if (i720.clientWidth == 120) {
			p720.style = "display: none;";
		}
		if (i480.clientWidth == 120) {
			p480.style = "display: none;";
		}
		if (i360.clientWidth == 120) {
			p360.style = "display: none;";
		}
		if (i180.clientWidth == 120) {
			p180.style = "display: none;";
		}
		reset = false;
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

function updateLastImg() {
	try {
		var idCookie = readCookie("lastId");
		if (idCookie.length == 11) {
			prevImgP.className = "vis";
			prevImgA.href = "/?id=" + idCookie;
			prevImg.src = "https://i.ytimg.com/vi/" + idCookie + "/mqdefault.jpg";
		}
	} catch (Exception) {
		//die silently
	}
}

function getIdFromUrl() {
	if (window.location.href.substring(window.location.href.length - 15).startsWith("?id=")) {
		idBox.value = window.location.href.substring(window.location.href.length - 11); //does not work on 3ds browser
		changeImage();
		return true;
	} else {
		return false;
	}
}

function changeTheme() {
	if (theme == "dark") {
		lightTheme();
	} else {
		darkTheme();
	}
}

function partialDisplay() {
	partialT.innerHTML += idBox.value;
	partialT.style = "display: block; font-size: 73px;";
	themeBtn.style = dlBtn.style = "display: none;"
	partBB.style = "display: block;";
}

function onLoad() {
	var partialFlag = false;
	getDocumentVars();
	document.onkeyup = keyDetect;
	if (navigator.platform != "Nintendo 3DS") {
		if (getIdFromUrl() == true) {
			partialDisplay();
			partialFlag = true;
		}
		updateLastImg();
	}
	if (navigator.platform == "Nintendo 3DS") {
		init3ds();
	}
	if (partialFlag == false){
		displayAll();
	}
	if (partialFlag == true){
		prevImgP.className = "hidden";
	}
	loadCookie();
}

function loadCookie() {
	if (readCookie("theme") == "light") {
		lightTheme();
	} else {
		darkTheme();
	}
}

//stolen code begins here

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
