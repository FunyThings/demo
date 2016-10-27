$(document).ready(function(){
	<!--记住密码图标切换-->
	$(".remember-pwd-img").click(function(){
		$(".remember-pwd-img>img").toggle();
	});
    $(".btn").click(function(){
    	if($(".name").val()=="admin" && $(".pwd").val()=="12345"){
    		location.href = "control.html";
    	}
    	else{
    		alert("输入错误！")
    	}
    })
 });
