import React from 'react';

export default class DropDownList extends React.Component {
  constructor(props) {
    super(props);
	let selecteitems = [];
	if(typeof(this.props.selectedIndex) != "undefined"){
		 selecteitems[this.props.selectedIndex] = true;
	 }
    this.state = {
    	bOpen: this.props.bOpenState,
		selecteditems:selecteitems
     }
	 
  }
  ChangeOpenState (e){
  	//this.props.onChageHandle(this);
	this.props.onChageHandle(this.props.idIndex);
	this.setState({
		bOpen: !this.state.bOpen
	});
  }
  onClickHandle(i,name) {
  	let allItems = this.state.selecteditems;
	let bselected = allItems[i]; 
	if(typeof(bselected) == "undefined"){
		allItems[i] = true;
	}else{
		allItems[i] = !allItems[i];
	}
	this.setState({selecteditems:allItems});
	if(this.props.onChangeSelected){
		this.props.onChangeSelected(this.props.idIndex,i,name);
	}
  }
  close() {
  	if(this.state.bOpen == false) return;
  	this.setState({
		bOpen: false
	});
  }

  render() {
  	let sOpenState,pClas;
  	let bOpend = this.state.bOpen;
  	sOpenState = bOpend ? "" : this.props.openClass;
	return (
		<div className={`sel-more-list ${bOpend ? 'more-active' : ''}`}>
			<div onClick={this.ChangeOpenState.bind(this)}
				data-bOpenState={bOpend}
				className={this.props.btnClass}
				>{this.props.btnData}</div>
			<div className={`metro-list ${sOpenState}`}>
				{this.props.menuData.map( (item,i) => {
					let bSel = this.state.selecteditems[i];
					if(typeof(bSel) == "undefined"){
						bSel = false;
					}
					return (
						<div className={`${this.props.menuClass} ${bSel ? "current" : ''}`} onClick={this.onClickHandle.bind(this,i,item)}>{item.name}</div>
					)
				})}
			</div>
		</div>
	);
  }
}
