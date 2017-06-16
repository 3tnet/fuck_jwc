# fuck_jwc(教学质量自动评价)

1. 登陆hnnu教务处

2. 点击“教学质量评价”下的第一门课程
<img src="https://raw.githubusercontent.com/ty666/fuck_jwc/master/images/1.png" />

3. 按 `f12` 键打开开发者工具，单击 `Console` 选项卡。

4. 将一下代码粘贴到 `Console` 按下回车执行
```javascript
var iframeDoc = document.querySelector("#iframeautoheight").contentWindow.document;
var options = iframeDoc.querySelector("#pjkc").getElementsByTagName("option");
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
```
5. 享受愉悦的过程。