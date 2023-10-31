describe("Posts", () => {
  it("should create post", () => {
    const body = {
      title: "foo",
      body: "bar",
      userId: 101,
    };
    cy.api({
      url: "/posts/",
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).as("createPost");

    cy.get("@createPost").its("status").should("equal", 201);
    cy.get("@createPost").its("body").should("deep.include", body);
  });
});
