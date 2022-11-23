import React, { useState } from "react";
import Controls from "./components/Controls";
import List from "./components/List";

export default function Filter(props) {
  const [filterData, setFilterData] = useState({
    search: "",
    order: false,
    data: props.data,
  });

  function onFilterControlsChange(search, order) {
    var filterData = [...props.data];
    if (search.length > 0)
      filterData = filterData.filter((x) => x.includes(search));
    if (order) filterData = filterData.sort();

    setFilterData({
      search: search,
      order: order,
      data: filterData,
    });
  }

  return (
    <div className={"Filter"}>
      <Controls
        search={filterData.search}
        order={filterData.order}
        onFilterControlsChange={onFilterControlsChange}
      />
      <List data={filterData.data} />
    </div>
  );
}
