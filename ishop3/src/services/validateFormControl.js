export function validateFormControl(control) {
  if (control.touched !== null) control.touched = true;
  control.errorMessages = [];
  if (!control.validation) {
    control.valid = true;
  } else {
    let isValid = true;

    var val = control.value.trim().replace(",", ".");

    if (control.validation.required) {
      isValid = val !== "" && isValid;
      if (!isValid) control.errorMessages.push("Please, fill the field");
    }

    if (isValid && control.validation.isNumber && val !== "") {
      isValid = !isNaN(val);
      if (!isValid) control.errorMessages.push("Fill must be a number");
    }

    if (isValid && control.validation.isInteger && val !== "") {
      var number = Number(val);

      isValid = Number.isInteger(number);
      if (!isValid) control.errorMessages.push("Fill must be integer");
    }

    if (isValid && control.validation.positive && val !== "") {
      isValid = Number(val) > 0;
      if (!isValid) control.errorMessages.push("Fill must be positive");
    }

    control.valid = isValid;
  }
}
