const loginButton = document.querySelector(".login");

const updateHomepage = (hash) => {
  main.innerHTML = "";
  switch (hash) {
    case "#login":
    case "":
      renderLoginForm();
      break;
    case "#signup":
      renderRegistrationForm();
      break;
    case "#home":
      renderHabits();
      break;
    case "#new-habit":
      renderHabitsForm();
      break;
    case "#profile":
      renderProfile();
      break;
    case "#habit":
      renderSingleHabit();
      break;
    case "#logout":
      logout();
      break;
    default:
      render404();
  }
};

window.addEventListener("hashchange", () => {
  let hash = window.location.hash;
  updateHomepage(hash);
});
