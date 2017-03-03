import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import BottomNav from '../BottomNav'
import OrderList from '../OrderList'
import NotFound from '../NotFound'
import Scroll from '../../../components/common/Scroll'
import {ScrollFix,wxScroll} from '../../../utils/params'
import * as orderActions from '../../../actions/Member/order'

const mapStateToProps = state => {
    return {
        orderList: state.waitingOrder
    }
}
const mapDispatchToProps = dispatch => {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class Home extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.onInfinite = this.onInfinite.bind(this);
        this.onPullRefresh = this.onPullRefresh.bind(this);
        this.state = {
        	show: true,
            page:1,
            data:this.getData(1)
        }
    }

    componentWillMount() {	
		document.title = '准备接单';
    }

    componentDidMount() {
    	let {orderActions} = this.props;
    	orderActions.getWatingOrders();
        
    }

    //组件更新时判断有没有加载到数据
    componentDidUpdate(){
        let {orderList} = this.props;

        if(orderList.waitingOrder.length > 0){
            this.setState({
                show: true
            })
        }else{
            this.setState({
                show: false
            })
        }
    }

    /**
     * [handleFilter 派单流转传入数据]
     * @param  {[type]} orderNo [description]
     * @return {[type]}         [description]
     */
    handleFilter(orderNo) {
        let {orderActions} = this.props;
        if(!!orderNo){
           orderActions.getFilterOrder(orderNo);
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

    /**
     * [onPullRefresh 下拉刷新数据]
     * @return {[type]} [description]
     */
    onPullRefresh() {
        //console.log('刷新成功')
    }

	render() {
    	let {orderList} = this.props;
		return (
		  <div className="member-order-bg home-order">
            {
                this.state.show ? 
                <Scroll infinite={this.state.data.length < this.props.total} onInfinite={this.onInfinite} refresh={true} onPullRefresh={this.onPullRefresh}>
                    <OrderList orderData={orderList.waitingOrder} type="home" href={this.props.location.pathname} handleFilter={this.handleFilter}/>
                </Scroll> : 
                <NotFound />
            }
		  	<BottomNav current={0} />
		  </div>
		);
	}
}

Home.defaultProps = {
    pageSize:10,
    total:20
};