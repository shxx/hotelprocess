import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

export default class AHref extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

	render() {
		if(!!this.props.href){
			return (
				<Link to={this.props.href}>
					{this.props.children}
				</Link>
			)
		}else{
			return (<div>
				{this.props.children}
				</div>
			)
		}
	}
}