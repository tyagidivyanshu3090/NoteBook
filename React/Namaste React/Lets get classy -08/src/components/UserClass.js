import React, { Component } from "react";
import "./UserCard.css"; // Link to external CSS

class UserClass extends Component {
  // The constructor is optional if you're not using state or binding methods,
  // but it's good practice to include it if you're explicitly dealing with props here.
  constructor(props) {
    super(props); // IMPORTANT: Always call super(props) in the constructor
    // This ensures 'this.props' is initialized before your constructor code runs.
    console.log("Props in constructor:", this.props); // You can access them here
  }
  render() {
    // Destructuring props for easier access: form this.props.data
    const { name, location, contact, bio } = this.props.data;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:{contact}</h4>
        <p>Bio:{bio}</p>
      </div>
    );
  }
}

export default UserClass;
