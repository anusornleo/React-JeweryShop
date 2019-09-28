import React, { Component } from "react";
import Navbar from "../components/navbar";
import ImgSliderHeader from "../components/imgSliderHeader";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ImgSliderHeader />
        <div className="container"></div>
      </React.Fragment>
    );
  }
}

export default Home;
