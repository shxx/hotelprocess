import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import Icon from '../../../../components/common/Icon';
import './employeejobwrap.css';


export default class EmployeeDetail extends Component {

	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			show: false,
			current: this.props.num,
			selName: ''
		}
	}

	componentWillMount(){
		document.title = this.props.showTitle;
	}

	selResult(e) {
		let index = e.currentTarget.childNodes[0].getAttribute('data-index'),
			name = e.currentTarget.childNodes[0].getAttribute('data-name'),
			type = e.currentTarget.getAttribute('data-type');
		
		this.setState({
			current: index,
			selName: name
		},function(){
			if(this.props.closeClick){
				this.props.changeDesc(this.state.current,this.state.selName, type);
				this.props.closeClick();
			}
		})
	}

	getJobHtml(data) {
		let {showTitle} = this.props,showData;
		return !!data && data.map((item,index) => {
			switch(showTitle){
				case '部门':
					showData = item.hotelDepart;
					break;
				case '职位':
					showData = item.Job;
					break;
				case '负责区域':
					showData = item.areaDesc;
					break;	
			}
			return(<div className="job-single we-line">
			  	<ul className="custom-equal" onClick={this.selResult.bind(this)} data-type={showTitle}>
			  		<li className="flex-1" data-index={index} data-name={showData}>{showData}</li>
			  		{this.state.current == index ? <li className="job-sel"><Icon type="anniu-queren" /></li> : null}
			  	</ul>
		  	</div>)
		})
	}
	render() {
		let {data} = this.props;
		
		return (
		  <div className="employee-job-wrap">
		  	<div className="job-wrap-list">
		  		{
		  			this.getJobHtml(data)
		  		} 	
		  	</div>
		  </div>
		);
	}
}
