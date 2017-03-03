import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Button from '../../../../components/common/Button'
import Icon from '../../../../components/common/Icon'
import Input from '../../../../components/common/Input/Input'
import './memexchangeperson.css'

export default class ExchangePerson extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.selectPersonHandle = this.selectPersonHandle.bind(this);
        this.exchangeSubmit = this.exchangeSubmit.bind(this);
        this.getSubmitStatus = this.getSubmitStatus.bind(this);
        this.noteChange = this.noteChange.bind(this);
        this.state = {
        	current: -1,
        	person:'',
        	noteValue:'',
        	timer:''
        }
    }

    getPersonHtml() {
    	let {personData} = this.props,
    		length = personData && personData.length;

    	let elePersonHtml = length && personData.map((item, i) => {
    		return(
    			<li onClick={this.selectPersonHandle} className={(i == this.state.current) ? 'current' : ''} data-index={i} data-person={item.name}>{item.name}</li>
    		)
    	})
    	return elePersonHtml;

    }
	
	/**
	 * [selectPersonHandle 获取员工流转其它人]
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
    selectPersonHandle(e){
    	this.setState({
    		current: e.currentTarget.getAttribute('data-index'),
    		person: e.currentTarget.getAttribute('data-person')
    	})
    }
	
	/**
	 * [noteChange 改变备注内容]
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	noteChange(e) {
		clearTimeout(this.state.timer);
		this.state.timer = setTimeout(function(){
			this.setState({
				noteValue: e
			})
		}.bind(this),200);
	}

	/**
	 * [exchangeSubmit 提交流转订单]
	 * @return {[type]} [description]
	 */
    exchangeSubmit(e) {
    	let person = this.state.person,
    		note = this.state.noteValue;

    }

    /**
     * [getSubmitStatus 返回按钮是否可点击]
     * @return {[type]} [description]
     */
    getSubmitStatus(){
    	return (this.state.current != -1) && (!!this.state.noteValue);
    }

	render() {
		let disabled = this.getSubmitStatus() ? '' : 'disabled';
		return (
			<div className="m-exchange-person">
		  		<div className="m-exchange-title we-line">
		  			<ul className="flex-equal">
		  				<li>派单流转至</li>
		  				<li className="exchange-depart tr">客房部<span className="arrow-right-icon"><Icon type="jinruxiangqing" /></span></li>
		  			</ul>
		  		</div>
		  		<div className="m-exchange-desc we-line">
					<ul className="clearfix">
						{this.getPersonHtml()}
					</ul>
		  		</div>
		  		<div className="exchange-reason we-line">
		  			<ul className="custom-equal">
		  				<li className="reason-4">流转原因</li>
		  				<li className="flex-1"><Input placeholder="请填写该单流转原因" name="reasonNote" ref="note" onChange={this.noteChange}/></li>
		  			</ul>
		  		</div>
		  		<div className="m-exchange-bottom">
					<ul>
						<li className="m-exchange-btn" onClick={this.exchangeSubmit}><Button disabled={disabled}>确认</Button></li>
					</ul>
		  		</div>
		  	</div>
		);
	}
}