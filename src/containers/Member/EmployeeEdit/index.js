import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import EmployeeDetail from './EmployeeDetail'
import * as orderActions from '../../../actions/Member/order'


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
export default class Employee extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.employeeChange = this.employeeChange.bind(this);
        this.state = {
        	show: false
        }
    }

    componentWillMount() {	
		document.title = '员工信息修改';
    }

    componentDidMount() {
    	let {orderActions,params} = this.props;
    	orderActions.getEmployeeHotelDesc();
    }

    employeeChange(name,type) {
        let {orderActions,params} = this.props;
        orderActions.getEmployeeHotelDesc({
            "name":name,
            "type":type
        });
    }

    componentDidUpdate() {
    }

	render() {
        let {employeeHotelDesc} = this.props;

		return (
		  <div className="member-order-bg">
            <EmployeeDetail 
                detailData = {employeeHotelDesc.employeeHotelDesc} employeeChange = {this.employeeChange}/>
		  </div>
		);
	}
}
