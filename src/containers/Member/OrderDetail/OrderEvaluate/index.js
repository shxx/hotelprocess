import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../../components/common/Icon'
import './memdetailevaluate.css'

export default class OrderEvaluate extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

	render() {
		return (
			<div className="mem-orderdetail-exchange">
				<div className="order-detail-title we-line">
					<ul>
						<li className="order-d-t"><span className="m-order-icon"><Icon type="yonghupingjia" /></span><span>客人评价</span></li>
					</ul>
				</div>
				<div className="order-detail-evaluate">
					{/*<p className="no-evaluate">客人暂未评价</p>*/}
					<p className="y-evaluate"><em className="evaluate-arrow"></em><span>送的很快，满意</span></p>
					<ul className="evaluate-desc">
						<li><p>服务态度</p><p className="evaluate-star-w"><span className="evaluate-star"><Icon type="pingjiaxingxingdianliang" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span></p></li>
						<li><p>服务质量</p><p className="evaluate-star-w"><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span></p></li>
						<li><p>到达时间</p><p className="evaluate-star-w"><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span><span className="evaluate-star"><Icon type="pingjiaxingxingkong" /></span></p></li>
					</ul>
				</div>
			</div>
		);
	}
}