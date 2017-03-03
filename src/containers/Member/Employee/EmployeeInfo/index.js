import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Button from '../../../../components/common/Button'
import Modal from '../../../../components/common/Modal'
import EmployeeWork from '../EmployeeWork'
import './mememployeeinfo.css'


export default class EmployeeInfo extends Component {

	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.openWorkStatus = this.openWorkStatus.bind(this);
		this.state = {
		}

	}

	/**
	 * [openWorkStatus 修改员工工作状态]
	 * @return {[type]} [description]
	 */
	openWorkStatus(){
		let workHtml = <EmployeeWork status={0} closeClick={()=>{Modal.close();}} />;
	  	Modal.open({
	  		popup:'bottomshow',
	  		clickaway:true,
	  		style:{
		  		bottom:'0'
		  	},
	  		content:workHtml
	  	})
	}

	/**
	 * [getEmployeeInfoHtml 得到员工头像部门信息]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getEmployeeInfoHtml(data) {
		let {bShowEdit} = this.props;
		let editHtml;
		editHtml = bShowEdit ? <p className="employee-desc-edit"><Link to={`/h5/manager/employee/edit/${data.employeeId}`}><span>修改 ></span></Link></p> : null;
		return(<div className="mem-Employee-info">
				<p className="employee-portrait"><img src="/dist/images/employee_portrait.jpg" /></p>
				<p className="employee-name">{data.employeeName}</p>
				<p className="employee-department"><span>{data.employeeDepart}</span><span>{data.employeeJob}</span></p>
				{editHtml}
			</div>);
	}
	
	/**
	 * [getEmployeeStatusHtml 得到员工工作区域及状态]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getEmployeeStatusHtml(data){
		let {bShowEdit} = this.props;
		return(<ul className="flex-equal">
					<li>
						<span className="employee-t">负责区域</span>
						<span className="employee-b">{data.employeeArea}楼</span>
					</li>
					<li>
						<span className="employee-t">评分</span>
						<span className="employee-b">{data.emPloyeeAverageScore}分</span>
					</li>
					<li onClick={bShowEdit ? '' : this.openWorkStatus}>
						<span className="employee-t">状态</span>
						<span className="employee-b work-status">{data.employeeWorkStatus} {bShowEdit ? '' : '>'}</span>
					</li>
				</ul>)
	}

	render() {
		let {infoData} = this.props;
		let data = !!infoData && infoData;
		return (
			<div className="m-employee-desc">
				{this.getEmployeeInfoHtml(data)}
				<div className="employee-work">
					{this.getEmployeeStatusHtml(data)}
				</div>
			</div>
		);
	}
}