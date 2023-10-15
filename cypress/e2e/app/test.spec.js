describe("Stepper page", () => {
  it("should find text on the page", () => {
    cy.visit("pages/layout/stepper");
    cy.get("h3").first().should("have.text", "Step content #1");
  });
});
