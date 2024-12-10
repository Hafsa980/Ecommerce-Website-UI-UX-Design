import React from 'react';
import playstation from '../images/playstation.png';
import womencollection from '../images/womencollection.jpg';
import speaker from '../images/speaker.png';
import perfume from '../images/perfume.png';

const NewArrival = () => {
  const arrivals = [
    {
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      image: playstation, // Replace with actual image URL
      link: '/shop-now',
    },
    {
      title: 'Women’s Collections',
      description: 'Featured woman collections that give you another vibe.',
      image: womencollection, // Replace with actual image URL
      link: '/shop-now',
    },
    {
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      image: speaker, // Replace with actual image URL
      link: '/shop-now',
    },
    {
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      image: perfume, // Replace with actual image URL
      link: '/shop-now',
    },
  ];

  return (
    <section className="new-arrival my-5">
      <h2 className="text-center">New Arrival</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {arrivals.map((item, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img
              src={item.image}
              className="card-img-top"
              alt={item.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <a href={item.link} className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
