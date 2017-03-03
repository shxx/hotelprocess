import React from 'react';
import DropDownList from './DropDownList'
import './DropDown.css';
import {strToken} from '../util/utils/strings';

export default class index extends React.Component {
	constructor(props){
		super(props);
		let currentIndex = -1;
		let selectedIndex = -1;
		if(typeof(this.props.currentIndex) != "undefined") {
			currentIndex = strToken(this.props.currentIndex,":",1);
			selectedIndex = strToken(this.props.currentIndex,":",2);
			if(currentIndex == "") currentIndex = -1;
			if(selectedIndex == "") selectedIndex = -1;
		}		
		this.state = {
			currentIndex: currentIndex,
			selectedIndex: selectedIndex
		};
		this.preopenobj = null;
		//console.log("DropDown Info");
		//console.log(this.state);
	}
	changeHandle(idIndex) {
		if(this.state.currentIndex != idIndex){
			this.setState({selectedIndex:-1});
		}
		this.setState({currentIndex:idIndex});
	}
	onChangeSelected(mainIndex,subIndex,name){
		//console.log("onChangeSelected mainIndex="+mainIndex+" subIndex="+subIndex+" name="+name);
		if(this.props.onChangeSelected){
			this.props.onChangeSelected(mainIndex+":"+subIndex,name);
		}		
	}
	render (){
		return (
			<div className="sel-metro">
				{this.props.dataList.map( (item,i) => {
					let openstate = false;
					let selectedIndex = -1;
					if(i == this.state.currentIndex) {
						openstate = true;
						selectedIndex = this.state.selectedIndex;
					}
					return (
						<DropDownList idIndex={i} selectedIndex={selectedIndex} bOpenState={openstate} btnData={item.tabTitle} menuData={item.tabItem} btnClass={this.props.itemClass} menuClass={this.props.itemClass} openClass="we-open-dropdown" onChageHandle={this.changeHandle.bind(this)} onChangeSelected={this.onChangeSelected.bind(this)}/>
					)
				})}
			</div>
		)
	}
}