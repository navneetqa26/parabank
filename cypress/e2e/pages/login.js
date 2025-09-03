class LoginPage {
  elements = {

    usernameInput: () => cy.get("input[name='username']"),
    passwordInput: () => cy.get("input[name='password']"),
    loginclick: () => cy.get("input[value='Log In']"),
    verifylogin: () => cy.contains('Log Out'),
    clickonlogout: () => cy.contains('Log Out'),
    invalidusernameInput:()=>cy.get("input[name='username']"),
    invalidpasswordInput:()=>cy.get("input[name='password']"),
    invalidloginclick:()=>cy.get("input[value='Log In']"),
    verifyinvalidlogin:()=>cy.contains('The username and password could not be verified.'),
    };

  usernametype(username) {
    this.elements.usernameInput().type(username);
}
passwordtype(password) {
    this.elements.passwordInput().type(password);
}
loginclick() {
    this.elements.loginclick().click();
}
verifyloginpage() {
    this.elements.verifylogin().should('be.visible');
}
logoutclick() {
    this.elements.clickonlogout().click();
}
invalidusernametype(invalidusername) {
    this.elements.invalidusernameInput().type(invalidusername);
}
invalidpasswordtype(invalidpassword) {
    this.elements.invalidpasswordInput().type(invalidpassword);
}
invalidLoginpageclick() {
    this.elements.invalidloginclick().click();
}
verifyinvalidloginpage() {
    this.elements.verifyinvalidlogin().should('be.visible');
}

    
}

export default LoginPage;
