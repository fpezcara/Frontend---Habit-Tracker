const requestLogin = async (e) => {
  e.preventDefault();

  console.log(Object.fromEntries(new FormData(e.target)));
  //**this route is not working */
  try {
    const options = {
      method: "POST",
      //   headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(
      `http://optimizeprime-api.herokuapp.com/auth/login`,
      options
    );

    console.log("rrrrr", r);
    const data = await r.json();

    if (data.err) {
      throw Error(data.err);
    }
    console.log("data", data);
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
      `https://optimizeprime-api.herokuapp.com/auth/login`,
      options
    );

    // console.log("rrrrr", r)
    const data = await r.json();

    if (data.err) {
      throw Error(data.err);
    }
    console.log("data", data);
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
};
