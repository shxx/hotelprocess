import React from 'react';
import ReactDom from 'react-dom';
import FormControl from './FormControl';
import Regs from '../utils/regs';

class Input extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		value : this.props.value,
		bClear : true
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
  }
  handleBlur(e){
  	setTimeout(function(){
  		this.setState({bClear:true});
  	}.bind(this),20)
  }
  clearHandler(e){
  	this.setState({value:''});
  }
  render() {
	var label,delIcon,rightCon;
	if(this.props.label){
		label = <div className="we-input-label">{this.props.label}</div>
	}

	if(this.props['data-clear'] && !!this.state.value){
		delIcon = <div className="we-input-clear iconfont icon-iconwc" onClick={this.clearHandler.bind(this)}></div>
	}

	if(this.props['data-extra']){
		rightCon = <div className="we-input-right"><span className="we-right-text">{this.props.extra}</span></div>
	}
	const props = {
		onFocus : this.handlerFocus.bind(this),
		onBlur : this.handleBlur.bind(this),
		onChange : this.handleChange.bind(this),
		type : this.props.type === 'password' ? 'password' : 'text',
		value : this.state.value
	}
	if(this.props.type == 'textarea'){
		return(
			<div className="we-input-Item">
				<div className="we-input-control">
					<textarea className="we-input-cls" ref="input" {...this.props} {...props} />
				</div>
				{delIcon}
			</div>
		)
	}else{
		return(
			<div className={this.state.bClear ? "we-input-Item" : "we-input-Item we-input-focus"}>
			{label}
			<div className="we-input-control">
				<input ref="input" className="we-input-cls" {...this.props} {...props} />
			</div>
			{delIcon}
			{rightCon}
		  </div>
		)
	}
  }
}


console.log(FormControl.register);

FormControl.register(
 ['text', 'email', 'alpha', 'alphanum', 'password', 'url', 'textarea'],
  function (props) {
    return <Input {...props} />;
  },Input);

FormControl.register(
  ['integer', 'number'],
  function (props) {
    return <Input {...props} />;
  },
  Input,
  'number'

);

module.exports = Input;