import React, { Component } from "react";
import "./UserCard.css";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
    };
  }

  render() {
    const { name, location, contact, bio } = this.props.data;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>📍 {location}</h3>
        <h4>📞 {contact}</h4>
        <p>{bio}</p>

        <div className="count-section">
          <p>
            <strong>Count 1:</strong> {count}
          </p>
          <p>
            <strong>Count 2:</strong> {count2}
          </p>
        </div>

        <div className="button-group">
          <button
            className="btn"
            onClick={() =>
              this.setState((prev) => ({ ...prev, count: prev.count + 1 }))
            }
          >
            ➕ Increment Count 1
          </button>
          <button
            className="btn secondary"
            onClick={() => this.setState({ count2: count2 + 1 })}
          >
            🔼 Increment Count 2
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
