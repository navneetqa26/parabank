import SignupPage from '../pages/signup';

const signup = new SignupPage();

describe('Signup Test Suite', () => {
  let testData;

  // Load fixture before all tests
  before(() => {
    cy.fixture('signup').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/index.htm');   // loads home page
  });

  it('Verify sign up a new user successfully', () => {
    signup.registerclick();
    signup.enterFirstName(testData.newUser.firstName);
    signup.enterLastName(testData.newUser.lastName);
    signup.enteraddresses(testData.newUser.address);
    signup.entercity(testData.newUser.city);
    signup.enterstate(testData.newUser.state);
    signup.enterzipcode(testData.newUser.zipcode);
    signup.enterphone(testData.newUser.phone);
    signup.enterssn(testData.newUser.ssn);
    signup.enterusername(testData.newUser.username + Date.now()); // unique user
    signup.enterPassword(testData.newUser.password);
    signup.submitForm();
    signup.verifyRegistrationSuccess();
  });

  it('Verify sign up with an already existing user and check error', () => {
    signup.registerclick();
    signup.enterFirstName(testData.existingUser.firstName);
    signup.enterLastName(testData.existingUser.lastName);
    signup.enteraddresses(testData.existingUser.address);
    signup.entercity(testData.existingUser.city);
    signup.enterstate(testData.existingUser.state);
    signup.enterzipcode(testData.existingUser.zipcode);
    signup.enterphone(testData.existingUser.phone);
    signup.enterssn(testData.existingUser.ssn);
    signup.enterusername(testData.existingUser.username);
    signup.enterPassword(testData.existingUser.password);
    signup.submitForm();
    signup.verifyRegistrationErrormessage();
  });

  it.only('Required field validation', () => {
    //Required field
    signup.reigterrequiredfield();
  });
});
