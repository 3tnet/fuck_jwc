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
