const loginButton = document.querySelector(".login");

const updateHomepage = (hash) => {
  main.innerHTML = "";
  switch (hash) {
    case "#login":
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

//setting hash to change to login on load of screen
window.addEventListener("load", () => {
  location.hash = "#login";
});
