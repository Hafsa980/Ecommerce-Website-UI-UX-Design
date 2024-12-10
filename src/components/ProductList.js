import React from 'react';
import ProductCard from './ProductCard';
import dog from '../images/drydog.jpg';
import camera from '../images/camera.png';
import laptop from '../images/laptop.png';
import cosmetics from '../images/cosmetics.png';
import electriccar from '../images/electriccar.png';
import soccer from '../images/soccer.png';
import gamepad from '../images/gamepad.png';
import jacket from '../images/jacket.png';

const ProductList = () => {
  const products = [
    { image: dog, title: 'Bread Dry Dog Food', price: '$100', discount: '$120', rating: 4.6 },
    { image: camera, title: 'Canon EOS DSLR Camera', price: '$500', discount: '$550', rating: 4.9 },
    { image: laptop, title: 'ASUS Pro Gaming Laptop', price: '$700', discount: '$750', rating: 4.8 },
    { image: cosmetics, title: 'Cosmetics Product Set', price: '$200', discount: '$220', rating: 4.7 },
    { image: electriccar, title: 'Kids Electric Car', price: '$300', discount: '$350', rating: 4.5 },
    { image: soccer, title: 'JR Zoom Soccer Cleats', price: '$110', discount: '$120', rating: 4.6 },
    { image: gamepad, title: 'HAVIT Wireless Gamepad', price: '$50', discount: '$60', rating: 4.4 },
    { image: jacket, title: 'Quilted Bomber Jacket', price: '$200', discount: '$220', rating: 4.5 },
  ];

  return (
    <section className="product-list my-5">
      <h2 className="text-center">Explore Our Products</h2>
      <div className="d-flex justify-content-between align-items-center my-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="text-center my-3">
        <button className="btn btn-primary">View All Products</button>
      </div>
    </section>
  );
};

export default ProductList;
