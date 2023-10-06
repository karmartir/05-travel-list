import React from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onComplete }) => {
  return (
    <div className="list">
      <li>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onComplete={onComplete}
          />
        ))}
      </li>
    </div>
  );
};

export default PackingList;
