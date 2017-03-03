import React from 'react';
import DropDown from '../DropDown';
import Button from '../Button';
import {strToken} from '../util/utils/strings';
import './Tab.css';

class TabTitle extends React.Component {
	constructor(props){
		super(props);
		this.state={
			currentIndex : this.props.currentIndex
		};
	}
	onIndexChange(itemIndex,name){
		//let itemIndex = e.target.getAttribute("data-index")
		this.setState({currentIndex:itemIndex});
		this.props.callbackParent(itemIndex);
	}
	check_tittle_index(index){
		return index != this.props.currentIndex ? "we-tab-tittle " : "we-tab-tittle we-tab-active ";
	}
	render (){
		return (
			<div className={this.props.titleBoxClass + " we-tab-tittle-wrap"}>
				{ this.props.aTabData.map( (item,i) => {
					return(
						<div
						data-index = {i}
						onClick={ this.onIndexChange.bind(this,i,item.tabTitle) }
						className={ this.check_tittle_index(i) + this.props.titleClass}>
							{ item.tabTitle }
						</div>
					);
				}) }
			</div>
		);
	}
}
class TabItem extends React.Component {
	constructor(props){
		super(props);
		let selectedIndex = this.props.selectedIndex;
		let allItems = [];
		for(let i=1; i<100; i++){
			let index2 = strToken(selectedIndex,":",i);
			if(index2 == "") break;
			allItems[this.props.currentIndex+'_'+index2] = true;
		}
		this.state = {
			selecteditems: allItems
		};
		this.keyToNames = [];
		//console.log("TabItem new");
		//console.log(this);
	}
	check_item_index(index){
		return index != this.props.currentIndex ? "we-tab-item hide " : "we-tab-item ";
	}
	clearAllSelected(){
		this.setState({selecteditems:[]});
	}
	
	onClickTabItem(i,tabIndex, name,itemname,bclose){
		let allItems = this.state.selecteditems;
		let bselected = allItems[tabIndex+'_'+i]; 
		if(typeof(bselected) == "undefined"){
			allItems[tabIndex+'_'+i] = true;
		}else{
			allItems[tabIndex+'_'+i] = !allItems[tabIndex+'_'+i];
		}
		this.setState({selecteditems:allItems});
		if(bclose){
			this.onChangeSelected(i,itemname);
		}else{			
			this.keyToNames[tabIndex+'_'+i] = itemname;
		}
	}
	onChangeSelected(selecteId,name){
		if(this.props.onChangeSelected){
			this.props.onChangeSelected(selecteId,name);
		}
	}
	onClickBtnOK(tabId){
		let retName = "";
		let selectedIndex = "";
		let allItems = this.state.selecteditems;
		console.log(this.keyToNames);
		for(let i=0; i<50; i++){
			let tmp = allItems[tabId+'_'+i];
			if(typeof(tmp) != "undefined" && tmp != null && tmp == true){
				let name = this.keyToNames[tabId+'_'+i];
				if(typeof(name) != "undefined" && name != "" && name != null){
					if(retName != "") retName = retName + ",";
					retName = retName + name;
				}
				if(selectedIndex != "") selectedIndex = selectedIndex + ":";
				selectedIndex = selectedIndex+ i;
			}
		}
		if(this.props.onChangeSelected){
			this.props.onChangeSelected(selectedIndex,retName);
		}
	}
	
