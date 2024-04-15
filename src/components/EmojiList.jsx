import React from "react";
import EmojiItem from "./EmojiItem";

function EmojiList({ emojis }) {
  return (
    <div className="emoji-list">
      {emojis.map((emoji, index) => (
        <EmojiItem key={index} emoji={emoji} />
      ))}
    </div>
  );
}

export default EmojiList;
