import React, { PropTypes, Component } from 'react'
import * as PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

class App extends Component {

	constructor(props, context) {
		super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {};
	}

	componentDidMount() {
		document.body.addEventListener('touchstart',function(){},false);
	}

	render() {
		return (
            this.props.children
        )
	}
	
	//生命周期销毁状态
	componentWillUnmount() {
		document.body.removeEventListener('touchstart');
	}
}

export default App;