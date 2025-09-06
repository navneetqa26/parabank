import fundstransfer from '../pages/transferfunds';
import LoginPage from '../pages/login';

const fund = new fundstransfer();
const login = new LoginPage();
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
describe('Openning the accounts', () => {
  let testData;

  // Load fixture before all tests
  before(() => {
    cy.fixture('openacc').then((data) => {
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

  it('Opening the account and verify details', () => {
   
    fund.transferclick();
    fund.verifytransfer();
    fund.amountenter();
    fund.newpattern();
    fund.amountto();
    fund.clicktransfer();
  });

  



});
