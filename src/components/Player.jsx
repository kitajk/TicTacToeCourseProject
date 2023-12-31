import { useState } from "react";

export default function Player({ name, symbol }) {
  // useState for editing button and changing span into input
  const [isEditing, setIsEditing] = useState(false);
  // useState for getting player name as value
  const [inputValue, setInputValue] = useState(name);

  function handleEdit() {
    // This fragment of code is responsible for preventing user from entering empty player name
    if (isEditing) {
      if (inputValue.trim() !== "") {
        setInputValue(inputValue);
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
    }
  }
  //   Triggers handleEdi() when enter is clicked
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <li>
      <span className="player">
        {/* Setting span or input depending on isEditing value */}
        {isEditing ? (
          <input
            id="name"
            type="text"
            required
            value={inputValue}
            // Set handleEnter fucntion as value for React's onKeyUp event
            onKeyUp={handleEnter}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          <span className="player-name">{inputValue}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* Setting appropriate button text */}
      <button onClick={handleEdit}>{isEditing ? "OK" : "Edit"}</button>
    </li>
  );
}
