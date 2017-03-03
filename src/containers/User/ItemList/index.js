import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../../../components/common/Button'
import './item-list.css'
import * as userActions from '../../../actions/User/user'
import Modal from '../../../components/common/Modal'

export default class OrderListCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			amount:[]
		}
    }

    plus(index){
		var temp = [ ].concat(this.state.amount);
		temp[index] = temp[index]+1;
		this.setState({
			amount: temp
		});
	}

	minus(index){
		var temp = [ ].concat(this.state.amount);
		temp[index] = temp[index]-1;
		this.setState({
			amount: temp
		});
	}

	submit(index){
		console.log('submit');
	}

	submit2(){
		Modal.open({
			title: '确认打扫',
			popup: 'center',
			content: <div className="win-box"><div className="win-title">温馨提示</div><div className="win-body">房间清扫一天只能清扫一次，您确认需要清洁房间吗？</div></div>,
			clickaway: true,
			closebtn: true,
			buttons: {'取 消': () => Modal.close(), '确 认': () => Modal.close()}
		})
	}

	getItemListHtml() {
		let {itemList} = this.props,
			itemHtml;
		var	length = itemList.itemData && itemList.itemData.length,
			length2 = this.state.amount.length;
		if(length && !length2){
		    var temp= [ ].concat(this.state.amount);
			for(var i=0;i<length;i++){
		        temp.push(0);
			}
			this.setState({
				amount: temp
			});
		}
		let amount = this.state.amount;
		if(itemList.activeOption==0){
		    itemHtml = length && length2 && itemList.itemData.map((item,i) => {
			return(<div className="user-item-list-row">
				<div className="user-item-list-pic"></div>
				<div className="user-item-list-content">
					<div className="user-item-list-name">{item.itemName}</div>
					<div className="user-item-list-action clearfix">
						<div className={amount[i]<=0?"user-item-list-minus user-item-list-disable":"user-item-list-minus"} onClick={this.minus.bind(this,i)}><span></span></div>
						<div className="user-item-list-amount">{amount[i]}</div>
						<div className={amount[i]>=2?"user-item-list-plus user-item-list-disable":"user-item-list-plus"} onClick={this.plus.bind(this,i)}><span></span><span></span></div>
					</div>
					<div className={amount[i]<=0?"user-item-list-btn user-item-list-disable":"user-item-list-btn"} onClick={this.submit.bind(this,i)}>确认</div>
				</div>
			</div>);
		    });
		}else{
			itemHtml = <div className="user-item-list-row">
					<div className="user-item-list-pic"></div>
					<div className="user-item-list-content">
						<div className="user-item-list-name">清洁打扫</div>
						<div className={false?"user-item-list-btn user-item-list-disable":"user-item-list-btn"} onClick={this.submit2.bind(this)}>确认</div>
					</div>
				</div>;
		}
		return itemHtml;
	}

	render() {
		return (
			<div className="user-item-list">
				{this.getItemListHtml()}
			</div>
		);
	}
}