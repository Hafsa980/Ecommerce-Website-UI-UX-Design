import React, { useState, useEffect } from 'react';

const BannerWithTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endTime = new Date().setHours(24, 0, 0, 0); // Midnight countdown
      const currentTime = new Date().getTime();
      const difference = endTime - currentTime;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-with-timer my-4 text-white" style={{ background: 'black', padding: '20px', borderRadius: '10px' }}>
      <h2>Enhance Your Music Experience</h2>
      <p>Limited Time Offer!</p>
      <div className="timer d-flex justify-content-center my-3">
        <span>{timeLeft.hours}h</span> : <span>{timeLeft.minutes}m</span> : <span>{timeLeft.seconds}s</span>
      </div>
      <button className="btn btn-success">Buy Now!</button>
    </div>
  );
};

export default BannerWithTimer;
