const main = document.querySelector("main");

const loginButton = document.querySelector(".login");

//? our aim
// function updateMain(path) {
//   main.innerHTML = '';
//   if (path) {
//       switch(path){
//           case '#login':
//               renderLoginForm(); break;
//           case '#register':
//               renderRegisterForm(); break;
//           case '#feed':
//               renderFeed(); break;
//           case '#profile':
//               renderProfile(); break;
//           default:
//               render404(); break;
//       }
//   } else {
//       renderHomepage();
//   }
// }

const updateHomepage = (hash) => {
  //?if user is logged in we show the "add new habit", if not signed in then straight to "sign in" form
  main.innerHTML = "";
  let form;
  switch (hash) {
    case "login":
      form = renderLoginForm();
      break;
    case "signup":
      form = renderRegisterForm();
      // form = renderLoginForm();
      break;
  }

  main.appendChild(form);
  // if (hash == "login") {
  //   const form = renderHabitsForm();
  //   console.log("signup", renderHabitsForm())
  //   main.appendChild(form);
  // }
  // if (hash == "signup") {
  //   const form = renderLoginForm();
  //   console.log("signup", renderLoginForm())
  //   main.appendChild(form);
  // }
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
  console.log(hash)
  main && updateHomepage(hash);
});
