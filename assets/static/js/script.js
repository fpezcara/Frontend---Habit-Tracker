const loginButton = document.querySelector(".login");

const updateHomepage = (hash) => {
  //?if user is logged in we show the "add new habit", if not signed in then straight to "sign in" form
  main.innerHTML = "";
  switch (hash) {
    case "login":
      renderLoginForm();
      break;
    case "signup":
      renderRegistrationForm();
      break;
    case "home":
      renderHabits();
    break;
    case "new-habit":
      renderHabitsForm();
    break;
    case "profile":
      renderProfile();
    break;
    //   ;
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

{
  /* <form id="addNewHabit">
<legend>Add Habit</legend>
<label for="newHabit">Enter new habit:</label>
<input
  type="text"
  name="newHabit"
  id="newHabit"
  placeholder="Please enter new habit"
/>
<label for="nOfRepetitions">Number of repetitions:</label>
<input type="number" name="nOfRepetitions" id="nOfRepetitions" />
<label for="frequency">Frequency: </label>
<select type="checkbox" name="frequency" id="frequency">
  <option value="">Select one</option>
  <option value="daily">Daily</option>
  <option value="weekly">Weekly</option>
  <option value="monthly">Monthly</option>
</select>
<input type="submit" value="Add new habit" />
</form> */
}
window.addEventListener("hashchange", () => {
  let hash = window.location.hash.substring(1);
  console.log(hash);
  updateHomepage(hash);

});
