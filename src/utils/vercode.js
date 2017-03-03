
export function getCode(options){
	let url = '/api/message/sendRegisterValidateCode' || options.url,
		timer = 60 || options.timer,
		data = options.data,
		eCodeBtn = options.eCodeBtn;
	
	eCodeBtn.disabled = true;
	eCodeBtn.innerText = (timer + '秒');
	let eTimer = setInterval(function(){
		timer--;
		eCodeBtn.innerText = (timer + '秒');
		if(timer == 0){
			clearInterval(eTimer);
			eCodeBtn.disabled = false;
			eCodeBtn.innerText = '获取验证码';
		}
	},1000);
	options.callback(url,data,timer,eTimer);
}