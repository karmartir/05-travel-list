import React from "react";

const Item = ({ item, onDeleteItem, onComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onComplete(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
