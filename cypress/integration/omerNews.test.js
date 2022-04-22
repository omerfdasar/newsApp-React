describe("Header test", () => {
  beforeEach(() => {
    const url =
      "https://newsapi.org/v2/everything?" +
      "q=Apple&" +
      "from=2022-04-18&" +
      "sortBy=popularity&" +
      "apiKey=1a1a999e0d7240a6bd2dead87bcca78e";

    cy.request(url).then((res) => {
      cy.log("response: ", res);
    });
  });

  it("Omer events", () => {
    cy.log("start");
    cy.visit("http://localhost:3000");
    cy.wait(2000);
    // Query for an element
    cy.contains("Omer");
  });

  it("Register control", () => {
    cy.visit("http://localhost:3000/register");
    cy.contains("Register").click();
    cy.url().should("include", "http://localhost:3000/register");
  });

  it("registering email", () => {
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";
    for (var ii = 0; ii < 15; ii++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    cy.log(string + "@domain.com");
    var email = string + "@domain.com";
    cy.contains("Register").click();

    cy.get("#email").type(email).should("have.value", email);
    cy.get("input[name='password']").type(email);
    cy.get("body")
      .children("div")
      .children("div")
      .children("div")
      .eq(1)
      .children("div div")
      .children("form")
      .contains("Register")
      .click();
  });

  //   it("type email", () => {
  //     cy.visit("http://localhost:3000/login");
  //     cy.get("#email").type("m123@gmail.com");
  //     cy.get('input[type="password"]').type("m123456");
  //     // click button
  //     cy.get("button").contains("Login").click();
  //   });
});
