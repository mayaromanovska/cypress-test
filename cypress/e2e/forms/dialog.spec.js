describe("Dialog page", () => {
  beforeEach(() => {
    cy.visit("pages/modal-overlays/dialog");
  });

  it("Should display Name dialog with correct elements", () => {
    //click "Enter Name" button
    cy.get("div:nth-child(5) nb-card nb-card-body button").click();

    //check dialog "Enter your name" appears
    cy.get("ngx-dialog-name-prompt").should("be.visible");

    // check elements on "Enter your name" dialog
    cy.get("ngx-dialog-name-prompt nb-card")
      .children("ngx-dialog-name-prompt nb-card nb-card-header")
      .should("be.visible");
    cy.get("ngx-dialog-name-prompt nb-card nb-card-body")
      .children("ngx-dialog-name-prompt input")
      .should("be.visible")
      .and("be.enabled");
    cy.get("ngx-dialog-name-prompt nb-card nb-card-footer")
      .children("button.cancel")
      .should("be.visible")
      .and("be.enabled");
    cy.get("ngx-dialog-name-prompt nb-card nb-card-footer")
      .children("nb-card-footer button:last-child")
      .should("be.visible")
      .and("be.enabled");

    //check title of "Enter your name" dialog
    cy.get("ngx-dialog-name-prompt nb-card nb-card-header").as("dialogTitle");
    cy.get("@dialogTitle").should("have.text", "Enter your name");
  });
});
