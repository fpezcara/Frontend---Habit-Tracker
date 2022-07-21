const loginButton = document.querySelector(".login");
const signup = document.querySelector(".sign-up");

const token = localStorage.getItem("token")

const updateHomepage = (hash) => {
  main.innerHTML = "";
  
  switch (hash) {
    case "#login":
      renderLoginForm();
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

if (token) {
  signup.style.display = 'none';
  loginButton.style.display = 'none';
}

