import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../general/menu/navBar.js';
import './logo.css';
import logo from '../../../img/LOGO-RAINBOW.png';


class LogoPic extends React.Component {
  render() {
    return (
      <div>
              <a className="navbar-brand " href="/home">
                <img className=" logo rounded" src={logo}></img>
              </a>

      </div>


    );
  }
}
export default LogoPic;
