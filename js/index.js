$(document).ready(function(){
	$("#menu-click").click(function(){
		$("#menu-total").toggleClass("none");
	
	});
	$(function(){
		$(window).scroll(function(){
		var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容浏览器
				if($scrollTop >350){
				    $("#up").show();
				}else{ $("#up").hide();
				};
			});
			$("#up").click(function(){
				$('body,html').animate({scrollTop:0},500);
				return false;
			});
	});	
});
		