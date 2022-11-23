export default function Controls({ search, order, onFilterControlsChange }) {
  return (
    <div className={"Controls"}>
      <input
        type="checkbox"
        checked={order}
        onChange={(event) =>
          onFilterControlsChange(search, event.target.checked)
        }
      />
      <input
        type="text"
        value={search}
        onChange={(event) => onFilterControlsChange(event.target.value, order)}
      />
      <button onClick={(event) => onFilterControlsChange('', false)}>Reset</button>
    </div>
  );
}
