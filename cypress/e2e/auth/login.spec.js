import { login } from "../../utils/auth";
import { LoginPage } from "../../pageLogin/auth/LoginPage";

describe("Log in", () => {
  //the first way using function
  //  it("should login with valid credentials", () => {
  //    login("maiia.romanovska@gmail.com", "qwerty", true);
  //    cy.url().should("equal", "http://localhost:4200/pages");
  //  });

  //the second way custom commands
  //it("should login with valid credentials", () => {
  //  cy.login("maiia.romanovska@gmail.com", "qwerty", true);
  //  cy.url().should("equal", "http://localhost:4200/pages");
  //});

  //the third way using Page Object
  it("should login with valid credentials", () => {
    const loginPage = new LoginPage();
    loginPage.navigate();
    loginPage.login("maiia.romanovska@gmail.com", "qwerty", true);
    cy.url().should("equal", "http://localhost:4200/pages");
  });
});
