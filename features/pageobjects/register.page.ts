import report from "@wdio/allure-reporter"
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
    async clickRegisterTab() {
        await this.clickRegistrationTab.click()
        report.addStep(`Click Registration Tab : ${await this.clickRegistrationTab.selector}`)
    }
    async navigateToAnotherPage() {
        const newtab = await browser.getWindowHandles()
        await browser.switchToWindow(newtab[2])
    }
    async setFirstName(firstName: string) {
        await this.firstName.setValue(firstName)
        report.addStep(` Set the first Name as : ${firstName}`)
    }
    async setLastName(lastName: string) {
        await this.lastName.setValue(lastName)
        report.addStep(` Set the last Name as : ${lastName}`)
    }
    async setMaritalStatus() {
        await this.matrialStatus.click()
        report.addStep(`Click Registration Tab : ${await this.matrialStatus.selector}`)
    }
    async setHobby() {
        await this.hobby.click()
        report.addStep(`Click Registration Tab : ${await this.hobby.selector}`)
    }
    async setPhoneNumber(phonenumber: string) {
        await this.phoneNumber.setValue(phonenumber)
        report.addStep(` Set the phone number as : ${phonenumber}`)
    }
    async setEmail(email: string) {
        await this.eMail.setValue(email)
        report.addStep(` Set the email as : ${email}`)
    }
    async setFileUpload() {
        const path = require('path');
        const filePath = path.join(__dirname, '../image/allureReportScreenshot.png');
        const remoteFilePath = browser.uploadFile(filePath);
        await this.fileUpload.setValue(await remoteFilePath);
    }
    async setAboutYourself(aboutyourself: string) {
        await this.aboutYourself.setValue(aboutyourself)
        report.addStep(` Set the About yourself as : ${aboutyourself}`)
    }
    async setUsername(username: string) {
        await this.username.setValue(username)
        report.addStep(` Set the Username as : ${username}`)
    }
    async setPassword(password: string) {
        await this.password.setValue(password)
        report.addStep(` Set the Password as : ${password}`)
    }
    async setConfirmPassword(password: string) {
        await this.confirmPassword.setValue(password)
        report.addStep(` Set the Confirm Password as : ${password}`)
    }
    async clickSubmitButton() {
        await this.submitButton.click()
        report.addStep(`Click Submit Button : ${await this.submitButton.selector}`)
    }
}
export default new Registration()