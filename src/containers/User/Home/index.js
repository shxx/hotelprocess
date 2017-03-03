import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TopInfo from '../TopInfo'
import LeftOption from '../LeftOption'
import ItemList from '../ItemList'
import BottomNav from '../BottomNav'
import * as userActions from '../../../actions/User/user'

const mapStateToProps = state => {
	return {
		itemList: state.itemList,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class Home extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	componentWillMount() {
		document.title = '用户端首页';
	}

	componentDidMount() {
		let {userActions} = this.props;
		userActions.getItemList();
	}

	componentDidUpdate() {
	}

	render() {
		let {itemList,userActions}=this.props;
		console.log(itemList);
		return (
			<div className="user-item-list-bg">
				<TopInfo/>
				<LeftOption activeOption={itemList.activeOption} userActions={{setActiveOption:userActions.setActiveOption}}/>
				<ItemList itemList={itemList}/>
	            <BottomNav active={0}/>
		    </div>
	    );
	}
}