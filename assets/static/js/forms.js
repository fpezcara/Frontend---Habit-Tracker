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
  formContainer.className = "signup-box registrationContainer";
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
        name: "habit_name",
        placeholder: "Enter your habit name",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "number",
        name: "goal",
        placeholder: "Enter your goal",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "number",
        name: "quantity",
        placeholder: "Enter quantity",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "number",
        name: "frequency",
        placeholder: "Enter frequency",
      },
    },
    {
      tag: "input",
      attributes: {
        type: "date",
        id: "initialDate",
        name: "initial_date",
        class: "datePicker",
      },
      label: { text: "Start Date", for: "initialDate" },
    },
    {
      tag: "input",
      attributes: {
        type: "date",
        id: "endDate",
        name: "end_date",
        class: "datePicker",
      },
      label: { text: "End Date", for: "endDate" },
    },
    {
      tag: "input",
      attributes: { type: "submit", value: "Add new habit", id: "submit" },
    },
  ];

  const formContainer = document.createElement("div");
  formContainer.className = "signup-box newHabitContainer";
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  h2.textContent = "Create a new habit";
  formContainer.append(h2, form);
  fields.forEach(({ tag, attributes, label }) => {
    const field = document.createElement(tag);
    const fieldContainer = document.createElement("div");
    const labelTag = document.createElement("label");

    fieldContainer.className = "user-box newHabitUserBox";
    Object.entries(attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      fieldContainer.appendChild(field);
      form.appendChild(fieldContainer);
      if (label) {
        labelTag.textContent = label.text;
        Object.entries(label).forEach(([a, v]) => {
          a === "for" && labelTag.setAttribute(a, v);
        });
      }
    });

    label && fieldContainer.appendChild(labelTag);
  });

  form.addEventListener("submit", createNewHabit);
  main.appendChild(formContainer);
};

const renderHabits = async () => {
  const habitRenderedContainer = document.createElement("section");
  habitRenderedContainer.id = "habitRenderedContainer";
  const h2 = document.createElement("h2");
  h2.textContent = "Your goals!";
  h2.id = "renderHabitsh2";
  const newHabitLink = document.createElement("a");
  newHabitLink.href = "#new-habit";
  newHabitLink.id = "new-habit";
  newHabitLink.textContent = "new habit";

  const habits = await requestAllHabits();

  const showAllHabits = (habitData) => {
    const habitContainer = document.createElement("div");
    habitContainer.className = "habit-box";
    const habitName = document.createElement("h3");
    habitName.textContent = habitData.habit_name;
    const habitGoalTitle = document.createElement("p");
    habitGoalTitle.textContent = "Goal: ";
    const habitGoalContent = document.createElement("p");
    habitGoalContent.textContent = habitData.goal;
    const habitStartDateTitle = document.createElement("p");
    habitStartDateTitle.textContent = "When does it start?";
    const habitStartDateContent = document.createElement("p");
    habitStartDateContent.textContent = habitData.initial_date;
    const habitEndDateTitle = document.createElement("p");
    habitEndDateTitle.textContent = "When does it end?";
    const habitEndDateContent = document.createElement("p");
    habitEndDateContent.textContent = habitData.end_date;
    const habitQuantityTitle = document.createElement("p");
    habitQuantityTitle.textContent = "How's today looking? ";
    const habitQuantityContent = document.createElement("p");
    habitQuantityContent.textContent = habitData.quantity;
    const habitBtn = document.createElement("a");
    habitBtn.textContent = "Check your Days";
    habitBtn.className = "check-days"
    habitBtn.href = "#habit";
    habitBtn.id = habitData.user_habit_id;

    habitBtn.addEventListener("click", () => {
      localStorage.setItem("habit_id", habitData.user_habit_id);
    });

    habitContainer.append(
      habitName,
      habitGoalTitle,
      habitGoalContent,
      habitStartDateTitle,
      habitStartDateContent,
      habitEndDateTitle,
      habitEndDateContent,
      habitQuantityTitle,
      habitQuantityContent,
      habitBtn
    );
    habitRenderedContainer.appendChild(habitContainer);
  };

  habits.forEach(showAllHabits);
  main.append(h2, newHabitLink, habitRenderedContainer);

};

const renderSingleHabit = async () => {
  const habit = localStorage.getItem("habit_id");
  const daysOfHabits = await getDaysOfHabits(habit);
  const header = document.createElement("div");
  header.id = "singleHabitHeader";
  const h2 = document.createElement("h2");
  h2.textContent = daysOfHabits[0]
    ? `Hello, ${daysOfHabits[0].firstname}`
    : "Hello";
  const habitProgress = document.createElement("p");
  habitProgress.textContent = "Check your habit progress:";
  const habitName = document.createElement("span");
  habitName.textContent = daysOfHabits[0]
    ? `Habit: ${daysOfHabits[0].habit_name}`
    : "";

  header.append(h2, habitProgress, habitName);
  const table = document.createElement("table");
  const tableHeader = document.createElement("thead");
  const trTH = document.createElement("tr");
  const tHead = ["Goal", "Day No.", "Completed"];

  tHead.forEach((cont) => {
    const th = document.createElement("th");
    th.textContent = cont;
    trTH.appendChild(th);
  });
  tableHeader.appendChild(trTH);
  const tableBody = document.createElement("tbody");
  let trTB;
  daysOfHabits.forEach((d) => {
    trTB = document.createElement("tr");

    const tdOne = document.createElement("td");
    tdOne.textContent = d.goal;
    const tdTwo = document.createElement("td");
    tdTwo.textContent = d.daily_habit_id;
    const tdThree = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    checkbox.checked = d.completed == 1 ? !checkbox.checked : checkbox.checked;
    tdThree.appendChild(checkbox);
    trTB.append(tdOne, tdTwo, tdThree);
    tableBody.appendChild(trTB);

    checkbox.addEventListener("change", (e) => {
      e.target.checked && completeForTheDay(habit, d.daily_habit_id);
    });
  });

  table.append(tableHeader, tableBody);

  main.append(header, table);
};

const render404 = () => {
  const errorPage = document.createElement("div");
  errorPage.id = "errorPage";
  const error = document.createElement("h2");
  error.textContent = "Oops, we can't find that page sorry!";
  errorPage.appendChild(error);
  main.appendChild(errorPage);
};

const renderProfile = () => {
  main.innerHTML = `
  <h2>Welcome to your profile!</h2>
  <p>Profile information</p>
  `;
};

const navBar = document.querySelector(".links");
function updateNav() {
  navBar.innerHTML = `
  <li><a href="#home" class="sign-up">Home</a></li>
  <li><a href="#profile" class="sign-up">Profile</a></li>
  <li><a href="#logout" class="logout">Logout</a></li>
  `;
}

const login = (data) => {
  console.log(data)
  const payload = jwt_decode(data.token);
  localStorage.setItem("token", data.token);
  updateNav();
  location.hash = "#home";
};

const logout = () => {
  localStorage.clear();
  location.hash = "#login";
  navBar.innerHTML = `
  <li><a href="#login" class="login">Login</a></li>
  <li><a href="#signup" class="sign-up">Sign Up</a></li>
  `;
};
