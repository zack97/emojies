import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <>
      <div className="searchBar-details">
        <input
          type="text"
          placeholder="Search emojis..."
          value={value}
          onChange={onChange}
        />
        <i>Click on emoji to copy it</i>
      </div>
    </>
  );
}

export default SearchBar;
