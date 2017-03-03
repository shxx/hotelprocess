import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import BottomNav from '../BottomNav'
import OrderList from '../OrderList'
import Notice from './Notice';
import Scroll from '../../../components/common/Scroll'
import * as orderActions from '../../../actions/Member/order'


const mapStateToProps = state => {
    return {
        orderList: state.receivingOrder
    }
}
const mapDispatchToProps = dispatch => {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class ReceivingOrder extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this)
        this.onInfinite = this.onInfinite.bind(this);
        this.state = {
            show: true,
            page:1,
            data:this.getData(1)
        }
    }

    componentWillMount() {	
		document.title = '已接派单';
    }

    componentDidMount() {
    	let {orderActions} = this.props;
    	orderActions.getReceivingOrders();
    }

    componentDidUpdate() {
    }

    /**
     * [handleFilter 派单流转传入数据]
     * @param  {[type]} orderNo [description]
     * @return {[type]}         [description]
     */
    handleFilter(orderNo) {
        let {orderActions} = this.props;
        if(!!orderNo){
           orderActions.getFilterReceiving(orderNo);
        }
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
		let {orderList} = this.props;
		return (
		  <div className="member-order-bg mem-top3 home-order">
            <Notice num = {2} content= '当前待完成派单' />
             <Scroll infinite={this.state.data.length < this.props.total} onInfinite={this.onInfinite} >
		  	   <OrderList orderData={orderList.receivingOrder} type="receivingorder" handleFilter={this.handleFilter} />
            </Scroll>
		  	<BottomNav current={1} />
		  </div>
		);
	}
}

ReceivingOrder.defaultProps = {
    pageSize:10,
    total:20
};