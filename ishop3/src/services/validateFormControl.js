export function validateFormControl(control) {
  if (control.touched !== null) control.touched = true;
  control.errorMessages = [];
  if (!control.validation) {
    control.valid = true;
  } else {
    let isValid = true;

    let val = control.value.toString().trim().replace(",", ".");

    if (control.validation.required) {
      isValid = val !== "" && isValid;
      if (!isValid) control.errorMessages.push("Please, fill the field");
    }

    if (isValid && control.validation.isNumber && val !== "") {
      isValid = !isNaN(val);
      if (!isValid) control.errorMessages.push("Field must be a number");
    }

    if (isValid && control.validation.isInteger && val !== "") {
      let number = Number(val);

      isValid = Number.isInteger(number);
      if (!isValid) control.errorMessages.push("Field must be integer");
    }

    if (isValid && control.validation.positive && val !== "") {
      isValid = Number(val) > 0;
      if (!isValid) control.errorMessages.push("Field must be positive");
    }

    control.valid = isValid;
  }
}

export function checkFormValidation(controls){
    let isFormValid = true;

    Object.keys(controls).forEach((name) => {
      let control = controls[name];
      validateFormControl(control);
      isFormValid = (control.valid === null || control.valid) && isFormValid;
    });

    return isFormValid;
}
