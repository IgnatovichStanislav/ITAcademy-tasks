import React, { useState } from "react";
import Controls from "./components/Controls";
import FilterControls from "./components/FilterControls";
import List from "./components/List";

export default function Filter(props) {
  const [filterData, setFilterData] = useState({
    data: props.data,
  });

  function onFilterControlsChange(search, order) {
    var filterData = [...props.data];
    if (search.length > 0)
      filterData = filterData.filter((x) => x.includes(search));
    if (order) filterData = filterData.sort();

    setFilterData({
      data: filterData,
    });
  }

  return (
    <div className={"Filter"}>
      <FilterControls
        onFilterControlsChange={onFilterControlsChange}
      />
      <List data={filterData.data} />
    </div>
  );
}
