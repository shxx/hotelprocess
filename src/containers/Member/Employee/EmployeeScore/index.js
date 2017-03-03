import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../../components/common/Icon'
import './mememployeescore.css'


export default class EmployeeInfo extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

    /**
     * [getFractionHtml 得到评分HTML]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    getFractionHtml(data) {
    	let score = !!data && data.employeeScrore[0];
    	if(score){
	    	return(<ul>
					<li>服务态度<span>{score.attitudeScore}分</span></li>
					<li>到达时间<span>{score.arriveScore}分</span></li>
					<li>服务质量<span>{score.qualityScore}分</span></li>
				</ul>)
		}
    }
	
	/**
	 * [getStatisticsHtml 得到接单评分百分比]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getStatisticsHtml(data) {
		let statisics = !!data && data.employeeOrderComplete;
			return statisics && statisics.map((item,index) => {
				let clas,con;
				switch(index){
					case 0:
						con = '当日接单'
						break;
					case 1:
						con = '当月接单';
						break;
					case 2:
						con = '历史订单';
						break;
				}
				clas = item.type.toLowerCase();

				return(<li>
						<span className={`e-order-count-${clas}`}>{item.type}</span>
						<span className={`e-order-${clas}`}>{con}</span>
						<span className="e-order-num">{item.num}</span>
						<span className="e-order-complete">准时完成率</span>
						<span className="e-order-percent">{item.percentage}</span>
					</li>)
			})
			
	}

	render() {
		let {scoreData} = this.props;

		return (
			<div className="m-employee-score">
				<div className="order-detail-title we-line">
					<ul>
						<li className="order-d-t">
							<span className="m-order-icon"><Icon type="yonghupingjia" /></span>
							<span>近一个月各项评分</span>
						</li>
					</ul>
				</div>
				<div className="employee-fraction">
					{this.getFractionHtml(scoreData)}
				</div>
				<div className="e-order-statistics">
					<ul className="flex-equal">
						{this.getStatisticsHtml(scoreData)}
					</ul>
				</div>
			</div>
		);
	}
}