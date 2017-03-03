import Refetch from 'refetch';

export function refetch(options) {
	let method = options.method || 'post';
	let dataType = options.options || {dataType: 'json', timeout: 30000};
	const fetch = Refetch.create({
		data: options.data,			// 数据，会被get等方法参数merge
		options: dataType,		// 请求参数
		promise: (f) => f.then((res, xhr) => {
			if(typeof res == 'string'){res = JSON.parse(res);}
			if(res.code.toLowerCase() == "success") {
				options.success(res);
			}else{
				options.fail(res.msg,res);
			}
		}).catch(function(error, response, xhr) {
			if(dataType.timeout > 30000){
        		options.error('请求超时，请稍后再试...');
        	}
    	})
	})
	fetch[method]("/h5" + options.url);
}

export function ajax(options){
	let method = options.method || 'post';
	let dataType = options.options || {dataType: 'json', timeout: 30000};
	const fetch = Refetch.create({
		data: options.data,			// 数据，会被get等方法参数merge
		options: dataType,		// 请求参数
		promise: (f) => f.then((res, xhr) => {
			options.success(res);			
		}).catch(function(error, response, xhr) {
			if(dataType.timeout > 30000){
        		options.error('请求超时，请稍后再试...');
        	}
    	})
	})
	fetch[method](options.url);
}

export function wxlogin(openId){
	/*alert("执行ajax");*/
	let xmlhttp;
	let result = {};
	if (window.XMLHttpRequest){
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			result = JSON.parse(xmlhttp.responseText);
		}else{
			result = {
				code:'ERROR'
			}
		}
	}
	xmlhttp.open("POST","/h5/api/member/weixinLogin",false);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("openId="+openId);
	/*alert("微信登录结果=   "+result.code);*/
	return result;
}
