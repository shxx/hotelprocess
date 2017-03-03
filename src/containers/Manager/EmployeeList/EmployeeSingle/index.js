import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import Icon from '../../../../components/common/Icon/'
import './employeesingle.css'

export default class EmployeeSingle extends Component {

	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
		}
	}

	componentWillMount(){
	}

	componentDidMount(){
	}

	getEmployeeListHtml(data,length) {
		let clas,orderStatus;
		return length>0 && data.map((item,index) => {

			if(item.employeeWorkStatus == '工作中'){
				if(item.employeeOrderNum == 0){
					clas = 'n_status';
					orderStatus = '暂无接单';
				}else{
					clas = 'y_status';
					orderStatus = '已接<b>'+ item.employeeOrderNum + '</b>单';
				}
			}else{
				clas = 'r_status';
				orderStatus = '休息中';
			}

			return(
				<div className="employee-single-list">
					<Link to={'/h5/manager/employee/'+item.employeeId}>
					<p className={`em-workstatus ${clas}`} dangerouslySetInnerHTML={{__html: orderStatus}}></p>
					<ul className="custom-equal">
						<li className="employee-img">
							<img src={item.employeePic} />
						</li>
						<li className="flex-1 em-desc">
							<span className="em-name">{item.employeeName}</span>
							<span className="em-depart"><b>{item.employeeDepart}</b><b>{item.employeeJob}</b></span>
							<span className="em-area">负责区域<b className="em-floor">{item.employeeArea}</b>楼</span>
						</li>
						<li className="employee-link"><Icon type="jinruxiangqing" /></li>
					</ul>
					</Link>
				</div>)
		})
	}
	render() {
		let {data} = this.props,
			length = data && data.length || 0;
		

		return (
			<div className="employee-single-wrap">
				{ length > 0 ? <h3 className="employee-num">共{data.length}位员工</h3> : null}
				{this.getEmployeeListHtml(data, length)}
			</div>
		);
	}
}