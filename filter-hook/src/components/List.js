export default function List(props) {
  const options = props.data.map((x) => <option key={x}>{x}</option>);
  return (
    <select
      multiple={true}
      style={{ width: "250px", height: "120px", marginTop: "5px" }}
    >
      {options}
    </select>
  );
}
