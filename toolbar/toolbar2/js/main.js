//requirejs.config用来定义别名
requirejs.config({
	paths: {//引入jQuery
		jquery: 'jquery-1.11.3.min'
	}
});
/*require会定义三个变量：define,require,requirejs，其中require === requirejs，一般使用require更简短
*	define 从名字就可以看出这个api是用来定义一个模块
*	require 加载依赖模块，并执行加载完后的回调函数,require中的依赖是一个数组，即使只有一个依赖，你也必须使用数组来定义
*/
requirejs(['jquery', 'backtop'], function ($, backtop) {

	$('#backTop').backtop({
		mode: 'move',
		pos: 1000,
		speed: 800
	});

	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'go',
	// 	pos: 400,
	// 	speed: 500
	// });


	// var scroll = new scrollto.ScrollTo({
	// 	dest: 100,
	// 	speed: 500
	// });
	// $('#backTop').on('click', $.proxy(scroll.move, scroll));
	// $(window).on('scroll', function () {
	// 	checkPosition($(window).height());
	// });

	// checkPosition($(window).height());

	// function move() {
	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 	},800);
	// }

	// function go(){
	// 	$('html, body').scrollTop(0);
	// }

	// function checkPosition(pos) {
	// 	if ($(window).scrollTop() > pos) {
	// 		$('#backTop').fadeIn();
	// 	}else{
	// 		$('#backTop').fadeOut();
	// 	}
	// }

});