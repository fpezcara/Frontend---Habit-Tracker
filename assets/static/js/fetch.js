const requestLogin = async (e) => {
  e.preventDefault();
  console.log("target", e.target);
  try {
    const options = {
      method: "POST",
      //   headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };
    const r = await fetch(
      `https://optimizeprime-api.herokuapp.com/auth/login`,
      options
    );
    const data = await r.json();
    if (data.err) {
      throw Error(data.err);
    }
    console.log("data", data);
    // login(data);
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
};
