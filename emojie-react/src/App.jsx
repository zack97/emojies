// App.js
import React, { useState } from "react";
import emojisData from "./components/emojis.json";
import EmojiList from "./components/EmojiList";
import SearchBar from "./components/SearchBar";

function App() {
  const [emojis, setEmojis] = useState(emojisData);
  const [filterKeyword, setFilterKeyword] = useState("");

  const handleFilterChange = (event) => {
    setFilterKeyword(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.keywords.includes(filterKeyword.toLowerCase())
  );

  return (
    <div>
      <h1>Emoji Filter</h1>
      <SearchBar value={filterKeyword} onChange={handleFilterChange} />
      <EmojiList emojis={filteredEmojis} />
    </div>
  );
}

export default App;
