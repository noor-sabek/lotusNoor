import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './../Carousel/Carousel.js';
import MontiToys from './../monti-toys/MontiToys.js';
import './homeContent.css';




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
