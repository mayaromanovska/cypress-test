describe("Posts", () => {
  const firstPostID = 1;
  const lastPostID = 100;
  it("should return all posts", () => {
    cy.api({
      url: `/posts`,
      method: "GET",
    }).as("allPosts");

    cy.get("@allPosts").its("status").should("equal", 200);
    cy.get("@allPosts").its("body").should("have.length", 100);
    cy.get("@allPosts").its("body[0].id").should("equal", firstPostID);
    cy.get("@allPosts").its("body[99].id").should("equal", lastPostID);
  });
});
