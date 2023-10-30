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
    for (let i = 0; i < 100; i++) {
      cy.get("@allPosts")
        .its(`body[${i}]`)
        .should("have.keys", ["userId", "id", "title", "body"]);
    }
  });
});
