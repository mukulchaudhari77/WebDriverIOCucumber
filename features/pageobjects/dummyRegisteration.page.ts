import report from "@wdio/allure-reporter"
class DummyRegisteration {
    get clickOnRegistration() { return $('//ul[@id="toggleNav"]/li[6]/a'); }
    get dummyRegistrationForm() { return $('//form[@class="ajaxsubmit"]/h3'); }
    get name() { return $('//input[@name="name"]') }
    get phoneNumber() { return $('//input[@name="phone"]') }
    get city() { return $('//input[@name="city"]') }
    get email() { return $('//input[@name="email"]') }
    get userName() { return $('//form[@id="load_form"]/fieldset[6]/input') }
    get password() { return $('//form[@id="load_form"]/fieldset[7]/input') }
    get submitbutton() { return $('//form[@class="ajaxsubmit"]/div[1]/div[2]/input') }
    get subheadingText() { return $('//p[text()="This is just a dummy form, you just clicked SUBMIT BUTTON"]') }
    get navigateToTestingWebsite() { return $('//form[@class="ajaxsubmit"]/div[2]/div/p[1]/a') }
    async clickRegistration() {
        await this.clickOnRegistration.click()
        report.addStep(`Click Registration : ${await this.clickOnRegistration.selector}`)
    }
    async setName(firstName: string) {
        await this.name.setValue(firstName)
        report.addStep(` Set the Name as : ${firstName}`)
    }
    async setPhone(phonenumber: string) {
        await this.phoneNumber.setValue(phonenumber)
        report.addStep(` Set the Phone Number as : ${phonenumber}`)
    }
    async setEmail(email: string) {
        await this.email.setValue(email)
        report.addStep(` Set the email as : ${email}`)
    }
    async setCity(city: string) {
        await this.city.setValue(city)
        report.addStep(` Set the city as : ${city}`)
    }
    async setUsername(userName: string) {
        await this.userName.setValue(userName)
        report.addStep(` Set the Username as : ${userName}`)
    }
    async setPassword(password: string) {
        await this.password.setValue(password)
        report.addStep(` Set the password as : ${password}`)
    }
    async clickSubmit() {
        await this.submitbutton.click()
        report.addStep(`Click Submit Button : ${await this.submitbutton.selector}`)
    }
    async navigateToTestWebsite() {
        await this.navigateToTestingWebsite.click()
        report.addStep(`Click Navigate to Testing Website : ${await this.navigateToTestingWebsite.selector}`)
    }
}
export default new DummyRegisteration()