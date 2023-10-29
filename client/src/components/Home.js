import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {


  return (
    <div className="home-container">
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="../images/banner1.jpg" class="d-block w-100" alt="..." style={{ height: '400px',objectFit: 'contain'}}/>
    </div>
    <div class="carousel-item">
    <img src="../images/donate.jpg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'contain' }} />

    </div>
    <div class="carousel-item">
      <img src="../images/dog.jpg" class="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'contain' }}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      <section id="vision" className="section vision-section">
      <div className="vision-content">
          <div className="image-container">
            <img src="../images/vision.jpg" alt="Vision Image" />
          </div>
          <div className="text-container">
            <h2>Vision</h2>
            <p>Creating a compassionate world where individuals and businesses come together to support diverse causes, spanning from vulnerable communities to animals in need. Our platform leverages technology to enable convenient and transparent giving, fostering connections and trust among contributors and beneficiaries. We aspire to empower donors to make a meaningful impact aligned with their personal convictions, transforming the lives of those in need.</p>
          </div>
        </div>
        {/* Your Vision content */}
      </section>

      <section id="impact" className="section">
        <h2>Impact</h2>
        {/* Your Impact content */}
      </section>

      <section id="events" className="section">
        <h2>Latest Events and Campaigns</h2>
        {/* Your Events content */}
      </section>

      <section id="team" className="section">
        <h2>Our Team</h2>
        {/* Your Team content */}
      </section>
    </div>
  );
};

export default Home;
