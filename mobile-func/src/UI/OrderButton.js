export default function OrderButton (props)  {
  function onClick(e) {
    props.onOrderClick(props.sort);
  }

  return <button onClick={onClick}>{props.children}</button>;
};
