import React from 'react';
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Categories = () => {
  const categories = [
    { name: 'Phones', icon: <FaMobileAlt /> },
    { name: 'Computers', icon: <FaLaptop /> },
    { name: 'SmartWatch', icon: <FaTabletAlt /> },
    { name: 'Camera', icon: <FaCamera /> },
    { name: 'Headphones', icon: <FaHeadphones /> },
    { name: 'Gaming', icon: <FaGamepad /> },
  ];

  return (
    <section className="categories my-4">
      <h2>Browse By Category</h2>
      <div className="d-flex justify-content-between align-items-center my-3">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="outline-danger"
            className="category-btn mx-2"
            style={{ width: '100px', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            {category.icon}
            <span style={{ marginTop: '10px', fontSize: '14px' }}>{category.name}</span>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
