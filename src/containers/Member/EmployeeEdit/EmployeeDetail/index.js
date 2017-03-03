import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Icon from '../../../../components/common/Icon';
import Modal from '../../../../components/common/Modal';
import EmployeeJob from '../EmployeeJob';
import * as orderActions from '../../../../actions/Member/order'
import './employeedetailwrap.css';


const mapStateToProps = state => {
    return {
        employeeHotelDesc: state.employeeHotelDesc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class EmployeeDetail extends Component {

	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.changeDesc = this.changeDesc.bind(this);
		this.state = {
			show: false
		}
	}

	/**
	 * [getEmployeePicHtml 获取员工头像]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getEmployeePicHtml(data) {
		if(!!data){
			return(<ul className="custom-equal">
					<li className="emp-left">头像</li>
					<li className="emp-r flex-1"><span className="emp-img"><img src={data.employeePic} /></span></li>
				</ul>);
		}
	}
	
	/**
	 * [getEmployeeDepartHtml 获取员工所在酒店部门]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getEmployeeDepartHtml(data){
		if(!!data){
			let num;
			data.hotelDesc.map((item, index) => {
				if(data.employeeDepart == item.hotelDepart){
					num = index;
				}
			})
			return(<ul className="custom-equal" onClick={this.openDepartLayer.bind(this,data.hotelDesc,num,'部门')}>
					<li className="emp-left">部门</li>
					<li className="emp-r flex-1">{data.employeeDepart}</li>
					<li className="emp-arrow"><Icon type="jinruxiangqing" /></li>
				</ul>)
		}
	}

	openDepartLayer(data, index, sTitle) {
		//history.pushState('','title','');
		let title = sTitle;
		Modal.open({
			popup: 'popup-left',
			style: {
				left: '0'
			},
			content: <EmployeeJob 
						showTitle = {title} 
						data = {data} 
						num = {index} 
						closeClick={()=>{Modal.close()}} 
						changeDesc = {this.changeDesc} />
		})
	}

	changeDesc(index,name,type) {
		// if(this.props.employeeChange){
		// 	this.props.employeeChange(name,type);
		// }
		let {orderActions} = this.props;
		orderActions.getEmployeeHotelDesc({
            "name":name,
            "type":type
        });
	}
	
	/**
	 * [getEmployeeJobHtml 获取员工职位]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getEmployeeJobHtml(data){
		if(!!data){
			let num = 0, oneNum = 0;
			data.hotelDesc.map((item, index) => {
				if(item.hotelDepart == data.employeeDepart){
					oneNum = index;
					item.hotelJob.map((jobItem, jobIndex) => {
						if(data.employeeJob == jobItem.Job){
							num = jobIndex;
						}
					});
				}
			})
			return(<ul className="custom-equal" onClick={this.openDepartLayer.bind(this,data.hotelDesc[oneNum].hotelJob,num,'职位')}>
					<li className="emp-left">职位</li>
					<li className="emp-r flex-1">{data.employeeJob}</li>
					<li className="emp-arrow"><Icon type="jinruxiangqing" /></li>
				</ul>)
		}
	}
	/**
	 * [getHotelAreaHtml 获取员工所在酒店的所有区域]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getHotelAreaHtml(data) {
		if(!!data){
			let num;
			data.hotelArea.map((item, index) => {
				if(data.employeeArea == item.areaDesc){
					num = index;
				}
			})
			return(<ul className="custom-equal" onClick={this.openDepartLayer.bind(this,data.hotelArea,num,'负责区域')}>
					<li className="emp-left">负责区域</li>
					<li className="emp-r flex-1">{data.employeeArea}</li>
					<li className="emp-arrow"><Icon type="jinruxiangqing" /></li>
				</ul>)
		}
		
	}

	componentDidMount() {
		window.addEventListener('popstate',()=>{Modal.close()});
	}

	render() {
		let {detailData} = this.props;

		return (
		  <div className="employee-detail-wrap">
			<div className="employee-imgs we-line">
				{
					this.getEmployeePicHtml(detailData)
				}
			</div>
			<div className="employee-edit-list we-line">
				{
					this.getEmployeeDepartHtml(detailData)
				}
			</div>
			<div className="employee-edit-list we-line">
				{
					this.getEmployeeJobHtml(detailData)
				}
			</div>
			<div className="employee-edit-list we-line">
				{
					this.getHotelAreaHtml(detailData)
				}
			</div>
		  </div>
		);
	}

	componentWillUnMount() {
		window.removeEventListener('popstate');
	}
}
