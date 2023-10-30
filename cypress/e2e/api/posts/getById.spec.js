describe("Posts", () => {
  it("should return post by id", () => {
    const postId = 1;
    cy.api({
      url: `/posts/${postId}`,
      method: "GET",
    }).as("getPost");

    cy.get("@getPost").its("status").should("equal", 200);
    cy.get("@getPost").its("body.id").should("equal", postId);
  });
});
