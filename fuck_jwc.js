var iframeDoc = document.querySelector("#iframeautoheight").contentWindow.document;
var options = iframeDoc.querySelector("#pjkc").getElementsByTagName("option");
alert(options.length);
var j=0;
var t = setInterval(function (){
	if(j>=options.length-1){
		clearInterval(t);
	}
	var iframeDoc = document.querySelector("#iframeautoheight").contentWindow.document;
	var selects = document.querySelector("#iframeautoheight").contentWindow.document.querySelectorAll("#divJs select");
	for (var i in selects){
		selects[i].value="优秀";
	}

	iframeDoc.getElementById("Button1").click();
	j++;
	
}, 2000);

