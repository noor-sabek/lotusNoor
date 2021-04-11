import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './../Carousel/Carousel.js';
import LiTitle from './LiTitle.js';
import CatNavData from './CatNavData.js';
import TabContent from './tabContent.js';
import img1 from '../../../../img/mon3.jpg';
import img2 from '../../../../img/w1.jpg';
import img3 from '../../../../img/rockingstacker.png';
import './homeContent.css';


class ULTITLE extends React.Component {

  render() {
    const ULTITLE = CatNavData.map((jsonpart) =>(
        <LiTitle item={jsonpart} />));
  return (
           <ul className="nav nav-tabs col-12 Categories text-center" role="tablist">{ULTITLE}</ul>

      );
  }
}


class Content extends React.Component{
      render(){
        const JsonContent = CatNavData.map((jsonpart) =>(
            <TabContent item={jsonpart}/>));
            return (
               <div className="tab-content ">{JsonContent}</div>
          );
  }
}


class MontiToys extends React.Component {
  render(){
    return (

      <div className="container  text-center mb-5">

        <h1 className=" Getoptions text-center"> 𝔾𝕖𝕥 𝕄𝕠𝕣𝕖 𝕆𝕡𝕥𝕚𝕠𝕟𝕤 </h1>
        <ul className="nav nav-tabs Categories text-center" role="tablist">
          <li className="nav-item">
            <a className="nav-link  " data-toggle="tab" href="#Monti-Toys"><b>Monti-Toys</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Why-Montossori"><b>Why-Montossori</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#PARENT"><b>PARENT</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Activities"><b>Activities</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link " data-toggle="tab" href="#Gallery"><b>Gallery</b></a>
          </li>
        </ul>


        <div className="tab-content ">
          <div id="Monti-Toys" className=" tab-pane fade mt-5 ">
                <h3>Select Your Child's Age</h3>
              <div className="container">
                    <ULTITLE/>
                    <Content/>

             </div>
          </div>
          <div id="Why-Montossori" className="col-10 tab-pane fade mt-5">
            <h3>Why Montossori</h3>
            <p> Maria Montessori is as controversial a figure in education today as she was a half century ago. Alternately heralded as the century’s leading advocate for early childhood education, or dismissed as outdated and irrelevant, her research and the studies that she inspired helped change the course of education.</p>
          </div>
          <div id="PARENT" className="col-10 tab-pane fade mt-5">
            <h3>PARENT</h3>
            <p>hello parent and welcome to my website </p>
          </div>
          <div id="Activities" className="col-10 tab-pane fade mt-5">
            <h3>Activities</h3>
            <p>hello parent and welcome to my website </p>
          </div>

          <div id="Gallery" className="col-10 tab-pane fade mt-5">
             <div id="toyslist"></div>
           <h3>Gallery</h3>
              <p>hello parent and welcome to my website<br></br>
                   <img className="toypic" src={img1}></img>
                   <img className="toypic" src={img2}></img>
                   <img className="toypic" src={img3} ></img>
               </p>
          </div>
        </div>
      </div>


      );
  }
}


class HomeContent extends React.Component {
  render() {
    return (
      <>
      <Carousel/>
      <MontiToys/>


      </>
    );
  }
}
export default HomeContent;
