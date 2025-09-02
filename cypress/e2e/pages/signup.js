class SignupPage {
  elements = {
    registerLink: () => cy.get("a[href*='register.htm']"),
    firstNameInput: () => cy.get("input[id='customer.firstName']"),
    lastNameInput: () => cy.get("input[name='customer.lastName']"),
    addressesInput: () => cy.get("input[id='customer.address.street']"),
    cityinput: () => cy.get("input[id='customer.address.city']"),
    stateInput: () => cy.get("input[id='customer.address.state']"),
    zipCodeInput: () => cy.get("input[id='customer.address.zipCode']"),
    phoneInput: () => cy.get("input[id='customer.phoneNumber']"),
    ssninput: () => cy.get("input[id='customer.ssn']"),
    usernameInput: () => cy.get("input[name='customer.username']"), // adjust locator
    passwordInput: () => cy.get("input[name='customer.password']"),
    confirmPasswordInput: () => cy.get("input[name='repeatedPassword']"),
    submitBtn: () => cy.get("input[value='Register']"),
    verifyRegistration: () => cy.get("div[id='rightPanel'] p"),
    verifyErrorMessage: () => cy.contains('This username already exists.').should('be.visible')
  };

  registerclick() {
    this.elements.registerLink().click();
    cy.url().should('include', 'register.htm');
  }

  enterFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  enterLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }
  enteraddresses(address) {
    this.elements.addressesInput().type(address);
  }
    entercity(city) {
    this.elements.cityinput().type(city);
  }
    enterstate(state) {
    this.elements.stateInput().type(state);
  }
    enterzipcode(zipcode) {
    this.elements.zipCodeInput().type(zipcode);
  }
    enterphone(phone) {
    this.elements.phoneInput().type(phone);
  }
  enterssn(ssn) {
    this.elements.ssninput().type(ssn);
  }
  

  enterusername(username) {
    this.elements.usernameInput().type(username);
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password);
    this.elements.confirmPasswordInput().type(password);
  }

  submitForm() {
    this.elements.submitBtn().click();
  }

    verifyRegistrationSuccess() {
    this.elements.verifyRegistration().should('contain.text', 'Your account was created successfully. You are now logged in.');
}
    verifyRegistrationErrormessage() {
    this.elements.verifyErrorMessage().should('be.visible');
}

    
}

export default SignupPage;
