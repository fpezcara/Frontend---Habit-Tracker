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

{
  /* <div class="user-box">
<input type="text" name="" required="">
<label>First Name</label>
</div>
<div class="user-box">
<input type="password" name="" required="">
<label>Last Name</label>
</div>
<div class="user-box">
<input type="password" name="" required="">
<label>Email</label>
</div>
<div class="user-box">
<input type="password" name="" required="">
<label>Password</label>
</div>
<a href="#">
<span></span>
<span></span>
<span></span>
<span></span>
Sign Up
</a> */
}
const renderRegisterForm = () => {
  const fields = [
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "firstName",
        placeholder: "Enter your first name",
        id: "firstName",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "text",
        name: "lastName",
        placeholder: "Enter your last name",
        id: "lastName",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Enter your first password",
        id: "password",
      },
    },
  ];
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
