/**
 * [description 倒计时组件]
 * @param  {[type]} opt.currentTime     [系统当前时间]
 * @param  {[type]} opt.orderTime       [用户下单时间]
 * @param  {[type]} opt.expirationTime  [到期时间 秒]
 * @param  {[type]} opt.endFunc 		[结束函数]
 * @return {[type]}             [description]
 */
export function CountDown(opt){
	var nTime = new Date().getTime() || formateDate.toDateTime(opt.currentTime),
		oTime = formateDate.toDateTime(opt.orderTime),
		eTime = opt.expirationTime || 120;
	var lefTime = Math.floor((oTime - nTime) / 1000) + parseInt(eTime);

    this.orderNo = opt.orderNo;
    this.time = lefTime; //时间
    this.countFunc = opt.countFunc; //计时函数
    this.endFunc = opt.endFunc; //结束函数
    this.flag = 't' + Date.parse(new Date()); //
};

CountDown.prototype.start = function(){
    var self = this;
    self.flag = setInterval(function () {

        if (self.time < 0) {
            clearInterval(self.flag);
            if(self.endFunc){
                self.endFunc(self.orderNo);

            }
        } else {
            var minute,second;
            minute = formateDate.filled(Math.floor(self.time / 60 % 60));
            second = formateDate.filled(Math.floor(self.time % 60));
            //倒计时执行函数
            
            if(self.countFunc){
               self.countFunc(second, minute, self.orderNo); 
            }
            
            self.time--;
        }
    }, 1000);
}

const formateDate = {
	filled: function(v){
		return v.toString().replace(/^(\d)$/, '0$1');
	},
	toDateTime(v){
		return new Date(v).getTime();
	}
}