	render (){
		return (
			<div className={this.props.itemBoxClass + " we-tab-item-wrap"}>
				{ this.props.aTabData.map( (item,i) => {
					let bCurrent = false;
					if(i == this.state.currentIndex) bCurrent = true;
					if(item.tabTitle === '品牌'){
						return(
							<div className={`${this.check_item_index(i)}`}>
								<div className="brand-sel-wrap">
								{
									item.tabItem.map((titem,j) => {
										let bSel = this.state.selecteditems[i+'_'+j];
										if(typeof(bSel) == "undefined"){
											bSel = false;
										}
										//if(i == this.props.currentIndex)
										{
											this.keyToNames[i+'_'+j] = titem.name;
										}
										return(
											<div onClick={ this.onClickTabItem.bind(this,j,i,item.tabTitle,titem.name,false) } className={`${this.props.itemClass} ${bSel ? "current" : ''}`}>
												<ul className="custom-equal">
													<li className="hotel-logo-pic"><span className="h-logo-pic"><img src={`/h5/dist/images/hotel/${titem.logo}`} /></span></li><li className="flex-1">{titem.name}</li>
												</ul>
											</div>
										)
									})
								}
								</div>
								<div className="sel-brand-btn"><Button className="we-button-radius20" onClick={this.onClickBtnOK.bind(this,i)}>确定</Button></div>
							</div>
							
						)
					}else if(item.tabTitle === '地铁'){
						if(item.tabItem.length === 0){
							return(
								<div className={this.check_item_index(i)}>
									<div className="search-data-wrap"><img src="/h5/dist/images/no-date-show.png" /><p className="search-nodata">暂无信息</p></div>
								</div>
							)
						}else{
							let selectedIndex = -1;
							if(i == this.props.currentIndex){
								selectedIndex = this.props.selectedIndex;
							}
							return(
								<div className={this.check_item_index(i)}>
									<DropDown currentIndex={selectedIndex} dataList={item.tabItem} itemClass={this.props.itemClass} onChangeSelected={this.onChangeSelected.bind(this)}/>
								</div>
							)
						}
						
					}else{
						if(item.tabItem.length === 0){
							return(
								<div className={this.check_item_index(i)}>
									<div className="search-data-wrap"><img src="/h5/dist/images/no-date-show.png" /><p className="search-nodata">暂无信息</p></div>
								</div>
							)
						}else{
							return (
								<div className={ this.check_item_index(i) }>
									{	item.tabItem.map( (sitem,j) => {
										if(typeof(sitem) != "undefined"){
											let bSel = this.state.selecteditems[i+'_'+j];
											if(typeof(bSel) == "undefined"){
												bSel = false;
											}											
											return (
												<div onClick={this.onClickTabItem.bind(this,j,i,item.tabTitle,sitem,true)} className={`${this.props.itemClass} ${bSel ? "current" : ''}`}>{sitem.name}</div>
											);
										}
									})
									}
								</div>
							);
						}
					}
				})}
			</div>
		);
	}
}

export default class index extends React.Component {
	constructor(props){
		super(props);
		let currentIndex = this.props.currentIndex;
		let selectedIndex = "";
		if(typeof(currentIndex) != "undefined"){
			currentIndex = strToken(this.props.currentIndex,"#",1);
			selectedIndex = strToken(this.props.currentIndex,"#",2);
		}else{
			currentIndex = "";
		}
		this.state={
			currentIndex : currentIndex,
			selectedIndex : selectedIndex
		};
		console.log(this.state);
	}
	ChangeState(newState){
		this.setState({currentIndex:newState})
	}
	onChangeSelected(indexId,name){
		console.log("onChangeSelected="+indexId+" name="+name);
		if(this.props.onChangeSelected){
			this.props.onChangeSelected(this.state.currentIndex+"#"+(name.type ? name.type : indexId),name);
		}
	}
	clearAllSelected(){
		this.setState({selectedIndex:""});
		this.refs._idTabItemd.clearAllSelected();
	}
	
	render (){
		return (
			<div className={ this.props.tabBoxClass + " we-tab-box"}>
				<TabTitle {...this.props}
					currentIndex={this.state.currentIndex}
					callbackParent = {this.ChangeState.bind(this)} />
				<TabItem {...this.props} ref= "_idTabItemd" selectedIndex={this.state.selectedIndex} currentIndex={this.state.currentIndex} onChangeSelected={this.onChangeSelected.bind(this)}/>
			</div>
		);
	}
}

index.propTypes = {
	children: React.PropTypes.string
};
