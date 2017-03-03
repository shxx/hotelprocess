import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './comment.css'

export default class Home extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			rating:[-1,-1,-1],
			discribe:["非常差","差","一般","好","非常好"]
		}
    }

    rating(index,e){
    	let key=parseInt((e.changedTouches[0].clientX-e.currentTarget.offsetLeft)*5/e.currentTarget.offsetWidth);
		if(key<0){
			key = 0;
		}
		if(key>4){
			key = 4;
		}
		var temp= [ ].concat(this.state.rating);
		temp[index]= key;
		this.setState({
			rating: temp
		});
     }

    getCommentHtml(){
		let key=this.state.rating;
    	return (
			<div>
				<div className="user-comment">
					<div className="user-comment-server-box">
						<div className="user-comment-server clearfix">
							<div className="user-order-list-pic2"></div>
							<span>服务员：老张</span>
						</div>
					</div>
					<div className="user-comment-divider">
						<span>为服务打分</span>
					</div>
					<div className="user-comment-rating">
						<label>服务态度：</label>
						<div className="user-comment-stars" onTouchStart={this.rating.bind(this,0)} onTouchMove={this.rating.bind(this,0)}>
						<i className={"iconfont icon-pingjiaxingxingkong"+(key[0]>-1?" active":"")}></i>
						<i className={"iconfont icon-pingjiaxingxingkong"+(key[0]>0?" active":"")}></i>
						<i className={"iconfont icon-pingjiaxingxingkong"+(key[0]>1?" active":"")}></i>
						<i className={"iconfont icon-pingjiaxingxingkong"+(key[0]>2?" active":"")}></i>
						<i className={"iconfont icon-pingjiaxingxingkong"+(key[0]>3?" active":"")}></i>
						</div>
						<span>{this.state.discribe[key[0]]}</span>
					</div>
					<div className="user-comment-rating">
						<label>服务质量：</label>
						<div className="user-comment-stars" onTouchStart={this.rating.bind(this,1)} onTouchMove={this.rating.bind(this,1)}>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[1]>-1?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[1]>0?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[1]>1?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[1]>2?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[1]>3?" active":"")}></i>
						</div>
						<span>{this.state.discribe[key[1]]}</span>
					</div>
					<div className="user-comment-rating">
						<label>到达速度：</label>
						<div className="user-comment-stars" onTouchStart={this.rating.bind(this,2)} onTouchMove={this.rating.bind(this,2)}>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[2]>-1?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[2]>0?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[2]>1?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[2]>2?" active":"")}></i>
							<i className={"iconfont icon-pingjiaxingxingkong"+(key[2]>3?" active":"")}></i>
						</div>
						<span>{this.state.discribe[key[2]]}</span>
					</div>
					<div className="user-comment-text">
						<textarea placeholder="点评一下为您服务的人员吧！"></textarea>
					</div>
				</div>
				<div className="user-comment-btn">
					<button>提交评价</button>
				</div>
			</div>
		);	}

	render() {
		return (
			<div className="user-item-list-bg">
				{this.getCommentHtml()}
		    </div>
	    );
	}
}