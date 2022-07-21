const requestLogin = async (e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
  try {
    const options = {
      method: "POST",
      // headers: new Headers({
      //   "authorization": "Token",
      //   "Content-Type": "application/json",
      // }),
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
    console.log(r);

    console.log("data", data);
    login(data);
    //*We need to create the authorisation so then this function will takes us to the #feed or #habits
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
    const r = await fetch(`http://localhost:3000/auth/register`, options);

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

const requestAllHabits = async (e) => {
  e.preventDefault();
};

const createNewHabit = async (e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
};

const requestProfileInfo = async (e) => {
  e.preventDefault();
};
