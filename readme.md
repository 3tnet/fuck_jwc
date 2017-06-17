# fuck_jwc(教学质量自动评价)

1. 登陆hnnu教务处

2. 点击“教学质量评价”下的第一门课程
<img src="https://raw.githubusercontent.com/ty666/fuck_jwc/master/images/1.png" />

3. 按 `f12` 键 ( `mac` 用户使用快捷键 `command + option(alt) + i` ) 打开开发者工具，再单击 `Console` 选项卡。
<img src="https://raw.githubusercontent.com/ty666/fuck_jwc/master/images/2.png" />

4. 将以下代码粘贴到 `Console` 按下回车执行
```javascript
var iframeDoc = document.querySelector("#iframeautoheight").contentWindow.document;
var options = iframeDoc.querySelector("#pjkc").getElementsByTagName("option");
var j=0;
var t = setInterval(function (){
	if(j>=options.length-1){
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
```
<img src="https://raw.githubusercontent.com/ty666/fuck_jwc/master/images/3.png" />

5. 享受愉悦的过程。（＾∀＾）