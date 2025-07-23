import React, { useState } from "react";

const Grocery = () => {
  const [items, setItems] = useState(["Milk", "Bread", "Eggs"]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Grocery List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.addButton}>Add</button>
      </div>

      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
            <button onClick={() => handleDeleteItem(index)} style={styles.deleteButton}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styles for basic styling
const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  input: {
    padding: "8px",
    width: "70%",
    marginRight: "10px",
  },
  addButton: {
    padding: "8px 12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    padding: "8px 12px",
    margin: "5px 0",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "red",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Grocery;
