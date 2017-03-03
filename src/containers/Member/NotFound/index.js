import React, { PropTypes, Component } from 'react'
import * as PureRenderMixin from 'react-addons-pure-render-mixin'

import './notfound.css'

export default class NotFound extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="notfoud-container">
                <div className="img-404"></div>
                <div className="notfound-p">
                    <p>现在没有单子哦！</p>
                    <p>去接一个吧~</p>
                </div>
            </div>
        )
    }
}