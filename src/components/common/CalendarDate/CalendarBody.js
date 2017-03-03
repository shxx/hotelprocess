import React from 'react';
import {ScrollFix,wxScroll} from '../../../utils/params';

export default class CalendarBody extends React.Component {
  constructor(props) {
	super(props);
	var newDate = new Date();
	let sDate = this.toStringDate(newDate),
		afterDate = this.toStringDate(new Date(newDate.getTime() + this.props.intervalDays * 1*24*60*60*1000));
	this.state = {
		currentDate:this.toStringDate(newDate),
		startDate: this.props.startDate || this.toStringDate(newDate),
		maxDateInterval: this.props.maxDateInterval || 14,
		endDate: this.props.endDate || this.toStringDate(new Date(newDate.getTime() + 1*24*60*60*1000)),
		num: 0,
		nights: 1,
		interMonth: this.diffMonth(sDate,afterDate)
	}
  }
  componentDidMount() {
	
  }
  toDate(v){
		v = v.split(/-|\//g);
		return new Date(v[0], v[1] - 1, v[2]);
  }
  toStringDate(v){
		return v.getFullYear() + '-' + this.filled(v.getMonth()* 1 + 1) + '-' + this.filled(v.getDate());
  }
  toNumber(v){
		return v.toString().replace(/-|\//g, '');
  }
  filled(v){
		return v.toString().replace(/^(\d)$/, '0$1');
  }
  toDateTime(v){
  	return new Date(v).getTime();
  }
  diffMonth(startDate,endDate) {
  	let sYear = parseInt(startDate.split('-')[0]),
  		sMonth = parseInt(startDate.split('-')[1]),
  		eYear = parseInt(endDate.split('-')[0]),
  		eMonth = parseInt(endDate.split('-')[1]);
  	return ((eYear - sYear) * 12 + (eMonth - sMonth) + 1);
  }
  getMonthDays(cYear,cMonth) {
   //根据月份获取当前天数
	var year = cYear,
		month = cMonth,
		temp = new Date(year,month,0); 
	return temp.getDate(); 
  }
  getFirstDayWeek(cYear,cMonth) {
	//根据年月返回当月1号是星期几
	var year = cYear,
		month = cMonth,
		dt = new Date(year+'/'+month+'/1'),
		weekdays = dt.getDay();
	return weekdays;
  }
  handleOpen(e) {
  	let selDate = e.target.getAttribute('data-time'),day,
  		finalDate = this.toStringDate(new Date(new Date().getTime() + this.props.intervalDays * 86400000)),
  		aFinal = finalDate.split('-'),
  		sfindDate = aFinal[1] +'月'+ aFinal[2] + '日';
   	if(this.state.num == 0 || this.toNumber(selDate) < this.toNumber(this.state.startDate)){
  		this.state.num = 0;
  		if(this.toNumber(selDate) > this.toNumber(finalDate)){
  			this.props.popup('最晚入住日期'+sfindDate);
  			return;
  		}
	  	this.setState({
  			startDate: '',
  			endDate: ''
  		});
  		this.setState({startDate:selDate});
  		this.state.num++;
  		if(this.toNumber(selDate) == this.toNumber(this.toStringDate(new Date(new Date(this.state.currentDate).getTime() + (this.props.intervalDays + 1)* 86400000)))){
  			this.props.popup('最晚入住日期'+sfindDate);
  		}else{
  			this.props.popup('请选择离店日期');
  		}
  	}else if(this.toNumber(selDate) > this.toNumber(this.state.startDate)){
		day = (new Date(selDate).getTime()- new Date(this.state.startDate).getTime())/86400000;
  		this.setState({endDate:selDate,num:0,nights:day})
  		this.props.onhandleSelect({startDate:this.state.startDate,endDate:selDate,days:day});
  	}
  }
  componentDidMount() {
		ScrollFix(document.querySelector('.we-calendar-wrap'));
		wxScroll(['.we-navbar']);
  }
  render() {
  	let calendarList = [],intervalMonth,
		cMonth = this.state.currentDate.split('-')[1],
		cYear = this.state.currentDate.split('-')[0];
	for(let i=0; i<this.state.interMonth; i++){
		let newMonth = parseInt(cMonth) + i;
		let year = cYear;
		year = parseInt(year) + Math.ceil(newMonth/12) - 1
		newMonth = (newMonth % 12 === 0) ? 12 : (newMonth % 12);

		var arry1 =[],arry2 = [],eHtml = "";
		var getDays = this.getMonthDays(year,newMonth),
			FirstDayWeek = this.getFirstDayWeek(year,newMonth);
			for(var j = 0;j < FirstDayWeek; j++ ){
				arry1[j] = j;
			}
			for(var j = 0;j < getDays; j++ ){
				arry2[j] = (j+1);
			}
		let checkInDay = this.toNumber(this.state.startDate),
			checkOutDay = this.toNumber(this.state.endDate),
			curDay = this.toNumber(this.toStringDate(new Date()));

		var node1 = arry1.map(function(item){return <li></li>})
		var node2=[];
		arry2.map(function(item){
			let attrDate = year + '-' + this.filled(newMonth) + '-' + this.filled(item);
			let currentDay = this.toNumber(attrDate);
			let afterDate = this.toNumber(this.toStringDate(new Date(new Date(this.state.currentDate).getTime() + this.props.intervalDays * 86400000)));
			let finalDate = this.toNumber(this.toStringDate(new Date(new Date(this.state.currentDate).getTime() + (this.props.intervalDays + 1)* 86400000)));
			let leaveDate = Math.min(this.toNumber(this.toStringDate(new Date(new Date(this.state.startDate).getTime()+14*24*60*60*1000))),finalDate);
			if(checkInDay == afterDate || leaveDate > afterDate){
				afterDate = finalDate;
			}
			if(currentDay < curDay || currentDay > afterDate){
				node2.push(<li className="disabled">{item}</li>)
			}else{
				if(this.state.num !== 0){
					if(checkInDay == currentDay){
						node2.push(<li data-time={attrDate} onClick={this.handleOpen.bind(this)} className="checkIn">{item}</li>)
					}else if(currentDay <= leaveDate){
						node2.push(<li data-time={attrDate} onClick={this.handleOpen.bind(this)}>{item}</li>)
					}else{
						 node2.push(<li data-time={attrDate} className="disabled">{item}</li>)
					}
				}else{
					if(checkInDay == currentDay){
						node2.push(<li data-time={attrDate} onClick={this.handleOpen.bind(this)} className="checkIn">{item}</li>)
					}else if(checkOutDay == currentDay){
						node2.push(<li data-time={attrDate} onClick={this.handleOpen.bind(this)} className="checkOut">{item}</li>)
					}else if(checkInDay < currentDay && currentDay < checkOutDay){
						node2.push(<li data-time={attrDate} onClick={this.handleOpen.bind(this)} className="selected-range">{item}</li>)
					}else{
						node2.push(<li data-time={attrDate} onClick={this.handleOpen.bind(this)}>{item}</li>)
					}
				}
			}
		}.bind(this));

		calendarList.push(
			<div>
				<div className="we-calendar-header">{newMonth}月 {year}年</div><div className="we-calendar-body">
				<div className="we-calendar-weekday">
					<ul className="clearfix">
						<li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>
					</ul>
				</div>
				<div className="we-calendar-day">
					<ul className="clearfix">
						{node1}{node2}
					</ul>
				</div>
			  </div>
			</div>
		);
	}
	
	return (
		<div className="we-calendar-wrap">{calendarList}</div>
	);
  }
}
