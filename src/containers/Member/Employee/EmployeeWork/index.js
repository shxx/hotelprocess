import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Button from '../../../../components/common/Button'
import './mememployeework.css'


export default class EmployeeWork extends Component {

	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.selWorkStatus = this.selWorkStatus.bind(this);
		this.cancleWorkHandler = this.cancleWorkHandler.bind(this);
		this.state = {
			workStatus:['上班','忙碌','休息'],
			num: this.props.status
		}
	}

	getWorkHtml() {
		let {workStatus,num} = this.state;
		return workStatus.map((item,index) => {
			return(
				<li onClick={this.selWorkStatus} className={num == index ? 'current' : ''} data-index={index}>{item}</li>
			)
		})
		
	}

	selWorkStatus(e){
		let index = e.currentTarget.getAttribute('data-index');
		this.setState({
			num: index
		})
	}
	

	cancleWorkHandler(){
		if(this.props.closeClick){
			this.props.closeClick();
		}
	}

	render() {
		let {status} = this.props;
		return (
			<div className="m-popup-exchange">
				<div className="m-exchange-title we-line">当前状态</div>
		  		<div className="m-exchange-desc we-line">
					<p className="select-person">请选择当前上班状态</p>
					<ul className="clearfix">
						{
							this.getWorkHtml()
						}
					</ul>
		  		</div>
		  		<div className="m-exchange-bottom" onClick={this.cancleWorkHandler}>
					<ul className="flex-equal">
						<li className="m-exchange-btn"><Button>确认修改</Button></li>
					</ul>
		  		</div>
		  	</div>
	  	);
	}
}