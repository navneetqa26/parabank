import LoginPage from '../pages/login';

const login = new LoginPage();

describe('Signup Test Suite', () => {
  let testData;

  // Load fixture before all tests
  before(() => {
    cy.fixture('login').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/index.htm');   // loads home page
  });

  it('Verify that user can login successfully with valid credentials', () => {
    login.usernametype(testData.validUser.username);
    login.passwordtype(testData.validUser.password);
    login.loginclick();
    login.verifyloginpage();
  });
  it('Verify that user can login successfully with valid credentials and then logout', () => {
    login.usernametype(testData.validUser.username);
    login.passwordtype(testData.validUser.password);
    login.loginclick();
    login.verifyloginpage();
    });


  
  it('Verify that user cannot login successfully with invalid credentials', () => {
    login.invalidusernametype(testData.invalidUser.username);
    login.invalidpasswordtype(testData.invalidUser.password);
    login.invalidLoginpageclick();
    login.verifyinvalidloginpage();
  });

});
