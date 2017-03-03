import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import OrderList from '../../Member/OrderList';
import BottomNav from '../BottomNav';
import TopNav from '../TopNav';
import Scroll from '../../../components/common/Scroll'
import * as managerOrderAction from '../../../actions/Manager/orderManager';

const mapStateToProps = state => {
    return {
        managerOrderList: state.managerOrder
    }
}
const mapDispatchToProps = dispatch => {
    return {
        managerOrderAction: bindActionCreators(managerOrderAction, dispatch)
    }
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class ManagerOrderListCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onInfinite = this.onInfinite.bind(this);
        this.state = {
        	navBar: [
        		{name: '我的派单' },
				{name: '员工派单' }
			 ],
			show: true,
            page:1,
            data:this.getData(1)
        }
    }

    componentWillMount(){
        document.title = '派单列表';
    }

    componentDidMount(){
        let {managerOrderAction} = this.props;
        managerOrderAction.getManagerOrders({
        	orderStatus:'接单中'
        });
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
        let {managerOrderList} = this.props;
		return (
		  <div className="member-order-bg m-all-order home-order">
		  	<TopNav navData = {this.state.navBar} />
		  	<Scroll infinite={this.state.data.length < this.props.total} onInfinite={this.onInfinite}>
		  		<OrderList orderData={managerOrderList.managerOrder} />
		  	</Scroll>
		  	<BottomNav current={1} />
		  </div>
		);
	}
}

ManagerOrderListCom.defaultProps = {
    pageSize:10,
    total:10
};