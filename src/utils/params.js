import {strToken} from '../components/common/util/utils/strings';
import {refetch,ajax,wxlogin} from './refetch';
var _gAllParams = window.initGlobal;


export function http_getRequest(paras,retnull){
	let url = location.href;
	let paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
	let paraObj = {}
    let j = 0;
	for (let i=0; j=paraString[i]; i++){
		paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
	}
	let returnValue = paraObj[paras.toLowerCase()];
	if(typeof(returnValue)=="undefined"){
		if(typeof(retnull) != "undefined" && retnull == true){
			return null;
		}
		return "";
	}else{
		returnValue = returnValue.replace(/#/, "")
		return returnValue;
	}
};

export function http_hasChildReq(myurl){
	let url = location.href;
	let paraString = url;
	if(url.indexOf("?") > 0){
		paraString = url.substring(0,url.indexOf("?"));
	}
	if(paraString == null) return false;
	if(paraString.indexOf(myurl) == -1) return false;
	paraString = paraString.substring(paraString.indexOf(myurl)+1+myurl.length,paraString.length);
	if(paraString == null || paraString == "" || paraString == "/") return false;
	return true;
}

export function getParam(name){
	if(typeof(_gAllParams) == "undefined"){
		return "";
	}
	let _retValue = http_getRequest(name,true);
	if(_retValue != null){
		_retValue = decodeURIComponent(_retValue);
		_gAllParams[name] = _retValue;
		return _retValue;
	}else{
		_retValue = _gAllParams[name];
		if(typeof(_retValue) != "undefined") return _retValue;
	}
	//没有找到
	/*let value = window.sessionStorage.getItem(name);
	if(typeof(value) == "undefined" ||  value == null) return null;
	let objType = strToken(value,"@#OBJ_#**#_FLAG#@",1);
	_retValue = strToken(value,"@#OBJ_#**#_FLAG#@",2);
	if(_retValue == "JSONOBJ") {
		_retValue = JSON.parse(_retValue);
	}
	_gAllParams[name] = _retValue;*/
	return _retValue;
}

export function getParamEx(name,defaultValue){
	let lret = getParam(name);
	if(typeof(lret) == "undefined" || lret == null){
		return defaultValue;
	}
	return lret;
}

export function setParam(name,value){
	_gAllParams[name] = value;
	if(value == null) return;
	/*if(typeof(value) == "object"){
		value = JSON.stringify(value);
		value = "JSONOBJ"+"@#OBJ_#**#_FLAG#@"+value;
	}else{
		value = "NORMAL@#OBJ_#**#_FLAG#@"+value;
	}
	window.sessionStorage.setItem(name,value);*/
}

export function logout(flag){
	setParam('blogined','flase');
	window.sessionStorage.removeItem('blogined');
	window.sessionStorage.removeItem('logintime');
	if(flag == true){
		saveSessionParam('loginOutFlag','true');			//flag 用于判断是否是用户点击的退出
	}
}

export function needCheckLogin(){
	var vNow = new Date();
	var logintime = loadSessionParam('logintime');
	if(logintime == null) return true;
	if(vNow.getTime() - logintime >= 15*60*1000){
		return true;
	}
	return false;
}

export function resetLoginTime(){
	var vNow = new Date();
	saveSessionParam('logintime',vNow.getTime());
}

export function isLogined(){
	var vLogin = _gAllParams['blogined'];
	if(typeof(vLogin) != "undefined" && vLogin == "true"){
		return true;
	}
	vLogin = loadSessionParam('blogined');
	if(typeof(vLogin) != "undefined" && vLogin != null && vLogin == "true"){
		return true;
	}
	let openId = loadParam("wxOpenId");
	let returnResult = false;			//微信登录结果
	let flag = getParamEx('loginOutFlag','');							//ListItem 组件中a 标签跳转到的参数
	setParam('goBackUrl',getParamEx('goBackUrl'),"");				//设置一个表示，用来判断是否从会员中心页被拦截到登录页，如果是，点击返回按钮时跳回会员中心页，并把参数带回去
	if(flag == "true"){
		saveSessionParam('loginOutFlag',flag);
	}

	if(openId != ""  && openId != null && loadSessionParam('loginOutFlag') == "false" && loadSessionParam('openIdLoginFlag') == "true"){
		let result = wxlogin(openId);
		if(result.code == "SUCCESS" ){
			returnResult = true;
			setLogined();
            setUserInfo(result);
            setParam("userid", result.userId);
		}else if(result.code == "NOT_BIND"){
			saveSessionParam('openIdLoginFlag','false');
		}
       /* refetch( {
            method : 'post', 
            url : '/api/member/weixinLogin',
            options:{
            	dataType: 'json', 
            	timeout: 30000 ,
            	async:false
            },
            data:{
            	openId:openId
            },
            success: function(data){
            },
            fail : function(msg){
                console.log(msg)
            },
            error : function(msg){

            }
        });*/
	}
	return returnResult;
}

export function setLogined(){
	setParam('blogined','true');
	saveSessionParam('blogined','true');
	resetLoginTime();
}

export function setNoLogined(){
	setParam('blogined','false');
	saveSessionParam('blogined','false');
}

//登录后的用户获取用户的UserID
export function getUserId(){
	var userid = _gAllParams['userid'];
	if(typeof(userid) != "undefined") return userid;
	var userInfo = loadSessionParam("userInfo");
	if(userInfo == null) return "";
	return userInfo.userId;
}

export function getUserNickName(){
	var nickname = _gAllParams['nickname'];
	if(typeof(nickname) != "undefined") return nickname;
	var userInfo = loadSessionParam("userInfo");
	if(userInfo == null) return "";
	return userInfo.fullName;
}

export function getUserInfo(){
	var userInfoStr = loadSessionParam("userInfo");
	if(userInfoStr == null || userInfoStr == "") return [];
	return JSON.parse(userInfoStr);
}

export function setUserInfo(userInfo){
	saveSessionParam("userInfo",JSON.stringify(userInfo));
}

export function saveSessionParam(name,value){
	if(window.sessionStorage){
		//console.log("saveParam="+name);
		window.sessionStorage.setItem(name,value);
	}
}

export function loadSessionParam(name){
	if(window.sessionStorage){
		//console.log("loadParam="+name);
		return window.sessionStorage.getItem(name);
	}
	return null;
}

export function saveParam(name,value){
	if(window.localStorage){
		//console.log("saveParam="+name);
		window.localStorage.setItem(name,value);
	}
}

export function loadParam(name){
	if(window.localStorage){
		//console.log("loadParam="+name);
		return window.localStorage.getItem(name);
	}
	return null;
}
export function removeStorageItem(name){
	if(window.localStorage){
		return window.localStorage.removeItem(name);
	}
}
export function clearStorae(){
	if(window.localStorage){
		window.localStorage.clear();
	}
}

export function logd(obj){
	console.log(obj);
}

export function loge(obj){
	console.log(obj);
}

export function logw(obj){
	console.log(obj);
}

export function formatDate(date,fmt){
	//console.log(date);
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function ScrollFix(elem){
	// Variables to track inputs
	var startY, startTopScroll;

	elem = elem || document.querySelector(elem);

	// If there is no element, then do nothing
	if(!elem)
		return;
	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startY = event.touches[0].pageY;
		startTopScroll = elem.scrollTop;
		if(startTopScroll <= 0)
			elem.scrollTop = 1;

		if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
	}, false);
}
export function wxScroll(ele){
	for(let i=0; i<ele.length;i++){
		document.querySelector(ele[i]).addEventListener('touchmove',function(e){
			e.preventDefault();
			e.stopPropagation();
		},false);
	}

}
export function delHtmlTag(str){
	return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
}

