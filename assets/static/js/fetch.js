const requestLogin = async (e) => {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    const r = await fetch(
      `https://optimizeprime-api.herokuapp.com/auth/login`,
      options
    );

    const data = await r.json();

    if (data.err) {
      console.log(data.err);
      throw Error(data.err);
    }

    login(data);
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
};

const requestRegistration = async (e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
  //**this route is not working */
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(
      `https://optimizeprime-api.herokuapp.com/auth/register`,
      options
    );

    // console.log("rrrrr", r)
    const data = await r.json();

    if (data.err) {
      throw Error(data.err);
    }
    console.log("response", r);
    console.log("data", data);
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
};

const createNewHabit = async (e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
  try {
    const options = {
      method: "POST",
      headers: new Headers({
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(
      `https://optimizeprime-api.herokuapp.com/habits/new-habit`,
      options
    );
    const data = await r.json();
    if (data.err) {
      throw Error(data.err);
    } else {
      location.hash = "#home";
    }
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
};

const requestAllHabits = async () => {
  const options = {
    headers: new Headers({ authorization: localStorage.getItem("token") }),
  };

  const response = await fetch(
    `https://optimizeprime-api.herokuapp.com/habits`,
    options
  );

  const habits = await response.json();

  return habits;
};

const getDaysOfHabits = async (user_habit_id) => {
  const options = {
    headers: new Headers({ authorization: localStorage.getItem("token") }),
  };

  const response = await fetch(
    `https://optimizeprime-api.herokuapp.com/habits/days/${user_habit_id}`,
    options
  );

  const habitsDays = await response.json();

  return habitsDays;
};

const requestProfileInfo = async (e) => {
  e.preventDefault();
};

const completeForTheDay = async (user_habit_id, daily_habit_id) => {
  const completed = 1;
  const obj = { completed, user_habit_id, daily_habit_id };
  // console.log(Object.fromEntries({}));
  console.log(obj);
  try {
    const options = {
      method: "POST",
      headers: new Headers({
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(obj),
    };
    const response = await fetch(
      `https://optimizeprime-api.herokuapp.com/habits/setday`,
      options
    );

    const habitsDays = await response.json();
    return habitsDays;
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
};
