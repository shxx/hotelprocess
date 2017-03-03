import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import EmployeeInfo from './EmployeeInfo'
import EmployeeScore from './EmployeeScore'
import * as orderActions from '../../../actions/Member/order'


const mapStateToProps = state => {
    return {
        employeeDesc: state.employeeDesc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class Employee extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	show: false
        }
    }

    componentWillMount() {	
		document.title = '员工信息';
    }

    componentDidMount() {
    	let {orderActions,params} = this.props;
    	orderActions.getEmployeeDesc({
            memberId: params.employeeid
        });
    }

    componentDidUpdate() {
    }

	render() {
		let {employeeDesc,route} = this.props;
        let bShow = (route.path.indexOf('member') == -1);
		return (
		  <div className="member-order-bg">
            <EmployeeInfo 
                infoData = {employeeDesc.employeeDesc} 
                bShowEdit = {bShow} />
            <EmployeeScore 
                scoreData = {employeeDesc.employeeDesc} />
		  </div>
		);
	}
}
