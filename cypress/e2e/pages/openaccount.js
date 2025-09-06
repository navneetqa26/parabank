class OpenAccount {
  elements = {
    clickOnOpenAccount: () => cy.get("a[href='openaccount.htm']"),
    accountType: () => cy.get('#type'),
    // ✅ Fix selector: target actual button or input[type=submit]
    clickOnOpenButton: () => cy.get("input[value='Open New Account']"),
    verifyAccountOpen: () => cy.contains('Congratulations, your account is now open.'),
    
  };

  openAccountClick() {
    this.elements.clickOnOpenAccount().click();
  }

  typeOfAccount(account = 'SAVINGS') {
    this.elements.accountType().select(account); 
  }

   clickFunctions() {
  this.elements.clickOnOpenButton().click();

  cy.url().should('include', 'openaccount.htm');

  this.elements.verifyAccountOpen()
    .should('exist');  
  
}

}
export default OpenAccount;
