import React from "react";

const Item = ({ item, onDeleteItem, onComplete }) => {
  return (
    <>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onComplete(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </>
  );
};

export default Item;
