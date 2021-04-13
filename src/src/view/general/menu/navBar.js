import React from 'react';
import ReactDOM from 'react-dom';
import {MenuItems} from './menuItems.js';
import './navBar.css' ;
import ListItems from './listItems.js';
import Search from '../search/search.js';
import LogoPic from '../logo/logo.js';


class NavBar extends React.Component {
  render() {
   return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top ">

            <LogoPic/>

              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse">
              <ListItems/>
            </div>

            <Search/>

        </nav>



        //
        //  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        //     <!-- Brand/logo -->
        //     <a class="navbar-brand " href="index.html">
        //     <img class="rounded-circle logo" src="img\preg2.png">
        //     </a>
        //     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        //       <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <!-- Links -->
        //     <div class="collapse navbar-collapse" id="collapsibleNavbar">
        //        <ul class="navbar-nav col-lg-10">
        //          <li class="nav-item">
        //            <a class="nav-link" href="#"><i class="fa fa-home icon"></i> Home</a>
        //          </li>
        //           <li class="nav-item dropdown">
        //             <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i class="fa fa-book icon" ></i> Articles</a>
        //             <div class="dropdown-menu">
        //                 <a class="dropdown-item" href="#">children</a>
        //                 <a class="dropdown-item" href="#">parent</a>
        //                 <a class="dropdown-item" href="#">friends</a>
        //             </div>
        //           </li>
        //
        //           <li class="nav-item">
        //             <a class="nav-link" href="contactUs.html"><i class="fa fa-comments-o icon"></i> Contact Us </a>
        //           </li>
        //           <li class="nav-item">
        //             <a class="nav-link" href="myPassion.html"><i class="fa fa-lightbulb-o icon"></i> My Passion </a>
        //           </li>
        //           <li class="nav-item">
        //             <a class="nav-link" href="login.html"><i class="fa fa-user icon"></i> log in</a>
        //           </li>
        //
        //         </ul>
        //       <div class="float-right">
        //         <form class="form-inline  col-2 justify-content-right" action="/action_page.php">
        //         <input class="form-control " type="text" placeholder="&#128269;">
        //         </form>
        //       </div>
        //
        //    </div>
        // </nav>
      );
  }
}


export default NavBar;
