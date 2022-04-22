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
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    // Query for an element
    cy.contains("Omer");
  });

  it("Register control", () => {
    cy.contains("Register").click().wait(2000);

    cy.url().should("include", "http://localhost:3000/register");
  });
  it("typing", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#email")
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
    cy.get("input[name='password']").type("verysecret");
    cy.get("button").contains("Login");
  });
});
