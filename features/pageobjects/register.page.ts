class Registration {
    get practiseAutomationHeading() { return $('//h1[text()="Practice your Automation scripts here... "]') }
    get registrationHeading() { return $('//h1[text()="Registration"]') }
    get clickRegistrationTab() { return $('//img[@src="images/registration.jpg"]') }
    get registrationFormHeading() { return $('//h2[text()="Registration Form"]') }
    get firstName() { return $('//form[@id="register_form"]/fieldset[1]/p[1]/input') }
    get lastName() { return $('//form[@id="register_form"]/fieldset[1]/p[2]/input') }
    get matrialStatus() { return $('//form[@id="register_form"]/fieldset[2]//label[1]/input') }
    get hobby() { return $('//form[@class="form_box"]/fieldset[3]//label[1]/input') }
    get phoneNumber() { return $('//form[@class="form_box"]/fieldset[6]/input') }
    get username() { return $('//form[@class="form_box"]/fieldset[7]/input') }
    get eMail() { return $('//form[@class="form_box"]/fieldset[8]/input') }
    get fileUpload() { return $('//input[@type="file"]') }
    get aboutYourself() { return $('//form[@class="form_box"]/fieldset[10]/textarea') }
    get password() { return $('//form[@class="form_box"]/fieldset[11]/input') }
    get confirmPassword() { return $('//form[@class="form_box"]/fieldset[12]/input') }
    get submitButton() { return $('//form[@id="register_form"]/fieldset[13]/input') }
    get reloadPageheading() { return $('//h1[text()="Registration"]') }

}
export default new Registration()