import "./Input.css";

 const Input=(props)=>{
  const inputType = props.type || "text";
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className="Input">
      <label htmlFor={htmlFor}>
        {props.label}{" "}
        {props?.validation?.required === true ? <span>*</span> : null}
      </label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        name={props.name}
      />
      {/* Если потрогали + есть валидация + не валидно*/}
      {props.touched && !!props.validation && !props.valid ? (
        <span>
          {props.errorMessages
            ? props.errorMessages.join(", ")
            : null}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
