describe("Posts", () => {
  it("should delete post by id", () => {
    const postId = 1;
    const bodyResponse = null;
    cy.api({
      url: `/posts/${postId}`,
      method: "DELETE",
    }).as("deletePost");

    cy.get("@deletePost").its("status").should("equal", 200);
    cy.get("@deletePost").its("body").should("be.empty");
  });
});
