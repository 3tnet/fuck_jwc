var iframeDoc = document.querySelector("#iframeautoheight").contentWindow.document;
var options = iframeDoc.querySelector("#pjkc").getElementsByTagName("option");
var j=0;
var t = setInterval(function (){
	if(j>=options.length){
		clearInterval(t);
        return;
	}
	var iframeDoc = document.querySelector("#iframeautoheight").contentWindow.document;
	var selects = iframeDoc.querySelectorAll("#divJs select");
	for (var i in selects){
		selects[i].value="优秀";
	}

	iframeDoc.getElementById("Button1").click();
	j++;
	
}, 2000);

