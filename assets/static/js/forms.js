// create form to add new habit

const renderHabitsForm = () => {
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "newHabit",
        placeholder: "Enter new habit",
        id: "newHabit",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "number",
        name: "nOfRepetitions",
        placeholder: "Enter number of repetitions",
        id: "nOfRepetitions",
      },
    },
    {
      tag: "input",
      attributes: { type: "submit", value: "Add new habit", id: "submit" },
    },
    {
      tag: "select",
      attributes: { type: "checkbox", name: "frequency", id: "frequency" },
      options: [
        { value: "select" },
        { value: "daily" },
        { value: "weekly" },
        { value: "monthly" },
      ],
    },
  ];

  const form = document.createElement("form");
  fields.forEach(({ tag, attributes, options }) => {
    const field = document.createElement(tag);
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });

    tag === "select" &&
      options.forEach(({ value }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value.toUpperCase();
        field.appendChild(option);
      });
  });

  return form;
};

const renderLoginForm = () => {
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "email",
        name: "email",
        placeholder: "Enter your email address",
        id: "email",
      },
      label: "Email",
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        id: "password",
      },
      label: "Password",
    },
    // {
    //   tag: "a",
    //   attributes: {
    //     href: "#",
    //   },
    // },
  ];

  //   <a href="#">
  //   <span></span>
  //   <span></span>
  //   <span></span>
  //   <span></span>
  //   Login
  // </a>

  const formContainer = document.createElement("div");
  formContainer.className = "signup-box";
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  h2.textContent = "Enter your details";

  formContainer.append(h2, form);
  // console.log("form after formContainer is appended", formContainer);
  const aTag = document.createElement("a");
  aTag.setAttribute("href", "#");
  aTag.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Login
  `;
  fields.forEach(({ tag, attributes, label: labelText }) => {
    const field = document.createElement(tag);
    const label = document.createElement("label");
    label.textContent = labelText;

    const fieldContainer = document.createElement("div");
    fieldContainer.className = "user-box";
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      fieldContainer.append(field, label);

      form.append(fieldContainer, aTag);
    });
  });
  form.addEventListener('submit', requestLogin)
  return formContainer;
};

// function renderRegisterForm() {
//   const fields = [
//       { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
//       { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
//       { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
//       { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
//       { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
//   ]
//   const form = document.createElement('form');
//   fields.forEach(f => {
//       let field = document.createElement(f.tag);
//       Object.entries(f.attributes).forEach(([a, v]) => {
//           field.setAttribute(a, v);
//           form.appendChild(field);
//       })
//   })
//   form.addEventListener('submit', requestRegistration)
//   main.appendChild(form);
// }
