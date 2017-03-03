import React from 'react';
import './input.css';

export default class Input extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    value : this.props.value,
    bClear : true,
	bFocus : false
  };
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setValue(nextProps.value);
    }
  }
  getValue () {
    return this.refs.input.value;
  }

  setValue (value) {
    this.setState({ value });
  }
  
  isFocused(){
	  return this.state.bFocus;
  }

  handleChange(e) {
    if(this.props.readOnly){
      return;
    }
    let value = e.target.value;

    if (value && (this.props.type === 'integer' || this.props.type === 'number')) {
      if (!Regs[this.props.type].test(value)) {
        value = this.state.value || '';
      }
    }

    this.setState({value: value,bClear:false});
  setTimeout(() => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }, 0);
  }
  handlerFocus(e){
    if(!!this.state.value){
      this.setState({bClear:false})
    }
	this.setState({bFocus:true});
  if (this.props.onFocus) {
      this.props.onFocus();
    }
  }
  handleBlur(e){
	  this.setState({bFocus:false});
	  if (this.props.onBlur) {
			this.props.onBlur();
    }
      setTimeout(function(){
		this.setState({bClear:true});	    
    }.bind(this),500)
  }
  clearHandler(e){
    this.setState({value:''});
	//console.log("clearHandler");
    this.props.onChange('',this.refs.input.name);
    if(this.props.clearCallback){
      this.props.clearCallback();
    }
  }
  render() {
  var label,delIcon,rightCon,leftIcon,icon;
  if(this.props.label){
    label = <div className="we-input-label">{this.props.label}</div>
  }
  if(this.props['data-leftIcon']){
    icon = "we-left-icon iconfont icon-" + this.props['data-leftIcon'];
    leftIcon = <div className={icon}></div>;
  }
  if(this.props['data-clear'] && !!this.state.value){
    delIcon = <div className="we-input-clear iconfont icon-icondelete" onClick={this.clearHandler.bind(this)}></div>
  }
  let rightType = typeof this.props['data-extra'];
  if( rightType == 'string'){
    rightCon = <div className="we-input-right"><span className="we-right-text" onClick={this.props['data-rightClick']}>{this.props['data-extra']}</span></div>
  }else if(rightType == 'object'){
    rightCon = <div className="we-input-right"><span onClick={this.props['data-rightClick']}>{this.props['data-extra']}</span></div>
  }

  let inpuCls = this.props['data-nob'] ? 'we-input-Item noborder' : 'we-input-Item we-line';
  const props = {
    onFocus : this.handlerFocus.bind(this),
    onBlur : this.handleBlur.bind(this),
    onChange : this.handleChange.bind(this),
    type : this.props.type === 'password' ? 'password' : 'text',
    value : this.state.value
  }
  if(this.props.type == 'textarea'){
    return(
      <div className={inpuCls}>
        <div className="we-input-control">
          <textarea className="we-input-cls" ref="input" {...this.props} {...props} />
        </div>
        {delIcon}
      </div>
    )
  }else{
    return(
      <div className={this.state.bClear ? "we-input-Item we-line" : "we-input-Item we-line we-input-focus"}>
      {label}
      {leftIcon}
      <div className="we-input-control">
        <input ref="input" className="we-input-cls" {...this.props} {...props}/>
      </div>
      <div className={`we-input-clear iconfont ${this.props['data-clear'] && !!this.state.value ? "icon-icondelete" : ""}`} onClick={this.clearHandler.bind(this)}></div>
      {rightCon}
      </div>
    )
  }
  }
}