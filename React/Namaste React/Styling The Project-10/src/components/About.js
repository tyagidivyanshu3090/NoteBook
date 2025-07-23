import React from "react";
// import "./About.css"; // Make sure to create and import this CSS file
import UserClass from "./UserClass";
const About = () => {
  const identity = {
    name: "Divyanshu",
    location: "Delhi",
    contact: "@Divyanshu422 on Twitter",
    bio: "A passionate web developer with a love for creating interactive applications.",
  };
  return (
    <div className="about-container">
      <UserClass data={identity} />
    </div>
  );
};

export default About;
