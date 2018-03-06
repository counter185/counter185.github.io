theme = "dark";

function themecolor(color) {
				document.querySelector("meta[name=theme-color]").setAttribute("content", color);
			}
		
			function init3ds() {
				document.getElementById("dlBtn").innerHTML = " Download";
			}
		
			function changeImage() {
				
			
				var parseString = document.getElementById('ID').value;
					
				if (parseString.substring(0, 32) == "https://www.youtube.com/watch?v=") {
					document.getElementById('ID').value = parseString.substring (32, 32 + 11);
				}
					
				if (parseString.substring(0, 17) == "https://youtu.be/") { 
					document.getElementById('ID').value = parseString.substring (17, 17 + 11);
				}
				
				if (parseString.substring(0, 24) == "www.youtube.com/watch?v=") {
					document.getElementById('ID').value = parseString.substring (24, 24 + 11);
				}
				
				if (parseString.substring(0, 9) == "youtu.be/") {
					document.getElementById('ID').value = parseString.substring (9, 9 + 11);
				}
				
				if (document.getElementById("ID").value.length == 11){
					
					document.getElementById("errorText").innerHTML = "";
					document.getElementById("imgs").style.display = "block";
					document.getElementById("720").src = "https://i.ytimg.com/vi/" + document.getElementById('ID').value + "/maxresdefault.jpg";
					document.getElementById("480").src = "https://i.ytimg.com/vi/" + document.getElementById('ID').value + "/sddefault.jpg";
					document.getElementById("360").src = "https://i.ytimg.com/vi/" + document.getElementById('ID').value + "/hqdefault.jpg";
					document.getElementById("180").src = "https://i.ytimg.com/vi/" + document.getElementById('ID').value + "/mqdefault.jpg";
					document.getElementById("90").src = "https://i.ytimg.com/vi/" + document.getElementById('ID').value + "/default.jpg";
					
				} else if (document.getElementById("ID").value.length == 0) {
					document.getElementById("imgs").style.display = "none";
					document.getElementById("errorText").innerHTML = "";
				} else {
					document.getElementById("imgs").style.display = "none";
					document.getElementById("errorText").innerHTML = "Invalid Video link/ID";
				}
			}
			
			function keyDetect(e) {
				if (e.keyCode == 13) {
					changeImage();
				}
			}
			
			function displayAll() {
				document.getElementById("ID").className = "inText";
				document.getElementById("dlBtn").className = "buttonDark";
				document.getElementById("themebtn").className = "buttonDark";
				document.getElementById("idtext").className = "vis";
				document.getElementById("themebtn").style.fontWeight = "bold";
			}
			
			function darkTheme() {
				createCookie("theme", "dark", false);
				theme = "dark";
				document.body.style.backgroundColor = "black";
				document.body.style.color = "white";
				document.getElementById("themebtn").className = 'buttonDark';
				document.getElementById("ID").style.border = "2px solid white";
				document.getElementById("ID").style.color = "white";
				document.getElementById("ID").style.backgroundColor = "black";
				document.getElementById("themebtn").innerHTML = "Light Theme";
				document.getElementById("dlBtn").className = 'buttonDark';
				themecolor("#000000");
			}
			
			function lightTheme() {
				createCookie("theme", "light", false);
				theme = "light";
				document.body.style.backgroundColor = "white";
				document.body.style.color = "black";
				document.getElementById("themebtn").className = 'buttonLight';
				document.getElementById("ID").style.border = "2px solid black";
				document.getElementById("ID").style.color = "black";
				document.getElementById("ID").style.backgroundColor = "white";
				document.getElementById("themebtn").innerHTML = "Dark Theme";
				document.getElementById("dlBtn").className = 'buttonLight';
				themecolor("#FFFFFF");
			}
			
			function changeTheme() {
				if (theme == "dark") {
					lightTheme();
				} else {
					darkTheme();
				}
			}
			
			function onLoad() {
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