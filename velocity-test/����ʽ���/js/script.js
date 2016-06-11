(function($){
	var container = $('.container');
	var box = $('.box');
	var buddy = $('.buddy');
	var pop = $('.pop');
	var open = $('.btn');
	var close = $('.close');
	var imgs = pop.find('img');

	//向上进入
	$.Velocity.RegisterUI('csz.slideUpIn', {
		defaultDuration:500,
		calls:[
			[{
				opacity:[1, 0],
				translateY:[0, 100]
			}]
		]
	});
	//向下退出
	$.Velocity.RegisterUI('csz.slideDownOut', {
		defaultDuration:300,
		calls:[
			[{
				opacity:[0, 1],
				translateY:[100, 0]
			}]
		]
	});
	//放大进入
	$.Velocity.RegisterUI('csz.scaleIn', {
		defaultDuration:300,
		calls:[
			[{
				opacity:[1, 0],
				scale:[1, 0.3]
			}]
		]
	});
	//放大退出
	$.Velocity.RegisterUI('csz.scaleOut', {
		defaultDuration:300,
		calls:[
			[{
				opacity:[0, 1],
				scale:[0.3, 1]
			}]
		]
	});
	//定义动画序列
	var seqInit = [
		{
			elements:container,
			properties:'csz.slideUpIn',
			options:{
				delay:300
			}
		},
		{
			elements:box,
			properties:'csz.slideUpIn',
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:buddy,
			properties:'csz.slideUpIn',
			options:{
				sequenceQueue:false,
				delay:60
			}
		}
	];

	var seqClick = [
		{
			elements:container,
			properties:'csz.slideDownOut',
		},
		{
			elements:box,
			properties:'csz.slideDownOut',
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:container,
			properties:'csz.slideUpIn',
		},
		{
			elements:pop,
			properties:'csz.slideUpIn',
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:imgs,
			properties:'csz.scaleIn',
		}
	];

	var seqClose = [
		{
			elements:imgs,
			properties:'csz.scaleOut',
		},
		{
			elements:container,
			properties:'csz.slideDownOut',
		},
		{
			elements:pop,
			properties:'csz.slideDownOut',
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:container,
			properties:'csz.slideUpIn',
		},
		{
			elements:box,
			properties:'csz.slideUpIn',
			options:{
				sequenceQueue:false
			}
		}
	];

	//执行动画序列
	$.Velocity.RunSequence(seqInit);

	open.on('click', function(){
		$.Velocity.RunSequence(seqClick);
	});

	close.on('click', function(){
		$.Velocity.RunSequence(seqClose);
	});

})(jQuery);