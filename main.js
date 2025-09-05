const d = document,
  $form = d.getElementById("form"),
  $inputs = d.querySelectorAll("#form input");

const expression = {
	firstName: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
	lastName: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.+$/,
}

const messages = {
  firstName: "Looks like this is not an name",
  lastName: "Looks like this is not a last name",
  email: "Looks like this is not an email"
};

const fields = {
  firstName: false,
  lastName: false,
  email: false,
  password: false
}

const addErrorStyles = (input) => {
  input.classList.add("signup__input-error");
  input.nextElementSibling.classList.add("active");
}

const removeErrorStyles = (input) => {
  input.classList.remove("signup__input-error");
  input.nextElementSibling.classList.remove("active");
}

const clearErrors = () => {
  const errorMessages = d.querySelectorAll("#form .error-message");
  errorMessages.forEach(msg => msg.innerText = "");
};

const validateField = (fieldRegex, inputElement, field) => {
  if (inputElement.value == "") {
    d.querySelector(`#group_${field} .error-message`).innerText = `${inputElement.placeholder} cannot be empty`;
    addErrorStyles(inputElement);
    inputElement.classList.add("page__input-error");
  } else if (!fieldRegex.test(inputElement.value)) {
    d.querySelector(`#group_${field} .error-message`).innerText = messages[field];
    addErrorStyles(inputElement);
  } else {
    inputElement.classList.remove("page__input-error");
    removeErrorStyles(inputElement);
    clearErrors();
    fields[field] = true;
  }
}

$form.addEventListener("submit", e => {
  e.preventDefault();

  $inputs.forEach(input => {
    const name = input.name;
    validateField(expression[name], input, name);
  });

  if ( Object.values(fields).includes(false) ) {
  console.log("Formulario no completado");
  } else {
    console.log("Formulario completado correctamente");
     //  Resetear formulario
    $form.reset();
     //  Resetear el estado de validación
    Object.keys(fields).forEach(key => {
      fields[key] = false;
    });
  }
})
