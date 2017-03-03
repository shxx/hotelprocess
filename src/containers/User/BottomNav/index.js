import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../components/common/Icon/'
import './bottom-nav.css'

export default class BottomNavCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
			navData: [
				{ path: '/h5/user/home', name: '菜 单', icon: 'caidan', icon2:"caidanxuanze" },
				{ path: '/h5/user/order', name: '派送单', icon: 'paisongdan', icon2:"paisongdanxuanze" },
			]
        }
    }

	render() {
		let {active} = this.props;
		return (
			<div className="user-bottom-nav">
			    <ul className="flex-equal">{
				    this.state.navData.map((item,i) => {
				        return (
			                <li className={active == i ? 'active' : ''}><Link to={item.path}><Icon type={active == i ? item.icon2 : item.icon} /><span>{item.name}</span></Link></li>
						)
	                })
				}
				</ul>
		    </div>
	    );
	}
}