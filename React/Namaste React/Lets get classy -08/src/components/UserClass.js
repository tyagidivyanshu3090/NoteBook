import React, { Component } from "react";
import "./UserCard.css";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
      apiData: {
        userId: "",
        title: "Loading...",
        completed: false,
      },
    };
  }

  // Fetching data when the component mounts
  // This is an example of a side effect in a class component
  async componentDidMount() {
    console.log(
      "Component mounted! -> only once when the component is mounted"
    );
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    console.log(json);
    // setInterval(() => {
    //   console.log("Data fetched successfully!");
    // }, 1000);
    this.setState({
      apiData: json,
    });
  }

  componentDidUpdate() {
    console.log("Component updated!");
    // You can add logic here to handle updates, like fetching new data
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
    console.log(
      "Component is being removed from the DOM -> cleanup! code are used here like removing event listeners, canceling API calls, ClearsetTimeout etc."
    );
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
        <p>{this.state.apiData.title}</p>
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
