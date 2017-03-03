import classnames from 'classnames';
import React, { Component, PropTypes, DOM } from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';
import Button from '../Button';
import Overlay from './Overlay';
import { nextUid } from '../util/utils/strings';
import './popup.css';

import {getLang, setLang} from '../util/lang';
setLang('buttons');

const ADD_MODAL = 'id39hxqm';
const REMOVE_MODAL = 'id39i40m';
const CLICKAWAY = 'id5bok7e';
const ZINDEX = 1100;
let modals = [];
let modalContainer = null;

class ModalContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      increase: false,
      modals,
      classStyle:'',
      shadowStyle:''
    };
    this.close = this.close.bind(this);
    this.clickaway = this.clickaway.bind(this);
    this.elements = {};
  }

  componentDidMount () {
    PubSub.subscribe(ADD_MODAL, this.addModal.bind(this));

    PubSub.subscribe(REMOVE_MODAL, this.removeModal.bind(this));

    PubSub.subscribe(CLICKAWAY, () => {
      let props = modals[modals.length - 1];
      if (props.clickaway) {
          PubSub.publish(REMOVE_MODAL);
      }
    });
  }

  addModal (topic, props) {
    let isReplace = false;
    modals = modals.map((m) => {
      if (m.id === props.id) {
        isReplace = true;
        m = props;
      }
      return m;
    });
    if (!isReplace) {
      modals.push(props);
    }
    let timeout = props.timeout || 1500;
    if(props.type === 2){
      setTimeout(function(){
        this.close();
      }.bind(this),timeout);
    }
    this.setState({ modals, increase: true});
    setTimeout(function(){
      this.setState({classStyle:'fadein',shadowStyle:'active'})
    }.bind(this),50);
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
	let _this = this;
	if(props.url != ""){
		//如果URL 发生改变，Modal删除
		let timet = setInterval(function(){
			if(props.url != location.href){				
				clearInterval(timet);
				_this.close();				
			}
		}.bind(this),200);
	}
  }

  removeModal (topic, id) {
    if(modals.length < 2){
      this.setState({classStyle:'',shadowStyle:''});
    }
    let props;
    if (!id) {
      props = modals.pop();
    } else {
      modals.forEach((m, i) => {
        if (m.id === id) {
          props = modals.splice(i, 1);
        }
      });
    }
    if (!props) {
      return;
    }

    if (props.onClose) {
      props.onClose();
    }
    if(props.popup == 'center' || props.popup == 'loading' || props.popup == 'center-load'){
       this.setState({modals,increase: false});
     }else{
      setTimeout(function(){
        this.setState({modals,increase: false});
      }.bind(this),400);
     }

    if (modals.length === 0) {
      document.body.style.height = '';
      document.body.style.overflow = '';
    }
  }

  close() {
    PubSub.publish(REMOVE_MODAL);
  }

  clickaway (event) {
    if (event.target.className === 'we-popup-inner') {
      this.setState({classStyle:'',shadowStyle:''});
      event.stopPropagation();
      PubSub.publish(CLICKAWAY);
    }
  }

  renderModals () {
    let modalLength = this.state.modals.length;
    return this.state.modals.map((options, i) => {
      let style = {
        width: options.width || '90%'
      };

      let header, buttons = [];
      if (options.header) {
        header = <div className="we-pupup-header">{options.header}</div>;
      }

      if (options.buttons) {
        buttons = Object.keys(options.buttons).map((btn, j) => {
          let func = options.buttons[btn],
              status = j === 0 ? 'primary' : '',
              handle = () => {
                if (func === true) {
                  this.close();
                } else if (func === 'submit') {
                  let form = this.elements[options.id].querySelector('form');
                  if (form) {
                    let event;
                    if (CustomEvent) {
                      event = new CustomEvent('submit', { bubbles: true,	cancelable: true });
                    } else {
                      event = document.createEvent('HTMLEvents');
                      event.initEvent('submit', true, true);
                    }
                    form.dispatchEvent(event);
                  }
                } else {
                  if (func()) {
                    this.close();
                  }
                }
              };
          return <li><Button status={status} key={btn} onClick={handle}>{btn}</Button></li>;
        });
      }

      let className = classnames(
        'we-pupup',
        {
          fadein: this.state.increase && modalLength - 1 === i,
          noPadding: options.noPadding
        }
      );

      let styles,cls='';
      if(options.class){
        cls = options.class;
      }
      switch(options.popup){
        case 'popup-left':
          className = 'popup-left' + ' ' + this.state.classStyle;
          style = {bottom:options.style.bottom,zIndex: ZINDEX + i};
          styles = {top:'0',background:'none',zIndex:10000};
          break;
        case 'bottom':
          className = 'popup-bottom' + " " + this.state.classStyle;
          style = {bottom:options.style.bottom,zIndex: ZINDEX + i};
          break;
        case 'full':
          className = 'popup-full' + " " + this.state.classStyle;
          style = {bottom:options.style.bottom,zIndex: ZINDEX + i};
          styles = {top:'0',background:'none'};
          break;
        case 'center':
          className = "popup-center" + " " + this.state.classStyle;
          style = {zIndex: ZINDEX + i};
          break;
        case 'center-load':
          className = "popup-center-load" + " " + this.state.classStyle;
          style = {zIndex: ZINDEX + i};
          break;
        case 'loading':
          className = "popup-loading" + " " + this.state.classStyle+ " " + cls;
          style = {zIndex: ZINDEX + i};
          break;
        case 'top':
          className = "popup-top" + " " + this.state.classStyle;
          style = {top:options.style.top,zIndex: ZINDEX + i};
          break;
        case 'bottomshow':
          className = "popup-bottomshow" + " " + this.state.classStyle;
           style = {bottom:options.style.bottom,zIndex: ZINDEX + i};
          break;
        case 'productlist':
          className = "popup-productlist" + " " + this.state.classStyle;
           style = {top:options.style.top,zIndex: ZINDEX + i};
          break;
        default:
          break;
      }
      let closeBtn = (options.popup == 'full') ? <a className="we-popup-close" onClick={this.close.bind(this, true)}><span className="iconfont"></span></a> : '';
      let typeCls = (options.type == 2) ? "we-pupup-content tc" : "we-pupup-content";
      const clickaway = options.clickaway ? this.clickaway : undefined;
        return (
          <div ref={(el) => this.elements[options.id] = el} className="we-popup-inner" onClick={clickaway} key={options.id} style={options.noShade && {height:'auto',bottom: '5%',top: 'initial'}}>
            <div className={className} style={styles}>
              {header}
              <div className={typeCls}>
                {options.content}
              </div>
              {
                buttons.length > 0 &&
                <div className="we-pupup-footer">
                	<ul className="flex-equal">
                  {buttons}
                  </ul>
                </div>
              }
            </div>
          </div>
        );
    });
  }

  render () {
	//console.log("Modal Render");
    let mlen = this.state.modals.length,overlay;
    let className = classnames(
      'we-popup-Container',
      { active: mlen > 0 }
    );
    let style;
    this.state.modals.map((options,i) => {
      style = options.style;
      if(options.popup == 'top'){
        style = {top:style.top,zIndex: ZINDEX + mlen - 1}
      }
      if(options.popup !== 'loading'){
        overlay = <Overlay
          className={this.state.shadowStyle}
          style={style} />;
      }
    })
    return (
      <div className={className} style={style}>
        {overlay}
        { this.renderModals() }
      </div>
    );
  }
}

