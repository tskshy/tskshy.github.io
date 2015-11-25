$(document).ready(function () {
	init();	
});

function init () {
	load_blog_lst(1);
}

function load_blog_lst (index) {
	var url = "json/bloglist/" + index + ".json";
	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function (json) {
			var img_prefix	= json.conf.img_prefix;
			var url_prefix	= json.conf.url_prefix;
			var blog_lst	= json.data;
			/*
			<ul id="bloglst">
				<li>
					<div class="arrow_box">
						<div class="ti"></div>
						<div class="ci"></div>
						<h2 class="title">
							<a href="javascript:void(0);">GITHUB个人静态博客创建</a>
						</h2>
						<ul class="textinfo">
							<a href="javascript:void(0);">
								<img src="img/2015112419.jpg">
							</a>
							<p>
							从今以后，开始纪录自己生活的点点滴滴... 人生，翻开了新的一页。
							</p>
						</ul>
						<ul class="details">
							<li><a href="javascript:void(0);">2015-11-24</a></li>
						</ul>
					</div>
				</li>
			</ul>
			*/
			for (var i = 0; i < blog_lst.length; i++) {
				var element = blog_lst[i];
				var a_title = '';
				var a_textinfo = '';

				if (element.url != "") {
					a_title = '<a href="' + url_prefix + element.url + '" target="_blank">' + element.title + '</a>';
					a_textinfo = '<a href="' + url_prefix + element.url + '"><img src="' + img_prefix + element.img + '"></a>';
				} else {
					a_title = '<a href="javascript:void(0);">' + element.title + '</a>';
					a_textinfo = '<a href="javascript:void(0);"><img src="' + img_prefix + element.img + '"></a>';
				}

				var tag = $(''
					+ '<li>                                                                                  '
					+ '	<div class="arrow_box">                                                          '
					+ '		<div class="ti"></div>                                                   '
					+ '		<div class="ci"></div>                                                   '
					+ '		<h2 class="title">                                                       '
					+ '			' + a_title + '                                                  '
					+ '		</h2>                                                                    '
					+ '		<ul class="textinfo">                                                    '
					+ '                     ' + a_textinfo + '                                               '
					+ '			<p>                                                              '
					+ '			' + element.intro + '                                            '
					+ '			</p>                                                             '
					+ '		</ul>                                                                    '
					+ '		<ul class="details">                                                     '
					+ '			<li><a href="javascript:void(0);">' + element.time + '</a></li>  '
					+ '		</ul>                                                                    '
					+ '	</div>                                                                           '
					+ '</li>                                                                                 '
					+ '');
				$("#bloglst").append(tag);
			}

		},
		error: function () {
			alert("load blog list error");
		}
	});
}
