class fundstransfer {
  elements = {
    clickontransfer: () => cy.get("a[href='transfer.htm']"),
    verifytransferpage: () => cy.contains('Transfer Funds'),
    enteramount: () => cy.get("input[id='amount']"),
    fromamount:() => cy.get("select[id='fromAccountId']"),
    toamount:() => cy.get("select[id='toAccountId']"),
    clickontransferbutton: () => cy.get("input[value='Transfer']"),
    verifytransfercomplete: () => cy.contains('You successfully transferred funds.'),
    clicktransferfunds:()=> cy.get("input[value='Transfer']"),
    verifyfunds:()=>cy.contains("$500.00 has been transferred from account #32214 to account #32325."),
    
    newfromaccounts:()=>cy.get('#fromAccountId option'),

   newfromaccount:()=> cy.get('#fromAccountId option').eq(0).then(option => {
  cy.get('#fromAccountId').select(option.text())})
  }
  transferclick() {
    this.elements.clickontransfer().click();
  }
    verifytransfer() {
    this.elements.verifytransferpage().should('be.visible');

    }
    amountenter(){
        this.elements.enteramount().type('500');
    }

    amountfrom(){
        this.elements.fromamount().select('32214');
    }
    amountto(){
        this.elements.toamount().select('32325');
    }
    clicktransfer(){
      this.elements.clicktransferfunds().click()
      this.elements.verifyfunds().should('be.visible');
    }
    newpattern(){
      this.elements.newfromaccount()
    }


}
export default fundstransfer;
