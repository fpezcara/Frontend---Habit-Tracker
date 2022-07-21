const renderDom = require("./helpers");

let dom;
let document;

describe("index.html", () => {
  beforeEach(async () => {
    dom = await renderDom("index.html");
    document = await dom.window.document;
  });

  test("it has a nav", () => {
    let nav = document.querySelector("nav");
    expect(nav).toBeTruthy();
  });

  test("it has a main section", () => {
    let main = document.querySelector("main");
    expect(main).toBeTruthy();
  });

    test("it has 2 anchor tags in nav section at start", () => {
      let a = document.querySelectorAll(".links a")
      expect(a.length).toBe(2);
    });
});
