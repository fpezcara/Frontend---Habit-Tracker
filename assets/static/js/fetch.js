const requestLogin = async (e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
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
    }

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
