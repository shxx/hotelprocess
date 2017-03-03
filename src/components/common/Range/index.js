import React, { Component, PropTypes } from 'react';

class PriceRange extends Component {
  constructor (props) {
    super(props);
    this.state = {}
    this.state.left = 0
    this.state.right = 0

    let options = this.props.rangeJson;
    this.priceArr = []
    let min = options.min;
    this.priceArr.push('¥'+min)
    for (var i = 0; i < options.len; i++) {
      min += options.interval
      this.priceArr.push('¥'+min)
    }
    options.max < 99999 ? this.priceArr.push(options.max) : this.priceArr.push('不限')

  }

  componentDidMount () {
    this.range()
  }

  range(ev) {

    let _this = this;
    let oPriceBox = this.refs.priceBox,
        oBar1 = this.refs.bar1,
        oBar2 = this.refs.bar2,
        lumpLeft = this.refs.lumpLeft,
        lumpRight = this.refs.lumpRight;

    let x1=0,x2=0;
    let num = this.priceArr.length - 1;


    let setRange = (x,name) => {

      let v = Math.round(x/oPriceBox.offsetWidth*num);
      let s = {}
      s[name] = v
      _this.setState(s);
      return v;
    }


    lumpLeft.addEventListener('touchstart',function(ev){
        let downX = oPriceBox.offsetLeft;
        let oPriceBoxWidth = oPriceBox.offsetWidth/num;
        function fnMove(ev){
          x1 = ev.targetTouches[0].pageX - downX;
          if (x1 < 0) {
            x1 = 0;
          }else if(x1 > oPriceBox.offsetWidth + x2 - oPriceBoxWidth){
            x1 = oPriceBox.offsetWidth + x2 - oPriceBoxWidth
          }
          setRange(x1,'left')
          this.style.left = x1 + 'px'
          oBar1.style.width = x1 + 'px'
          ev.preventDefault();
        }

        function fnEnd(ev){
          let vl = setRange(x1,'left')
          x1 = vl*oPriceBoxWidth;
          _this.props.setPrice(_this.priceArr[vl])

          this.style.left = x1 + 'px'
          oBar1.style.width = x1 + 'px'
          this.removeEventListener('touchmove',fnMove,false);
          this.removeEventListener('touchend',fnEnd,false);
        }


        this.addEventListener('touchmove',fnMove,false);
        this.addEventListener('touchend',fnEnd,false);
                  

    },false);
      
    lumpRight.addEventListener('touchstart',function(ev){
        let downX = oPriceBox.offsetWidth + oPriceBox.offsetLeft;
        let oPriceBoxWidth = oPriceBox.offsetWidth/num;
        function fnMove(ev){
          x2 = ev.targetTouches[0].pageX - downX;
          if (x2 > 0) {
            x2 = 0
          }else if(x2 < -oPriceBox.offsetWidth + x1 + oPriceBoxWidth){
            x2 = -oPriceBox.offsetWidth + x1 + oPriceBoxWidth
          }
          setRange(x2,'right')
          this.style.right = -x2 + 'px'
          oBar2.style.width = -x2 + 'px'
          ev.preventDefault();
        }

        function fnEnd(ev){
          let vr = setRange(x2,'right');
          x2 = vr*oPriceBoxWidth;
          _this.props.setPrice('',_this.priceArr[num+vr])
          this.style.right = -x2 + 'px'
          oBar2.style.width = -x2 + 'px'
          this.removeEventListener('touchmove',fnMove,false);
          this.removeEventListener('touchend',fnEnd,false);
        }


        this.addEventListener('touchmove',fnMove,false);
        this.addEventListener('touchend',fnEnd,false);
                  

    },false);
      
  }
  render(){

    var _this = this;

    let poi = () => {

      let l = _this.state.left,
          r = _this.state.right,
          s = '',
          priceArr = _this.priceArr,
          z = priceArr.length-1;

      if (l == 0 && r == 0) {
        s =  priceArr[z]
      }else if(l == 0 && r < 0){
        s =  priceArr[z+r] + '以下'
      }else if (l > 0 && r == 0) {
        s =  priceArr[l] + '以上'
      }else{
        s =  priceArr[l] + ' - ' +  priceArr[z+r]
      }

      return s;

    }

    return (

      <div className="price-range" style={{padding:'0 .5rem'}}>
        <div className="til clearfix">
          <div className="fl" style={{color:'#3c3c3c',fontSize:'1.4rem'}}>价格</div>
          <div className="fr">{ poi() }</div>
        </div>
        <ul className="price-box">
          {

            _this.priceArr.map(function(n,i) {
              if (_this.priceArr.length == i+1) {
                return <li className='last'><span>{n}</span></li>
              }else{
                return <li><span>{n}</span></li>
              }
            })
          }
          
        </ul>
        <div className="range-box" ref='priceBox'>
          <div className='bar' ref='bar1' style={{left:0}}></div>
          <div className='bar' ref='bar2' style={{right:0}}></div>
          <div className="lump" ref='lumpLeft'>
              <span><i></i></span>
          </div>
          <div className="lump" ref='lumpRight'>
              <span><i></i></span>
          </div>
        </div>
      </div>

    )

  }



}

module.exports = PriceRange;

