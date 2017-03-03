
export function formatDate(date,type) { 
    switch(type){
        case 'yyyy':
            return date.getFullYear();
            break;
        case 'MM':
            return date.getMonth()* 1 + 1;
            break;
        case 'dd':
            return date.getDate();
            break;
        default:
            break;
    }
};

/**
* 将日期对象转为字符串格式
*/
export function toStringDate(v){
    return v.getFullYear() + '-' + parseInt(v.getMonth()* 1 + 1) + '-' + v.getDate();
}