// static method ===============================================================

function close (id) {
  PubSub.publish(REMOVE_MODAL, id);
};

function open (options) {
  if (!modalContainer) {
    createContainer();
  }
  if (!options.id) {
    options.id = nextUid();
  }
  options.url = location.href;
  PubSub.publishSync(ADD_MODAL, options);
  return options.id;
};

function alert (content, header=<span>&nbsp;</span>) {
  let buttons = {};
  buttons[getLang('buttons.ok')] = true;

  return open({
    clickaway: false,
    content,
    header,
    buttons
  });
};

function confirm (content, callback, header=<span>&nbsp;</span>) {
  let buttons = {};

  buttons[getLang('buttons.ok')] = () => {
    callback();
    return true;
  };
  buttons[getLang('buttons.cancel')] = true;

  return open({
    clickaway: false,
    content,
    header,
    buttons
  });
};

function createContainer () {
  modalContainer = document.createElement('div');
  document.body.appendChild(modalContainer);
  ReactDOM.render(<ModalContainer />, modalContainer);
}

class index extends Component {
  constructor (props) {
    super(props);
    this.id = nextUid();
  }

  componentDidMount () {
    if (this.props.isOpen) {
      this.renderModal(this.props);
    }
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.isOpen && !this.props.isOpen) {
      return;
    }

    if (newProps.isOpen) {
      this.renderModal(newProps);
    } else {
      close();
    }
  }

  renderModal (props) {
    open({
      id: this.id,
      content: props.children,
      ...props
    });
  }

  render () {
    return DOM.noscript();
  }
}

index.propTypes = {
  buttons: PropTypes.object,
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  noPadding: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  width: PropTypes.number
};

index.open = open;
index.alert = alert;
index.confirm = confirm;
index.close = close;

module.exports = index;
