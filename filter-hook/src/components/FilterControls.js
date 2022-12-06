import React, { useState, useEffect, useRef } from "react";

export default function FilterControls({ onFilterControlsChange }) {
  const search = useRef(null);
  const order = useRef(null);

  function filterChanged() {
    onFilterControlsChange(search.current.value, order.current.checked);
  }

  function reset() {
    search.current.value = "";
    order.current.checked = false;
    filterChanged();
  }

  return (
    <div className={"Controls"}>
      <input type="checkbox" ref={order} onChange={filterChanged} />
      <input type="text" ref={search} onChange={filterChanged} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
