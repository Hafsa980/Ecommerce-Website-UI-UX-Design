import React from 'react';
import ProductCard from './ProductCard';
import gamepad from '../images/gamepad.png';
import keyboard from '../images/keyboard.png';
import monitor from '../images/monitor.png';
import chair from '../images/chair.png';

const FlashSales = () => (
  <section className="flash-sales my-4">
    <h2>Flash Sales</h2>
    <div className="d-flex justify-content-between align-items-center">
      <p>Ends in: <span>03:23:56</span></p>
    </div>
    <div className="row">
      <ProductCard title="Gamepad" price="$20" image={gamepad} />
      <ProductCard title="Keyboard" price="$50" image={keyboard} />
      <ProductCard title="Monitor" price="$200" image={monitor} />
      <ProductCard title="Chair" price="$80" image={chair} />
    </div>
  </section>
);

export default FlashSales;
