import React from 'react';
import { Carousel } from 'react-bootstrap';
import iphone from '../images/iphone.jpg';

const Banner = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={iphone} // Replace with real image URL
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Up to 10% off Voucher</h3>
        <p>Shop Now!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Banner;
