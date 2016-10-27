$(document).ready(function(){
     $('.right-content1').fadeIn(500);
     $('.right-content1').show();
     $('.right-content2').hide();
     $('.right-content3').hide();
     $('.user-manage-content').hide();
     $('.change-pwd-content').hide();
	 changeContentHigh();
	 cloudServerToggle();
	 changeMenuStyle();
	 changeMenuImg();
	 rightContentWidth();
	 changeOverviewTreewidth();
	 changCloudButtonColor();
	 changChildServerButtonColor();
	 adduserTanchuang();
	 leftMenuClick();

});


//定义图表数据参数

var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
var lineChartData1={
        labels : ["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(234,160,44,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [66,58,55,63,76,74,67,78,73,77,62,78]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(72,172,243,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [23,34,45,53,64,48,77,22,53,67,72,48]
				},
				{
					label: "My Third dataset",
					fillColor: 'rgba(0,0,0,0)',
  					strokeColor: 'rgba(35,213,77,1)',
 					pointColor: 'rgba(151,187,205,1)',
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [43,44,25,33,24,38,27,32,88,17,22,38]
				}
			]
		}

var lineChartData2={
        labels : ["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
			datasets : [
				{
					label: "CPU data",
					fillColor : "rgba(234,160,44,0.1)",
					strokeColor : "rgba(234,160,44,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [64,54,56,73,77,54,17,28,83,73,92,88]
				},
				
			]
        }

var lineChartData3={
        labels : ["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
			datasets : [
				{
					label: "cipan data",
					fillColor : "rgba(0,121,219,0.1)",
					strokeColor : "rgba(0,121,219,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [2.2,2.8,1.6,2.5,1.2,3.5,3,1,2.6,3.4,2.1,0.4]
				},
				
			]
        }

var lineChartData4={
        labels : ["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
			datasets : [
				{
					label: "neicun data",
					fillColor : "rgba(124,252,0,0.1)",
					strokeColor : "rgba(124,252,0,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [1.2,2.4,2.6,3.5,3.2,3.5,3,1.9,2.8,3.7,2.8,2.4]
				},
				
			]
        }

var lineChartData5={
        labels : ["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
			datasets : [
				{
					label: "wangluo data1",
					fillColor : "rgba(95,158,160,0.1)",
					strokeColor : "rgba(95,158,160,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [1.2,2.1,1.6,2.5,2.2,2.5,1.3,1.9,2.3,2.7,2.4,2.6]
				},
				{
					label: "wangluo data2",
					fillColor : "rgba(255,69,0,0.1)",
					strokeColor : "rgba(255,69,0,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [2.2,2.4,1.8,2.8,2.1,2.8,3.3,2.9,2.1,2.2,2.8,3.6]
				}
			]
        }

var lineChartData6={
        labels : ["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
			datasets : [
				{
					label: "wangluo data1",
					fillColor : "rgba(0,140,238,0.1)",
					strokeColor : "rgba(0,140,238,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [1.2,2.1,1.6,2.5,2.2,2.5,1.3,1.9,2.3,2.7,2.4,2.6]
				},
				{
					label: "wangluo data2",
					fillColor : "rgba(59,202,92,0.1)",
					strokeColor : "rgba(59,202,92,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [2.2,2.4,1.8,2.8,2.1,2.8,3.3,2.9,2.1,2.2,2.8,3.6]
				}
			]
        }




	


//左侧菜单高度根据浏览器文档高度和右侧菜单高度比较自适应高度
function changeContentHigh(){
		var sh = $(window).height();
		var bh = $('.rc-height').height();
		if((sh-50)<bh){
			$('.left-content').css('height',bh);
		}
		else{
		$('.left-content').css('height',sh-50)
	        };
	};



//云服务监控下拉菜单
function cloudServerToggle(){
	$('.cloud-server-monitor').click(function(){
		$('.server-tree').slideToggle('fast');
	});
};


//左侧菜单鼠标经过时改变部分样式和图片
//样式
function changeMenuStyle(){
	$('.overview-div,.cloud-server-monitor,.user-manage-div,.change-pwd-div,#server-tree1, #server-tree2 ,#server-tree3').hover(function(){
		 $(this).css({'background-color':'#fff','border-botton':'1px solid #fff','color':'#008cee'});
	},function(){
         $(this).css({'background-color':'#008cee','border-botton':'1px solid #016cb8','color':'#fff'});
	});
};


//图片
function changeMenuImg(){

	$('.overview-div').hover(function(){
		$('.overview-div>img').attr('src','imgs/eye.png');
	},function(){
        $('.overview-div>img').attr('src','imgs/eye1.png');
	});

	$('.cloud-server-monitor').hover(function(){
		$('.arrow-down').attr('src','imgs/arrowdown1.png');
	},function(){
        $('.arrow-down').attr('src','imgs/arrowdown.png');
	});
  
	$('.cloud-server-monitor').hover(function(){
		$('.clould-img').attr('src','imgs/cloud2.png');
	},function(){
        $('.clould-img').attr('src','imgs/cloud1.png');
	});

	$('.user-manage-div').hover(function(){
		$('.user-manage-div>img').attr('src','imgs/user.png');
	},function(){
        $('.user-manage-div>img').attr('src','imgs/user1.png');
	});

	$('.change-pwd-div').hover(function(){
		$('.change-pwd-div>img').attr('src','imgs/changepwd.png');
	},function(){
        $('.change-pwd-div>img').attr('src','imgs/changepwd1.png');
	});
};


//右侧菜单总宽度根据屏幕宽度自适应
function rightContentWidth(){
	var sw = $(window).width();
	var bw = $(document.body).width();
	$('.right-content').css('width',sw-200);
};



//右侧概览总体信息和树状结构根据屏幕分辨率调整宽度并从左右排列调整成上下排列


function changeOverviewTreewidth(){
	var sw = $(document.body).width();
	var ow = $('.overview-content').width();
	if(sw>650 && sw<1080) {
		 
		$(".overview-content").css('width',ow*0.9);
		$(".overview-content,.main-info,.structure-tree").css('width',ow*0.9);
	};
};

//鼠标经过改变右侧云服务监控部分按钮颜色
function changCloudButtonColor() {
    $(".DMY,.pagenumber,.page-img").hover(function(){
		 $(this).css({'background-color':'#008cee','border-botton':'1px solid #fff','color':'#fff'});
	},function(){
         $(this).css({'background-color':'#fff','border-botton':'1px solid #d4d4d4','color':'#c0bcbc'});
	});
};

//鼠标经过改变右侧子服务部分按钮颜色
function changChildServerButtonColor() {
    $(".details-manage input").hover(function(){
		 $(this).css({'background-color':'#008cee','color':'#fff'});
	},function(){
         $(this).css({'background-color':'#F5F1F1','color':'#999'});
	});

};



//增加用户、修改密码弹窗遮罩层宽高自适应铺满屏幕

function adduserTanchuang(){
	var sw = $(window).width();
	var bw = $(document.body).width();
	var sh = $(window).height();
	$('.xiugaimima-main').css('width',sw);
    $('.xiugaimima-main').css('height',sh);
    $('.adduser-tanchuang-main').css('width',sw);
    $('.adduser-tanchuang-main').css('height',sh);
};



//点击左侧菜单，右侧概览内容淡入

function leftMenuClick(){
	//概览点击
	$('.overview-div').click(function(){
        $('.right-content1').fadeIn(500);
        $('.right-content1').show();
        $('.right-content2').hide();
        $('.right-content3').hide();
        $('.user-manage-content').hide();
        $('.change-pwd-content').hide();
	});

	//云服务监控点击
    $('.cloud-server-monitor').click(function(){
        $('.right-content2').fadeIn(500);
        $('.right-content2').show();
        $('.right-content1').hide();
        $('.right-content3').hide();
        $('.user-manage-content').hide();
        $('.change-pwd-content').hide();
	});


    //用户管理点击
     $('.user-manage-div').click(function(){
        $('.user-manage-content').fadeIn(500);
        $('.user-manage-content').show();
        $('.right-content2').hide();
        $('.right-content1').hide();
        $('.right-content3').hide();
        $('.change-pwd-content').hide();
        //增加用户
        $(".user-del-div").click(function(){
        	$(".xiugaimima-main").show()
        });
        $(".xgmm-off,.xgmm-cancel-sub").click(function(){
        	$(".xiugaimima-main").hide()
        });
        //修改密码
         $(".user-add").click(function(){
        	$(".adduser-tanchuang-main").show()
        });
        $(".adduser-off,.adduser-cancel").click(function(){
        	$(".adduser-tanchuang-main").hide()
        });
	});

    //修改密码点击
	$('.change-pwd-div').click(function(){
        $('.change-pwd-content').fadeIn(500);
        $('.change-pwd-content').show();
        $('.right-content2').hide();
        $('.right-content1').hide();
        $('.right-content3').hide();
        $('.user-manage-content').hide();
	});


	 //服务1,默认监控显示监控页
	 $('#server-tree1').click(function(){
        $('.right-content3').fadeIn(500);
        $('.right-content3').show();
        $('.right-content1').hide();
        $('.right-content2').hide();
        $('.user-manage-content').hide();
        $('.change-pwd-content').hide();
        $('.mian-child-server').show();
        $('.jk-data-chart').show();
        $('.data-rizhi').hide();
        $('.data-charts').hide();
       
           
            var jkc1 = document.getElementById("jkChart1").getContext("2d");
            window.myLine1 = new Chart(jkc1).Line(lineChartData2,
            {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :25,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色
     
            } );


            var jkc2 = document.getElementById("jkChart2").getContext("2d");
            window.myLine2 = new Chart(jkc2).Line(lineChartData3,
            {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :1,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色

             } );

            var jkc3 = document.getElementById("jkChart3").getContext("2d");
            window.myLine3 = new Chart(jkc3).Line(lineChartData4,
             {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :1,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色

             } );

 

            var jkc4 = document.getElementById("jkChart4").getContext("2d");
            window.myLine4 = new Chart(jkc4).Line(lineChartData5,
             {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :1,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色

             } );
          


        //默认显示监控页，选中按钮变蓝，其他两个按钮划过时变蓝
        var clickStyle={
        	"border":"none",
        	"color":"#fff",
            "background-color":"#008cee"
        };
        var morenStyle={
        	"border":"1px solid #c0bcbc",
        	"color":"#A2A2A2",
            "background-color":"#FEF1F1"
        };
        $('.jk-sub').css(clickStyle);
        $('.rz-sub').css(morenStyle);
        $('.tj-sub').css(morenStyle);
        $('.details-manage input:first').css(morenStyle);
        $('.details-manage input:last').css(morenStyle);
        $('.xiangqing').hide();
        $('.child-server-data').hide();

        $(".rz-sub,.tj-sub").hover(function(){
		    $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	         },function(){
            $(this).css({'background-color':'#F5F1F1','color':'#A2A2A2','border':'1px solid #c0bcbc'});
	         });

        $(".jk-sub").hover(function(){
		     $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	          },function(){
                $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	          });

          //日志点击
        $('.rz-sub').click(function(){
          $('.zr-sub').css(clickStyle);
          $('.jk-sub').css(morenStyle);
          $('.tj-sub').css(morenStyle);
          $('.data-rizhi').show();
          $('.jk-data-chart').hide();
          $('.data-charts').hide();
          $('.jiankong-search').hide();
          $('.details-manage input:first').css(morenStyle);
          $('.details-manage input:last').css(morenStyle);
          $('.xiangqing').hide();
          $('.child-server-data').hide();


          $(".jk-sub,.tj-sub").hover(function(){
		    $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	         },function(){
            $(this).css({'background-color':'#F5F1F1','color':'#A2A2A2','border':'1px solid #c0bcbc'});
	         });

          $(".rz-sub").hover(function(){
		     $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	          },function(){
             $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	          });
        });

        //统计事件
        $('.tj-sub').click(function(){
          $('.tj-sub').css(clickStyle);
          $('.jk-sub').css(morenStyle);
          $('.rz-sub').css(morenStyle);
          $('.data-charts').show();
          $('.jk-data-chart').hide();
          $('.data-rizhi').hide();
          $('.jiankong-search').hide();
          $('.details-manage input:first').css(morenStyle);
          $('.details-manage input:last').css(morenStyle);
          $('.xiangqing').hide();
          $('.child-server-data').hide();
       
          var ctx = document.getElementById("myChart").getContext("2d");
          window.myLine = new Chart(ctx).Line(lineChartData1,
		    {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :10,        //y轴刻度的个数
                scaleStepWidth : 10,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#ccc", // Y/X轴的颜色
                scaleFontColor : "#c0bcbc",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色
             } );


          $(".jk-sub,.rz-sub").hover(function(){
		    $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	         },function(){
            $(this).css({'background-color':'#F5F1F1','color':'#A2A2A2','border':'1px solid #c0bcbc'});
	         });

          $(".tj-sub").hover(function(){
		     $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	          },function(){
                $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	          });
          });


        //监控事件
         $('.jk-sub').click(function(){
            $('.jk-sub').css(clickStyle);
            $('.tj-sub').css(morenStyle);
            $('.rz-sub').css(morenStyle);
            $('.jk-data-chart').show();
            $('.data-charts').hide();
            $('.data-rizhi').hide();
            $('.jiankong-search').show();
            $('.details-manage input:first').css(morenStyle);
            $('.details-manage input:last').css(morenStyle);
            $('.xiangqing').hide();
            $('.child-server-data').hide();

            
            var jkc1 = document.getElementById("jkChart1").getContext("2d");
            window.myLine1 = new Chart(jkc1).Line(lineChartData2,
            {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :25,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色
     
            } );


            var jkc2 = document.getElementById("jkChart2").getContext("2d");
            window.myLine2 = new Chart(jkc2).Line(lineChartData3,
            {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :1,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色

             } );

             var jkc3 = document.getElementById("jkChart3").getContext("2d");
             window.myLine3 = new Chart(jkc3).Line(lineChartData4,
             {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :1,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色

             } );

 

             var jkc4 = document.getElementById("jkChart4").getContext("2d");
             window.myLine4 = new Chart(jkc4).Line(lineChartData5,
             {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :1,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色

             } );
    

          
            $(".tj-sub,.rz-sub").hover(function(){
		      $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	           },function(){
              $(this).css({'background-color':'#F5F1F1','color':'#A2A2A2','border':'1px solid #c0bcbc'});
	           });

            $(".jk-sub").hover(function(){
		       $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	            },function(){
                  $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	            });
            });
          //详情事件
           $(".details-manage input:first").click(function(){
           	   $('.details-manage input:first').css(clickStyle);
               $('.details-manage input:last').css(morenStyle);
               $('.jk-sub').css(morenStyle);
               $('.tj-sub').css(morenStyle);
               $('.rz-sub').css(morenStyle);
               $('.xiangqing').show();
               $('.child-server-data').hide();
               $('.jk-data-chart').hide();
               $('.data-charts').hide();
               $('.data-rizhi').hide();
               $('.jiankong-search').hide();


               $(".details-manage input:first").hover(function(){
		            $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	              },function(){
                    $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	              }); 

               $(".tj-sub,.rz-sub,.jk-sub,.details-manage input:last").hover(function(){
		            $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	              },function(){
                    $(this).css({'background-color':'#F5F1F1','color':'#A2A2A2','border':'1px solid #c0bcbc'});
	              });
               });

        //管理事件

        $(".details-manage input:last").click(function(){
           	   $('.details-manage input:last').css(clickStyle);
               $('.details-manage input:first').css(morenStyle);
               $('.jk-sub').css(morenStyle);
               $('.tj-sub').css(morenStyle);
               $('.rz-sub').css(morenStyle);
               $('.child-server-data').show();
               $('.xiangqing').hide();
               $('.jk-data-chart').hide();
               $('.data-charts').hide();
               $('.data-rizhi').hide();
               $('.jiankong-search').hide();

   
               var statec = document.getElementById("state-chart1").getContext("2d");
               window.myLine5 = new Chart(statec).Line(lineChartData6,
              {
    	        scaleOverride :true ,   //是否用硬编码重写y轴网格线
                scaleSteps :4,        //y轴刻度的个数
                scaleStepWidth :1,   //y轴每个刻度的宽度
                scaleStartValue : 0,    //y轴的起始值
                pointDot : false,        //是否显示点
                pointDotRadius : 5,     //点的半径
                pointDotStrokeWidth : 1,//点的线宽
                datasetStrokeWidth : 1, //数据线的线宽
                animation : true,       //是否有动画效果
                animationSteps : 60 ,  //动画的步数
                scaleLineColor : "#008cee", // Y/X轴的颜色
                scaleFontColor : "#444",  // 文字颜色
                datasetStroke : true,    // 数据集行程
				datasetFill : false, // 是否填充数据集
				responsive: true,
				scaleLabel : "<%=value%>",//Y轴的刻度
				datasetFill : true,//是否填充颜色

                } );


                $(".details-manage input:last").hover(function(){
		            $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	              },function(){
                    $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	              }); 

                $(".tj-sub,.rz-sub,.jk-sub,.details-manage input:first").hover(function(){
		            $(this).css({'background-color':'#008cee','color':'#fff','border':'1px solid #008cee'});
	              },function(){
                    $(this).css({'background-color':'#F5F1F1','color':'#A2A2A2','border':'1px solid #c0bcbc'});
	              });
                });

        });	//服务一点击事件
        
 };//左侧菜单点击事件

