import billtransfer from '../pages/bill-pay';
import LoginPage from '../pages/login';

const bill = new billtransfer();
const login = new LoginPage();
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
describe('Openning the accounts', () => {
  let testData;

  // Load fixture before all tests
  before(() => {
    cy.fixture('billpayeeform').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/index.htm'); 
    login.usernametype(testData.validUser.username)
    login.passwordtype(testData.validUser.password)
    login.loginclick()  // loads home page
    login.verifyloginpage();
  });

  it('Transfer bill to user', () => {
   
    bill.billclick();
    bill.Inputpayeeform(testData.billpay.payeename);
    bill.Inputpayeeaddress(testData.billpay.addressname);
    bill.Inputpayeecity(testData.billpay.cityname);
    bill.Inputpayeestate(testData.billpay.statename);
    bill.Inputpayeezipcode(testData.billpay.zipcodes);
    bill.Inputpayeenumber(testData.billpay.numbers);
    bill.Inputpayeeaccount(testData.billpay.accountnumber);
    bill.Inputpayeeaccountconfirm(testData.billpay.confirmaccountnumber);
    bill.Inputpayeeamount(testData.billpay.amountvalue);
    bill.Inputpayeepayment();
    bill.Inputpayeeverify();   
  });

  it(' Verify Transfer bill with invalid details', () => {
   
    bill.billclick();
    bill.Inputpayeeform(testData.billpay.payeename);
    bill.Inputpayeeaddress(testData.billpay.addressname);
    bill.Inputpayeecity(testData.billpay.cityname);
    bill.Inputpayeestate(testData.billpay.statename);
    bill.Inputpayeezipcode(testData.billpay.zipcodes);
    bill.Inputpayeenumber(testData.billpay.numbers);
    bill.Inputpayeepayment();
    bill.incorrectform(testData.invalidbillpay.incorrectaccountnumber);
    bill.incorrectform(testData.invalidbillpay.incorrectverifyaccountnumber);
    bill.incorrectform(testData.invalidbillpay.incorrectamountvalue);
  });


  it('Transfer bill to user', () => { 

    bill.billclick()
    bill.Inputpayeepayment()
    bill.incorrectform()

  });



});
