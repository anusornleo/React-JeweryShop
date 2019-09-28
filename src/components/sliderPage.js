import React, { Component } from "react";
import "../css/components.css";
import { Carousel } from "react-bootstrap";

class SliderPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </React.Fragment>
    );
  }
}

export default SliderPage
