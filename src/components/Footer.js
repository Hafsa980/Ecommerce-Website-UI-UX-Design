import React from 'react';
import appstore from '../images/appstore.png';
import playstore from '../images/googleplay.png';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Exclusive</h5>
            <p>Get 10% off your first order</p>
            <form>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Your email"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms of Use</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fs-6">Download App</h5> {/* Bootstrap's `fs-6` makes the font smaller */}
            <img
              src={appstore} // Replace with app store icon
              alt="App Store"
              className="img-fluid mb-2" // Bootstrap `img-fluid` ensures responsiveness, `mb-2` adds spacing
              style={{ maxWidth: '100px' }} // Inline style for size control
            />
            <img
              src={playstore} // Replace with play store icon
              alt="Play Store"
              className="img-fluid" // Ensures responsiveness
              style={{ maxWidth: '100px' }} // Inline style for size control
            />
          </div>

        </div>
        <div className="text-center mt-4">
          <small>© Copyright 2024, All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
