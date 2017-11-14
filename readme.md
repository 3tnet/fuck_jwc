# fuck_jwc(教学质量|师德自动评价)

#### 教学质量自动评价 | [师德自动评价](https://github.com/ty666/fuck_jwc#师德自动评价--教学质量自动评价)
1. 登陆hnnu教务处

2. 点击“教学质量评价”下的第一门课程
<img src="http://cdn.bm.e8net.cn/fuck_jwc/images/1.png" />

3. 按 `f12` 键 ( `mac` 用户使用快捷键 `command + option(alt) + i` ) 打开开发者工具，再单击 `Console` 选项卡。
<img src="http://cdn.bm.e8net.cn/fuck_jwc/images/2.png" />

4. 将以下代码粘贴到 `Console` 按下回车执行
```javascript
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
```
<img src="http://cdn.bm.e8net.cn/fuck_jwc/images/3.png" />

* * *

#### 师德自动评价 | [教学质量自动评价](https://github.com/ty666/fuck_jwc#教学质量自动评价--师德自动评价)
1. 登陆hnnu教务处

2. 点击“师德评价”
<img src="http://cdn.bm.e8net.cn/fuck_jwc/images/4.png" />

3. 按 `f12` 键 ( `mac` 用户使用快捷键 `command + option(alt) + i` ) 打开开发者工具，再单击 `Console` 选项卡。
<img src="http://cdn.bm.e8net.cn/fuck_jwc/images/5.png" />

4. 将以下代码粘贴到 `Console` 按下回车执行
```javascript
var teachers = document.querySelector("#iframeautoheight").contentWindow.document.querySelector('[name=TName]').querySelectorAll('option');
var studentUrl = document.querySelector('#Form1').action;
var stuNum = studentUrl.substr(studentUrl.length-10, studentUrl.length);

for(var i = 1; i < teachers.length; i++){
	(function(index){
		fetch(new Request("http://211.70.176.123/sdpj/submit1.asp?xh=" + stuNum, {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: "TName=" + teachers[index].value + "&qz1=10&Option1=95&rsCount=1"
		})).then(function(response) {
			if(response.status === 200){
				console.log(teachers[index].innerHTML + "评价成功~~");
			}else{
				console.log(teachers[index].innerHTML + '评价失败(￣▽￣"), 服务器炸了，刷新后在试试吧。');
			}
		})
	})(i);
}
```
<img src="http://cdn.bm.e8net.cn/fuck_jwc/images/6.png" />

享受愉悦的过程。（＾∀＾）
