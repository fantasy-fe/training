var hotcityTMPL = ['<div class="hint" {{#width}} style="width:{{width}}px"{{/width}} data-hotcity-nogo="true">',
	'<img class="closeImg js_close_hotel_hotcity" src="http://source.qunar.com/site/images/new_main/Button_Hotcity_Close.gif">',
	'<span class="">Top {{citycount}} 热门城市</span>',
	'{{#showNumber}}',
	'<span class="">',
	'(',
	'<span class="CIunderline">直接输入可搜索{{number}}个城市</span>',
	')',
	'</span>',
	'{{/showNumber}}',
	'<hr>',
	'<ul>',
		'{{#cityList}}',
		'<li><a class="js-hotcitylist" href="#">{{name}}</a></li>',
		'{{/cityList}}',
	'</ul>',
	'{{#showWord}}',
	'<hr>',
	'<span class="">更多城市，敬请期待!</span>',
	'{{/showWord}}',
'</div>'].join('');
