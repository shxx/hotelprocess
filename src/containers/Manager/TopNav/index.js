import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './memtopnav.css'

export default class TopNavCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.tabChange = this.tabChange.bind(this);
        this.state = {
			current: 0
        }
    }

    tabChange(e){
    	let ele = e.currentTarget;
    	let index = ele.getAttribute('data-index'),
    		type = ele.getAttribute('data-type');
    	this.setState({
    		current : index
    	})
    	if(this.props.refreshList){
    		this.props.refreshList(type);
    	}
    }

	render() {
		let {current} = this.state;
		return (
			<div className="mem-top-nav">
				<ul className="flex-equal we-line">
					{
						this.props.navData.map((item,i) => {
							return (
								<li className={current == i ? 'current' : ''} onClick={this.tabChange} data-index={i} data-type={item.type}>{item.name}</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}