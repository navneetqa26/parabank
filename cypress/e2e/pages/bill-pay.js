class billtransfer {
  elements = {
   clickbillpay: () => cy.get("a[href='billpay.htm']"),
   billpaymentservice: ()=> cy.get("div[id='billpayForm'] h1[class='title']"),
   payeename:()=> cy.get("input[name='payee.name']"),
   payeeaddress:()=>cy.get("input[name='payee.address.street']"),
   payeecity:()=> cy.get("input[name='payee.address.city']"),
   payeestate:()=> cy.get("input[name='payee.address.state']"),
   payeezipcode:()=>cy.get("input[name='payee.address.zipCode']"),
   payeenumber:()=> cy.get("input[name='payee.phoneNumber']"),
   payeeaccount:()=> cy.get("input[name='payee.accountNumber']"),
   payeeaccountconfirm:()=> cy.get("input[name='verifyAccount']"),
   payeeamount:()=>cy.get('input[name="amount"]'),
   clicksendpayment:()=> cy.get('input[value="Send Payment"]'),
   verifybilldetails:()=>cy.contains("Bill Payment to test in the amount of $50.00 from account 18339 was successful."),

    payeenamerequired:()=>cy.contains("Payee name is required."),
    payeeaddressrequired:()=>cy.contains("Address is required."),
    payeecityrequired:()=> cy.contains("City is required."),
    payeestaterequired:()=> cy.contains("State is required."),
    payeezipcoderequired:()=> cy.contains("Zip Code is required."),
    payeenumberrequired:()=>cy.contains("Phone number is required."),
    payeeaccountrequired:()=>cy.contains("Account number is required."),
    payeenumberverifyrequired:()=>cy.contains("Account number is required."),
    payeeamountrequired:()=>cy.contains("The amount cannot be empty."),

   invalidacccount:()=> cy.contains("Account number is required."),
   invalidacccountnumber:()=> cy.contains("Account number is required."),
   invalidamount:()=> cy.contains("The amount cannot be empty."),



   

  };

  billclick() {
    this.elements.clickbillpay().click();
    this.elements.billpaymentservice().should("be.visible");
    
  }

  Inputpayeeform(name){
    this.elements.payeename().type(name)
  }
    Inputpayeeaddress(address){
    this.elements.payeeaddress().type(address)
  }
   Inputpayeecity(cityname){
    this.elements.payeecity().type(cityname)
  }
   Inputpayeestate(statename){
    this.elements.payeestate().type(statename)
  }
  Inputpayeezipcode(zipcode){
    this.elements.payeezipcode().type(zipcode)
  }
    Inputpayeenumber(number){
    this.elements.payeenumber().type(number)
  }
   Inputpayeeaccount(accnumber){
    this.elements.payeeaccount().type(accnumber)
  }
   Inputpayeeaccountconfirm(accnumberconfirm){
    this.elements.payeeaccountconfirm().type(accnumberconfirm)
  }
  Inputpayeeamount(amount){
    this.elements.payeeamount().type(amount)
  }
   
    Inputpayeepayment(){
    this.elements.clicksendpayment().click();
  }
  
    Inputpayeeverify(){
    this.elements.verifybilldetails().should("be.visible");
  }

  requiredbillform(){
    this.elements.payeenamerequired().should("be.visible");
    this.elements.payeeaddressrequired().should("be.visible");
    this.elements.payeecityrequired().should("be.visible");
    this.elements.payeestaterequired().should("be.visible");
    this.elements.payeezipcoderequired().should("be.visible");
    this.elements.payeenumberrequired().should("be.visible");
    this.elements.payeeaccountrequired().should("be.visible");
    this.elements.payeenumberverifyrequired().should("be.visible");
    this.elements.payeeamountrequired().should("be.visible");
  }

  incorrectform(){
    this.elements.invalidacccount().should("be.visible");
    this.elements.invalidacccountnumber().should("be.visible");
    this.elements.invalidamount().should("be.visible"); 
  }
   

}
export default billtransfer;
