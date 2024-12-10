import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ image, title, price, discount, rating }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={image}
          alt={title}
          className="card-img-top" // Bootstrap classes for responsiveness
          style={{ height: '200px', objectFit: 'cover' }} // Fix height and cropping
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">Price: {price}</p>
          {discount && <p className="card-text text-success">Discount: {discount}</p>}
          {rating && <p className="card-text">Rating: {rating}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
