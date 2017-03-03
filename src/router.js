
// 路由配置
import React, { PropTypes, Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

// App 入口
import App from './containers/App'

// 用户端页面
import UserHome from './containers/User/Home'
import UserOrder from './containers/User/Order';
import UserOrderDetail from './containers/User/OrderDetail';
import UserComment from './containers/User/Comment';


// 员工端页面
import MemberHome from './containers/Member/Home';
import MemberReceivingOrder from './containers/Member/ReceivingOrder';
import MemberOrderList from './containers/Member/AllOrderList';
import MemberExchange from './containers/Member/OrderExchange';
import MemberOrderDetail from './containers/Member/OrderDetail';
import MemberEmployee from './containers/Member/Employee';
import MemberEdit from './containers/Member/EmployeeEdit';

import ManagerHome from './containers/Manager/Home';
import ManagerOrderList from './containers/Manager/ManagerOrderList';
import ManagerEmployeeList from './containers/Manager/EmployeeList';


// 配置 router
export default (
	<Route path="/h5" component={App}>
		<Route path="user/home" component={UserHome} />
		<Route path="user/order" component={UserOrder} />
		<Route path="user/orderdetail" component={UserOrderDetail} />
		<Route path="user/comment" component={UserComment} />
		<Route path="member/home" component={MemberHome} />
		<Route path="member/receivingorder" component={MemberReceivingOrder} />
		<Route path="member/orderlist" component={MemberOrderList} />
		<Route path="member/:type/exchange/:orderid" component={MemberExchange} />
		<Route path="member/orderdetail/:id" component={MemberOrderDetail} />
		<Route path="member/employee/:employeeid" component={MemberEmployee} />
		<Route path="manager/home" component={ManagerHome} />
		<Route path="manager/orderlist" component={ManagerOrderList} />
		<Route path="manager/employee" component={ManagerEmployeeList} />
		<Route path="manager/employee/:employeeid" component={MemberEmployee} />
		<Route path="manager/employee/edit/:employeeid" component={MemberEdit} />
	</Route>
)

