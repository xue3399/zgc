 $(document).ready(function  () {
 //导航点击收缩展开jq
 //导航点击收缩展开jq
 //导航点击收缩展开jq
 //导航点击收缩展开jq
 	$("header div").click(function  () {
						$(".nav_1").toggleClass("none");
					});
 //学生作品悬浮框特效
 //学生作品悬浮框特效
 //学生作品悬浮框特效
 //学生作品悬浮框特效
		//原理     获取鼠标在li上边的坐标； 并通过计算把li分为上下左右4块区域，鼠标从不同地方移入移出都显示不同animate；
  $('.works ul li').hover(function(){
                var x=event.pageX-$(this).offset().left,
                    y=event.pageY-$(this).offset().top,
                    h=$(this).outerHeight(),
                    w=$(this).outerWidth(),
                    k=Math.floor(h/w);
                if((k * x) >= y && (h - k * x) >= y){
                    $(this).children("div").css({
                        "top":"-200px",
                        "left": 0
                    })
                    $(this).children("div").stop(true,true).animate({
                        "top": "0"
                    });
                }

                if((k * x) < y && (h - k * x) < y){
                    $(this).children("div").css({
                        "top": "200px",
                        "left": "0"
                    })
                    $(this).children("div").stop(true,true).animate({
                        "top": "0"
                    });
                }

                if((k * x) < y && (h - k * x) > y){
                    $(this).children("div").css({
                        "top": "0",
                        "left": "-200px"
                    })
                    $(this).children("div").stop(true,true).animate({
                        "left": "0"
                    });
                }

                if((k*x)>y && (h-k*x)<y){
                    $(this).children("div").css({
                        "top": "0",
                        "left": "200px"
                    })
                    $(this).children("div").stop(true,true).animate({
                        "left": "0"
                    });
                }

            },function() {
                var x=event.pageX-$(this).offset().left,
                    y=event.pageY-$(this).offset().top,
                    h=$(this).outerHeight(),            
                    w=$(this).outerWidth(),
                    k=Math.floor(h / w);
                if((k * x) >= y && (h - k * x) >= y){ 
                    $(this).children("div").stop(true,true).animate({
                        "top": "-200px"
                    });
                }

                if((k * x) < y && (h - k * x) < y){ 
                    $(this).children("div").stop(true,true).animate({
                        "top": "200px"
                    });
                }

                if((k * x ) < y && (h - k * x) > y){ 
                    $(this).children("div").stop(true,true).animate({
                        "left": "-200px"
                    });
                }
                if((k * x) > y && (h - k * x) < y){ 
                    $(this).children("div").stop(true,true).animate({
                        "left": "200px"
                    });
                }
            });
 
// 手机端折叠展开;
 $(".over li:last-of-type").children("a").click(function  () { //先给所有查看更多绑定事件
 					//找到你点击的    查看更多 的 父元素ul，并把他有claaname为.overflow的孩子添加或删除class no;
					$(this).parents("ul").children(".overflow").toggleClass("no");	
					//找到你点击的    查看更多 的 父元素 li,并把他的孩子a 添加或删除class none;达到关闭和显示更多切换的效果
						$(this).parent().children("a").toggleClass("none");
					});		
 
 /////侧导航显示隐藏
$(".subMenu>a").click(function  () {
								$(this).toggleClass('hover');
								$(this).parent().toggleClass('hover');
								$(".container_box").toggleClass("hover");
							})
 
 
 
 
 //师资力量  特效
 $('.container ul li').click(function  () {
					$(this).toggleClass('hover');
				});
 
 });
 

