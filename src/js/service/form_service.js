function getFormData(form) {
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData) {
    data[key] = value;
  }

  return data;
}

function fillingForm(form, data) {
  const inputs = form.elements;

  Object.keys(data).forEach((key) => {
    if (inputs.hasOwnProperty(key)) {
      inputs[key].value = data[key];
    }
  });
}

export { getFormData, fillingForm };
