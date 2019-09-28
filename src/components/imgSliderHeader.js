import React, { Component } from "react";
import "../css/components.css";
import SlidePage from "./sliderPage";
import { Carousel } from "react-bootstrap";

const items = [
  {
    src: "https://source.unsplash.com/RCAhiGJsUUE/1920x1080",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: "https://source.unsplash.com/RCAhiGJsUUE/1920x1080",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: "https://source.unsplash.com/RCAhiGJsUUE/1920x1080",
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src: "https://source.unsplash.com/RCAhiGJsUUE/1920x1080",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class ImgSliderHeader extends Component {
  render() {
    const slides = items.map(item => {
      return (
        <Carousel.Item>
          <img className="d-block w-100" src={item.src} alt="First slide" />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return (
      <header>
        <Carousel>
          {slides}
        </Carousel>
      </header>
    );
  }
}

export default ImgSliderHeader;
