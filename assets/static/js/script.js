const loginButton = document.querySelector(".login");

const updateHomepage = (hash) => {
  main.innerHTML = "";
  switch (hash) {
    case "#login":
    case "#":
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

const navBar = document.querySelector(".links");
const updateNav = () => {
  navBar.innerHTML = `
  <li><a href="#home" class="sign-up">Home</a></li>
  <li><a href="#profile" class="sign-up">Profile</a></li>
  <li><a href="#logout" class="logout">Logout</a></li>
  `;
};

window.addEventListener("hashchange", () => {
  let hash = window.location.hash;
  console.log(hash);
  updateHomepage(hash);
});
