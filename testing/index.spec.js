const renderDom = require("./helpers");

let dom;
let document;

describe("index.html", () => {
  beforeEach(async () => {
    dom = await renderDom("index.html");
    document = await dom.window.document;
  });


    test("it has a body", () => {
      let body = document.querySelector("body");
      expect(body).toBeTruthy();
    });



  test("it has a nav", () => {
    let nav = document.querySelector("nav");
    expect(nav).toBeTruthy();
  });

  test("it has a ul", () => {
    let ul = document.querySelector(".links");
    expect(ul).toBeTruthy();
  });
  test("it has a logo", () => {
    let logo = document.querySelector(".logo");
    expect(logo).toBeTruthy();
  });


  test("it has a main section", () => {
    let main = document.querySelector("main");
    expect(main).toBeTruthy();
  });


  test("it has 2 anchor tags in nav section at start", () => {
    let a = document.querySelectorAll(".links a");
    expect(a.length).toBe(2);
  });

  
  test("anchor tags are 3 when logged in", () => {
    let a = document.querySelectorAll(".links a");
    expect(a.length).toBe(2);
  });

});
