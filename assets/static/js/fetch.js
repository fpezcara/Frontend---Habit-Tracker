const requestLogin = async (e) => {
  e.preventDefault();

  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(
      "https://optimizeprime-api.herokuapp.com/auth/login",
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

    const data = await r.json();

    if (data.err) {
      throw Error(data.err);
    } else {
      location.hash = "#login";
    }

  } catch (err) {
    console.warn(`Error: ${err}`);
  }
};

const requestAllHabits = async () => {
  const options = { headers: new Headers({ Authorization: localStorage.getItem("token") }) };

  const response = await fetch(`https://optimizeprime-api.herokuapp.com/habits`, options);

  const habits = await response.json();

  return habits;

};

const createNewHabit = async (e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
  try {
    const options = {
      method: "POST",
      headers: new Headers(
        { authorization: localStorage.getItem("token"), "Content-Type": "application/json" }
      ),
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(
      `https://optimizeprime-api.herokuapp.com/habits/new-habit`,
      options
    );
    // console.log("rrrrr", r)
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


const requestProfileInfo = async (e) => {
  e.preventDefault();
};
