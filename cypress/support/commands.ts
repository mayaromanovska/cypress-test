/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


Cypress.Commands.add('login', function(email, password, rememberMe) {
  cy.visit("auth/login");

  cy.get("form input#input-email").type(email, { delay: 50 });
  cy.get("form input#input-password").type(password, { delay: 50 });

  if (rememberMe) {
    cy.get("form .custom-checkbox").click();
  }

  cy.get('form button[status="primary"]').click();
  cy.url().should("contain", "/pages");
})

Cypress.Commands.add('addUser', function(id, firstName, lastName, userName, email, age) {
  cy.visit("pages/tables/smart-table");
  cy.get("a.ng2-smart-action-add-add").click();
  
  cy.get("thead tr:nth-child(3) td:nth-child(2) input").type(id, { delay: 50 });
  cy.get("thead tr:nth-child(3) td:nth-child(3) input").type(firstName, { delay: 50 });
  cy.get("thead tr:nth-child(3) td:nth-child(4) input").type(lastName, { delay: 50 });
  cy.get("thead tr:nth-child(3) td:nth-child(5) input").type(userName, { delay: 50 });
  cy.get("thead tr:nth-child(3) td:nth-child(6) input").type(email, { delay: 50 });
  cy.get("thead tr:nth-child(3) td:nth-child(7) input").type(age, { delay: 50 });

  cy.get(".nb-checkmark").click();
})

Cypress.Commands.add('updateUser', function(id, firstName, lastName, userName, email, age) {
  cy.get(":nth-child(1) > .ng2-smart-actions > ng2-st-tbody-edit-delete > .ng2-smart-action-edit-edit > .nb-edit").click();
  
  cy.get("tbody td:nth-child(2) input").as("id");
  cy.get("tbody td:nth-child(3) input").as("firstName");
  cy.get("tbody td:nth-child(4) input").as("lastName");
  cy.get("tbody td:nth-child(5) input").as("userName");
  cy.get("tbody td:nth-child(6) input").as("email");
  cy.get("tbody td:nth-child(7) input").as("age");

  cy.get("@id").clear();
  cy.get("@id").type(id, { delay: 50 });
  cy.get("@firstName").clear();
  cy.get("@firstName").type(firstName, { delay: 50 });
  cy.get("@lastName").clear();
  cy.get("@lastName").type(lastName, { delay: 50 });
  cy.get("@userName").clear();
  cy.get("@userName").type(userName, { delay: 50 });
  cy.get("@email").clear();
  cy.get("@email").type(email, { delay: 50 });
  cy.get("@age").clear();
  cy.get("@age").type(age, { delay: 50 });

  cy.get(".nb-checkmark").click();
})

Cypress.Commands.add('checkUserData', function(id, firstName, lastName, userName, email, age) {
  cy.get("table tr:nth-child(1) td:nth-child(2) div div").should(
    "have.text",
    id,
  );
  cy.get("table tr:nth-child(1) td:nth-child(3) div div").should(
    "have.text",
    firstName,
  );
  cy.get("table tr:nth-child(1) td:nth-child(4) div div").should(
    "have.text",
    lastName,
  );
  cy.get("table tr:nth-child(1) td:nth-child(5) div div").should(
    "have.text",
    userName,
  );
  cy.get("table tr:nth-child(1) td:nth-child(6) div div").should(
    "have.text",
    email,
  );
  cy.get("table tr:nth-child(1) td:nth-child(7) div div").should(
    "have.text",
    age,
  );
  
  })
  
  