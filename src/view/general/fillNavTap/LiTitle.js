import React from 'react';
import ReactDOM from 'react-dom';



class LiTitle extends React.Component {
  constructor(props){
     super(props);
  }

  render() {
   return (

     <li className="nav-item">
       <a className="nav-link " data-toggle="tab" href={this.props.item.url}><b>{this.props.item.title}</b></a>
     </li>
   );
 }
}


export default LiTitle;
