class updateuserprofile {
  elements = {
    clickonupdateprofile: () => cy.get("a[href='updateprofile.htm']"),
    verifyupdateprofile:()=>cy.get("#updateProfileForm"),
    typefirstname:()=>cy.get('input[name="customer.firstName"]'),
    typelastname:()=>cy.get('input[name="customer.lastName"]'),
    typeaddresses:()=>cy.get('input[name="customer.address.street"]'),
    typecity:()=>cy.get('input[name="customer.address.city"]'),
    typestreet:()=>cy.get('input[name="customer.address.state"]'),
    typezipcode:()=>cy.get('input[name="customer.address.zipCode"]'),
    typephone:()=> cy.get('input[name="customer.phoneNumber"]'),
    updateprofilebutton:()=> cy.get('input[value="Update Profile"]'),
    updateprofileverify:()=> cy.contains("Your updated address and phone number have been added to the system. ")

   
  }
    profileFunction(){
      this.elements.clickonupdateprofile().click()
      this.elements.verifyupdateprofile().should("be.visible")
    }
    fistnameprofile(name){
        this.elements.typefirstname().clear().type(name)
        }
    lastprofile(last){
    this.elements.typelastname().clear().type(last)
    }
     addresses(address){
    this.elements.typeaddresses().clear().type(address)
    }
    city(cityname){
    this.elements.typecity().clear().type(cityname)
    }
    street(streetname){
    this.elements.typestreet().clear().type(streetname)
    }
    zipcode(zipcodenumber){
    this.elements.typestreet().clear().type(zipcodenumber)
    }
    phone(phonenumber){
    this.elements.typephone().clear().type(phonenumber)
    }
    profileclick(){
    this.elements.updateprofilebutton().click()
    this.elements.updateprofileverify().should("be.visible")
    }

    


}
export default updateuserprofile;
