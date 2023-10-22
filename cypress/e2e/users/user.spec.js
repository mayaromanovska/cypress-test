describe("Users Table", () => {
  let id = 1;
  let firstName = "Maya";
  let lastName = "Romanovska";
  let userName = "mayrom";
  let email = "maya.romanovska@gmail.com";
  let age = 35;

  it("should add new user", () => {
    //add user
    cy.addUser(id, firstName, lastName, userName, email, age);

    //check that user added with correct data
    cy.checkUserData(id, firstName, lastName, userName, email, age);
  });

  it("should update user with new data", () => {
    //add user
    cy.addUser(id, firstName, lastName, userName, email, age);

    //update user wit new data
    id = 2;
    firstName = "Sofia";
    lastName = "Rom";
    userName = "sofirom";
    email = "sofia.romanovska@gmail.com";
    age = 6;
    cy.updateUser(id, firstName, lastName, userName, email, age);

    //check that user updated with correct data
    cy.checkUserData(id, firstName, lastName, userName, email, age);
  });
});
