// create form to add new habit
const main = document.querySelector("main");

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
        name: "user_password",
        placeholder: "Enter your password",
        id: "password",
      },
      label: "Password",
    },
    {
      tag: "input",
      attributes: {
        type: "submit",
        value: "Login",
      },
    },
  ];

  const formContainer = document.createElement("div");
  formContainer.className = "signup-box";
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  h2.textContent = "Enter your details";
  formContainer.append(h2, form);

  fields.forEach(({ tag, attributes, label: labelText }) => {
    const field = document.createElement(tag);
    const label = document.createElement("label");
    label.textContent = labelText;
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "user-box";
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      labelText
        ? fieldContainer.append(field, label)
        : fieldContainer.appendChild(field);

      if (v === "submit") {
        fieldContainer.innerHTML = `<span></span>
            <span></span>
            <span></span>
            <span></span>`;
      }
    });
    form.appendChild(fieldContainer);
  });

  form.addEventListener("submit", requestLogin);
  main.appendChild(formContainer);
};

const renderRegistrationForm = () => {
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "firstname",
        placeholder: "Enter your first name",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "lastname",
        placeholder: "Enter your last name",
      },
    },

    {
      tag: "input",
      attributes: {
        type: "password",
        name: "user_password",
        placeholder: "Password",
      },
    },
    // {
    //   tag: "input",
    //   attributes: {
    //     type: "password",
    //     name: "passwordConfirmation",
    //     placeholder: "Confirm Password",
    //   },
    // },
    { tag: "input", attributes: { type: "submit", value: "Register" } },
  ];
  const formContainer = document.createElement("div");
  formContainer.className = "signup-box";
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  h2.textContent = "Enter your details";
  formContainer.append(h2, form);

  fields.forEach(({ tag, attributes, label: labelText }) => {
    const field = document.createElement(tag);
    const label = document.createElement("label");
    label.textContent = labelText;
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "user-box";
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      labelText
        ? fieldContainer.append(field, label)
        : fieldContainer.appendChild(field);

      if (v === "submit") {
        fieldContainer.innerHTML = `<span></span>
            <span></span>
            <span></span>
            <span></span>`;
      }
    });
    form.appendChild(fieldContainer);
  });

  form.addEventListener("submit", requestRegistration);
  main.appendChild(formContainer);
};

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

const login = (data) => {
  // localStorage.setItem('username', data.user);
  // const payload = jwt_decode(data.token);
  // console.log(data);
  // console.log(payload);
  // localStorage.setItem("token", data.token);
  // localStorage.setItem("username", payload.username);
  // localStorage.setItem("email", payload.email);
  console.log(data);
  updateNav();
  location.hash = "#habits";
};

// const logout = () => {
//   localStorage.clear();
//   location.hash = "#login";
// }

const currentUser = () => {
  const username = localStorage.getItem("username");
  return username;
};

const render404 = () => {
  const error = document.createElement("h2");
  error.textContent = "Oops, we can't find that page sorry!";
  main.appendChild(error);
};
