// create form to add new habit
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
{
  /* <select type="checkbox" name="frequency" id="frequency"> */
}

const createForm = () => {
  const form = document.createElement("form");
  fields.forEach(({ tag, attributes, options }) => {
    const field = document.createElement(tag);
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });

    tag === "select" &&
        options.forEach(({value}) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value.toUpperCase();
          field.appendChild(option);
        });

  });

  console.log(form);
  return form;
};

