import React from "react";

function EmojiItem({ emoji }) {
  const handleClick = () => {
    navigator.clipboard.writeText(emoji.symbol);
    alert(`Copied ${emoji.symbol} to clipboard!`);
  };

  return (
    <div className="emoji-item" onClick={handleClick}>
      <span role="img" aria-label={emoji.title}>
        {emoji.symbol}
      </span>
      <p>{emoji.title}</p>
    </div>
  );
}

export default EmojiItem;
