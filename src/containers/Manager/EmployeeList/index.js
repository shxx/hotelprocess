import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import OrderList from '../../Member/OrderList';
import BottomNav from '../BottomNav';
import TopNav from '../TopNav';
import Scroll from '../../../components/common/Scroll'
import EmployeeList from './EmployeeSingle'
import * as managerOrderAction from '../../../actions/Manager/orderManager';

const mapStateToProps = state => {
    return {
        employeeList: state.employeeList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        managerOrderAction: bindActionCreators(managerOrderAction, dispatch)
    }
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class EmployeeListCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onInfinite = this.onInfinite.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.state = {
        	navBar: [
        		{name: '在岗员工', type: "online"},
				{name: '所有员工', type: "all"}
			 ],
			show: true,
            page:1,
            data:this.getData(1),
            bChange: false
        }
    }

    componentWillMount(){
        document.title = '员工列表';
    }

    componentDidMount(){
        let {managerOrderAction} = this.props;
        managerOrderAction.getEmployeeList({
            type:'online'
        });

    }

    /**
     * [refreshList 更改Navbar重新获取数据]
     * @return {[type]} [description]
     */
    refreshList(type) {
        let {managerOrderAction} = this.props;
        managerOrderAction.getEmployeeList({
            type:type
        });
        this.setState({
            bChange: true
        })
    }
    /**
     * [getData 数据拼接]
     * @param  {Number} page [description]
     * @return {[type]}      [description]
     */
    getData(page=1) {
        let pageSize=this.props.pageSize;
        let len = page*pageSize > this.props.total ? this.props.total : page * pageSize;
        let nextlist=[];

        for(let i = (page-1)*pageSize; i<len; i++){
            nextlist.push('item'+1)
        }
        return nextlist;
    }

    /**
     * [onInfinite 滚动到底部加载更多数据]
     * @return {[type]} [description]
     */
    onInfinite() {
        let page = this.state.page + 1;
        let nextData = this.getData(page);
        this.setState({
            data:this.state.data.concat(nextData),
            page:page
        });
    }

	render() {
        let {employeeList} = this.props;
        let employeeData = this.state.bChange ? employeeList.onLineEmployeeList : employeeList.employeeList;
           
		return (
		  <div className="member-order-bg m-all-order home-order">
		  	<TopNav 
                navData = {this.state.navBar} 
                refreshList = {this.refreshList} />
		  	<Scroll infinite={this.state.data.length < this.props.total} onInfinite={this.onInfinite}>
		  		<EmployeeList 
                    data = {employeeData} />
		  	</Scroll>
		  	<BottomNav current={2} />
		  </div>
		);
	}
}

EmployeeListCom.defaultProps = {
    pageSize:10,
    total:10
};