import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './left-option.css'

export default class TopInfoCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
			optionData:[{
				optionName: '派送物品'
			},{
				optionName: '清洁打扫'
			}]
        }
    }

    getLeftOptionHtml() {
		let {activeOption,userActions} = this.props;
		return (
			<ul>
				{
					this.state.optionData.map((item,i) => {
						return (
							<li className={activeOption == i ? 'active' : ''} onClick={()=>userActions.setActiveOption(i)}><span></span>{item.optionName}</li>
						)
					})
				}
			</ul>

		);
	}

	render() {
		return (
			<div className="user-left-option">
				{this.getLeftOptionHtml()}
			</div>
		);
	}
}