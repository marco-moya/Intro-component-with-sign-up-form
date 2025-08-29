const d = document,
  $form = d.getElementById("form"),
  $inputs = d.querySelectorAll("#form input");

const expression = {
	firstName: /^.+$/,
	lastName: /^.+$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.+$/,
}

const fields = {
  firstName: false,
  lastName: false,
  email: false,
  password: false
}

const validateField = (expression, input, field) => {
  if (expression.test(input.value)) {
    d.querySelector(`#group_${field} p`).classList.remove("active");
    d.querySelector(`#group_${field} img`).classList.remove("active");
    d.querySelector(`#group_${field} input`).classList.remove("signup__input-error");
    console.log("Campo correcto")
    fields[field] = true;
  } else {
    d.querySelector(`#group_${field} p`).classList.add("active");
    d.querySelector(`#group_${field} img`).classList.add("active");
    d.querySelector(`#group_${field} input`).classList.add("signup__input-error");
    console.log("Campo incorrecto")
    fields[field] = false;
  }
}

$form.addEventListener("submit", e => {
  e.preventDefault();

  $inputs.forEach(input => {
    const name = input.name;
    validateField(expression[name], input, name);
  });


  if ( Object.values(fields).includes(false) ) {
    console.log("Formulario no completado", fields);
  } else {
    console.log("Formulario completado correctamente", fields);
  }
})
