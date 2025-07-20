import React, { Component } from "react";
import "./UserCard.css"; // Link to external CSS

class UserClass extends Component {
  render() {
    return (
      <div className="user-card">
        <h2>Name: Divyanshu</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @Divyanshu422 on Twitter</h4>
        <p>
          Bio: A passionate web developer with a love for creating interactive
          applications.
        </p>
      </div>
    );
  }
}

export default UserClass;
