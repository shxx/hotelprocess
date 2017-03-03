import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import Notice from '../../Member/ReceivingOrder/Notice';
import OrderList from '../../Member/OrderList';
import BottomNav from '../BottomNav';
import Scroll from '../../../components/common/Scroll';
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
export default class Home extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            page:1,
            data:this.getData(1)
        }
    }

    componentWillMount(){
        document.title = '派单管理';
    }

    componentDidMount(){
        let {managerOrderAction} = this.props;
        managerOrderAction.getManagerOrders({
            orderStatus:'待分配'
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
		  <div className="member-order-bg m-h-order home-order">
		  	<Notice num = {2} content= '待分配订单' />
            <Scroll infinite={this.state.data.length < this.props.total} onInfinite={this.onInfinite}>
		  	   <OrderList orderData={managerOrderList.managerOrder} />
            </Scroll>
		  	<BottomNav current={0} />
		  </div>
		);
	}
}

Home.defaultProps = {
    pageSize:10,
    total:10
};