import React from 'react';
import ReactDOM from 'react-dom';

import LiTitle from '../../../general/fillNavTap/LiTitle.js';
import ULTITLE from'../../../general/fillNavTap/ULTitle.js';
import FillTabContent from '../HomeContent/fillTabContent.js';
import TitleHeading from '../HomeContent/TitleHeading.js';
import TabContent from '../HomeContent/tabContent.js';
import CatNavData from '../HomeContent/CatNavData.js';



class MontiToys extends React.Component {
  render(){
    return (

      <div className="container  text-center mb-5">

        <h1 className=" Getoptions text-center"> 𝔾𝕖𝕥 𝕄𝕠𝕣𝕖 𝕆𝕡𝕥𝕚𝕠𝕟𝕤 </h1>
        <ULTITLE myjson={TitleHeading}/>

        <div className="tab-content ">
          <div id="Monti-Toys" className=" col-10 tab-pane fade mt-5 ">
              <h3>Select Your Child's Age</h3>
              <div className="container">
                    <ULTITLE myjson={CatNavData}/>
                    <FillTabContent myjson={CatNavData} />
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
              <p>hello parent and welcome to my website </p>
          </div>
        </div>
      </div>


      );
  }
}
export default MontiToys;
