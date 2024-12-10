import React from 'react';
import ProductCard from './ProductCard';
import northcoat from '../images/northcoat.png';
import guccibag from '../images/guccibag.png';
import cpucooler from '../images/cpucooler.png';
import bookshelf from '../images/bookshelf.png';

const BestSellingProducts = () => {
  const products = [
    { image: northcoat, title: 'The North Coat', price: '$280', discount: '$300', rating: 4.5 },
    { image: guccibag, title: 'Gucci Duffle Bag', price: '$180', discount: '$190', rating: 4.8 },
    { image: cpucooler, title: 'RGB Liquid CPU Cooler', price: '$70', discount: '$80', rating: 4.7 },
    { image: bookshelf, title: 'Small Bookshelf', price: '$60', discount: '$65', rating: 4.6 },
  ];

  return (
    <section className="best-selling-products my-4">
      <h2>This Month's Best Selling Products</h2>
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
      <div className="text-center">
        <button className="btn btn-primary">View All</button>
      </div>
    </section>
  );
};

export default BestSellingProducts;
