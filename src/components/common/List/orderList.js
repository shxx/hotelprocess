import React from 'react';
import './orderList.css';
import {browserHistory,Link} from 'react-router';

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
  }
  dateTransform(str){
      let arr = str.split('-');
      arr.shift()
      return arr.join('/')
  }
  toPay(data){
        /*console.log(data)*/
        browserHistory.push("/h5/app/payment?orderNo="+data.jrezOrderNo + "&iata=" + data.iata)
       
    }
  payBtn(){
      if(this.props.data.mixOrderStatus == '待支付'){
          return (
              <div className="action fr">
                  <span className="hint">{this.props.data.latestPaymentTime}</span>
                  <span className="btn" onClick={this.toPay.bind(this,this.props.data)}>支付</span>
              </div>
          );
      }else{
          return
      }
  }
  render() {
    /*console.log(this.props.data)*/
    
    return (

           <li className="list">
               <Link to={'/h5/app/order/detail/' + this.props.data.jrezOrderNo + '/' + this.props.data.iata} data-saname="order_list_detail">
                  <div className="hotel-name">{this.props.data.hotelName} <span className={`tip ${this.props.data.mixOrderStatus == '已取消' ? 'gray' : ''}`}>{this.props.data.mixOrderStatus}</span></div>

                  {
                    this.props.data.ratePromotionType == 'RBT11' ?

                    <div className="hotel-info">{this.props.data.checkOut && this.dateTransform(this.props.data.checkOut)}—{this.props.data.checkOut && this.dateTransform(this.props.data.checkOut)}  {this.props.data.roomNum}间  <span style={{color:'#4c9ff4'}}>凌晨房</span> </div>
                    :
                    <div className="hotel-info">{this.props.data.checkin && this.dateTransform(this.props.data.checkin)}—{this.props.data.checkOut && this.dateTransform(this.props.data.checkOut)}     {this.props.data.nightNum}晚  {this.props.data.roomNum}间</div>
                  }
                  
               </Link>
               <div className="list-foot clearfix">
                  <div className="total fl">总价：<span>¥{this.props.data.price}</span></div>
                    {
                        this.props.data.canPay
                        ?
                            (<div className="action fr">
                                {(this.props.data.latestPaymentTime && this.props.data.orderType != "PAYMENTING") ? <span className="hint">{this.props.data.latestPaymentTime}</span> : ''}                   
                                <span className="btn" onClick={this.toPay.bind(this,this.props.data)} data-saname={(this.props.data.orderType != "PAYMENTING") ? "order_list_pay" : "cash_to_prepay_list"}>
                                支付</span>
                            </div>)
                        : ''
                    }
                </div>
            </li>

    );
  }
}