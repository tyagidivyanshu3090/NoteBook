import React, { Component } from "react";
// import "./UserCard.css"; // Remove this line once you've replaced all styles with Tailwind

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
    // Destructure props with a default empty object to prevent errors if data is not passed
    const { name, location, contact, bio } = this.props.data || {};
    const { count, count2 } = this.state;

    return (
      <div className="flex flex-col items-center p-6 m-4 bg-white rounded-lg shadow-xl max-w-sm mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 bg-amber-800 text-white px-4 py-2 rounded">
          {name || "User Name"}
        </h2>
        <h3 className="text-lg text-gray-600 mb-1">
          📍 {location || "Unknown Location"}
        </h3>
        <h4 className="text-md text-gray-500 mb-4">📞 {contact || "N/A"}</h4>
        <p className="text-gray-700 text-center mb-4 leading-relaxed">
          {bio ||
            "This is a placeholder for user biography. Learn more about the user's interests and professional background here."}
        </p>

        <div className="flex justify-around w-full mb-4 border-t border-b py-2 border-gray-200">
          <p className="text-gray-800 font-medium">
            <strong>Count 1:</strong>{" "}
            <span className="text-blue-600">{count}</span>
          </p>
          <p className="text-gray-800 font-medium">
            <strong>Count 2:</strong>{" "}
            <span className="text-green-600">{count2}</span>
          </p>
        </div>
        <p className="text-lg font-semibold text-purple-700 mb-4">
          {this.state.apiData.title}
        </p>

        <div className="flex flex-col space-y-3 w-full">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() =>
              this.setState((prev) => ({ ...prev, count: prev.count + 1 }))
            }
          >
            ➕ Increment Count 1
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
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
