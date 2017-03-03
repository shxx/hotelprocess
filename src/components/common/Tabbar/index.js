import React from 'react';
import {Link} from 'react-router';
import Icon from '../Icon';
import './tabbar.css'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let iconCls,iType,eLi=[];
    this.props.data.map((nav,i) => {
      iType = nav.curIcon;
      iconCls = '';
      if(location.pathname == nav.path){
        iconCls = 'selected';
        iType = nav.selIcon;
      }
      eLi.push(<li key={i} className={iconCls} data-saname={nav.saName}><Link to={nav.path}><span><Icon type={iType} /></span><span>{nav.title}</span></Link></li>);
    })
    return (
      <div className="wehotel-tabnavr">
        <ul className="flex-equal">
        {eLi}
        </ul>
      </div>
    );
  }
}