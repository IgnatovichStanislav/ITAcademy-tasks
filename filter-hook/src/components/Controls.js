import React, { useState, useEffect } from "react";

export default function Controls({ onFilterControlsChange }) {
  const [order, setOrder] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    onFilterControlsChange(filter, order);
  }, [order, filter]);

  return (
    <div className={"Controls"}>
      <input
        type="checkbox"
        checked={order}
        onChange={(event) => setOrder(event.target.checked)}
      />
      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <button onClick={(event) => {
        setOrder(false);
        setFilter('');
      }}>
        Reset
      </button>
    </div>
  );
}