export function setAsyncRouteLeaveHook(router, route, hook) {
	let withinHook = false
	let finalResult = undefined
	let finalResultSet = false
	router.setRouteLeaveHook(route, nextLocation => {
		withinHook = true
		if (!finalResultSet) {
			hook(nextLocation).then(result => {
				finalResult = result
				finalResultSet = true
				if (!withinHook && nextLocation) {
					router.replace(nextLocation)
				}
			})
		}
		let result = finalResultSet ? finalResult : false
		withinHook = false
		finalResult = undefined
		finalResultSet = false
		return result
	})
}
export function replaceUrlParams(url, nextParams){
	if (! url || ! nextParams) {
		return "";
	}

	var num = url.indexOf("?");
	var pathname, params;
	if (num > -1) {
		pathname = url.substring(0, num);
		params = url.substring(num + 1);
		var strs = params.split("&");
		params = {};
		for (var i = 0; i < strs.length; i++) {
			var items = strs[i].split("=");
			if (items[0]) {
				params[items[0]] = decodeURIComponent(items[1]);
			}
		}
	} else {
		pathname = url;
		params = {};
	}

	for (var p in nextParams) {
		params[p] = nextParams[p];
	}
	var nextUrl = "";
	for (var p in params) {
		nextUrl = nextUrl + "&" + p + "=" + encodeURIComponent(params[p]);
	}
	nextUrl = pathname + "?" + nextUrl.substring(1);
	return nextUrl;
}