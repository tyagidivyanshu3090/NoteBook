import React from "react";
// import "./About.css"; // Make sure to create and import this CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-intro">
        Welcome to <strong>TastyBites</strong>! We are passionate about serving
        fresh, delicious, and authentic food that makes you feel at home.
      </p>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, TastyBites started with a mission to bring
          mouth-watering dishes from around the world to your neighborhood. Our
          chefs carefully craft each recipe using locally sourced and
          high-quality ingredients to deliver a unique dining experience.
        </p>
      </section>

      <section className="about-section">
        <h2>What Makes Us Special?</h2>
        <ul>
          <li>Fresh and locally sourced ingredients</li>
          <li>Expert chefs with a passion for cooking</li>
          <li>Warm and inviting atmosphere</li>
          <li>Commitment to customer satisfaction</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Visit Us</h2>
        <p>
          Whether you're dining in or ordering online, we promise to make every
          meal memorable. We look forward to serving you soon!
        </p>
      </section>
    </div>
  );
};

export default About;
