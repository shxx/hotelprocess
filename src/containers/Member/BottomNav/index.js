import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../components/common/Icon/'
import {wxScroll} from '../../../utils/params'
import './membottomnav.css'

export default class BottomNavCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	navData: [
			  { path: '/h5/member/home', name: '接单', icon: 'caidanjiedan' },
			  { path: '/h5/member/receivingorder', name: '已接派单', icon: 'caidanyijiedingdan' },
			  { path: '/h5/member/orderlist', name: '派单列表', icon: 'caidanliebiao' }
			]
        }
    }

    componentDidMount() {
		wxScroll(['.mem-bottom-nav']);
    }

	render() {
		let {current} = this.props;
		return (
			<div className="mem-bottom-nav">
				<ul className="flex-equal">
					{
						this.state.navData.map((item,i) => {
							return (
								<li className={current == i ? 'current' : ''}><Link to={item.path}><span className="navb-icon"><Icon type={item.icon} /></span><span className="p-rel">{item.name}{ i == 1 ? <i className="received-num">2</i> : null}</span></Link></li>
							)
						})
					}
				</ul>
			</div>
		); 
	}
}