import { useDispatch } from "react-redux";
import { orderBy } from "../redux/clientsSlice.js";
import { filterStatusEnum } from "../enums/filterStatusEnum";

export default function OrderButtons() {
  const dispatch = useDispatch();

  function onAllClick(e) {
    dispatch(orderBy(filterStatusEnum.all));
  }

  function onActiveClick(e) {
    dispatch(orderBy(filterStatusEnum.active));
  }

  function onBlockedClick(e) {
    dispatch(orderBy(filterStatusEnum.blocked));
  }

  return (
    <div className={"sort-clients-buttons"}>
      <button onClick={onAllClick}>All</button>
      <button onClick={onActiveClick}>Active</button>
      <button onClick={onBlockedClick}>Blocked</button>
      {/* 
      <OrderButton onOrderClick={onOrderClick} sort={filterStatusEnum.all}>
        All
      </OrderButton>
      <OrderButton
        onOrderClick={onOrderClick}
        sort={filterStatusEnum.active}
      ></OrderButton>
      <OrderButton
        onOrderClick={onOrderClick}
        sort={filterStatusEnum.blocked}
      ></OrderButton> */}
    </div>
  );
}
