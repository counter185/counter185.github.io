function openAutoRelaunch(){
	document.getElementById("mainpage").style = "display: none;";
	document.getElementById("autoRelaunch").style = "display: block;";
	document.getElementById("youtubeThumbnailDownloader").style = "display: none";
	document.getElementById("imageCorruptor").style = "display: none;";
	document.getElementById("emojiStudio").style = "display: none;";
	document.getElementById("PSPSaveManager").style = "display: none;";
}

function openYtThD(){
	document.getElementById("mainpage").style = "display: none;";
	document.getElementById("autoRelaunch").style = "display: none;";
	document.getElementById("youtubeThumbnailDownloader").style = "display: block";
	document.getElementById("imageCorruptor").style = "display: none;";
	document.getElementById("emojiStudio").style = "display: none;";
	document.getElementById("PSPSaveManager").style = "display: none;";
}

function openImageCorruptor(){
	document.getElementById("mainpage").style = "display: none";
	document.getElementById("autoRelaunch").style = "display: none";
	document.getElementById("youtubeThumbnailDownloader").style = "display: none";
	document.getElementById("imageCorruptor").style = "display: block;";
	document.getElementById("emojiStudio").style = "display: none;";
	document.getElementById("PSPSaveManager").style = "display: none;";
}

function openEmojiStudio(){
	document.getElementById("mainpage").style = "display: none";
	document.getElementById("autoRelaunch").style = "display: none";
	document.getElementById("youtubeThumbnailDownloader").style = "display: none";
	document.getElementById("imageCorruptor").style = "display: none;";
	document.getElementById("emojiStudio").style = "display: block;";
	document.getElementById("PSPSaveManager").style = "display: none;";
}

function openPSPSaveManager(){
	document.getElementById("mainpage").style = "display: none";
	document.getElementById("autoRelaunch").style = "display: none";
	document.getElementById("youtubeThumbnailDownloader").style = "display: none";
	document.getElementById("imageCorruptor").style = "display: none;";
	document.getElementById("emojiStudio").style = "display: none;";
	document.getElementById("PSPSaveManager").style = "display: block;";
}

function back(){
	document.getElementById("mainpage").style = "display: block";
	document.getElementById("autoRelaunch").style = "display: none";
	document.getElementById("youtubeThumbnailDownloader").style = "display: none";
	document.getElementById("imageCorruptor").style = "display: none;";
	document.getElementById("emojiStudio").style = "display: none;";
	document.getElementById("PSPSaveManager").style = "display: none;";
}