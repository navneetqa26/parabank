import updateuserprofile from '../pages/update-profile';
import LoginPage from '../pages/login';

const profile = new updateuserprofile();
const login = new LoginPage();
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
describe('Openning the accounts', () => {
  let testData;

  // Load fixture before all tests
  before(() => {
    cy.fixture('updateprofile').then((data) => {
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

  it('Update profile details', () => {
   profile.profileFunction()
   profile.fistnameprofile(testData.formdetails.name)
   profile.lastprofile(testData.formdetails.last)
   profile.addresses(testData.formdetails.address)
   profile.city(testData.formdetails.cityname)
   profile.street(testData.formdetails.streetname)
   profile.zipcode(testData.formdetails.zipcodenumber)
   profile.phone(testData.formdetails.phonenumber)
   profile.profileclick()

   
   
  });

  



});
