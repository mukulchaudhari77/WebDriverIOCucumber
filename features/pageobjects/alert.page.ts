import report from "@wdio/allure-reporter"
class Alert {
    get selectAlert() { return $('//a[text()="Alert"]') }
    get alertHeading() { return $('//div[@class="container margin-top-20"]/h1') }
    get selectClickButtonToDiplayAlertBox() { return $('//button[text()="Click the button to display an alert box:"]') }
    get iframe() { return $('//iframe[@src="alert/simple-alert.html"]') }
    async clickOnAlert() {
        await this.selectAlert.click()
        report.addStep(`Click on Alert : ${await this.selectAlert.selector}`)
    }
    async clickOnClickButtonToDiplayAlertBox() {
        await this.selectClickButtonToDiplayAlertBox.click()
        report.addStep(`Click on Alert : ${await this.selectClickButtonToDiplayAlertBox.selector}`)
    }
}
export default new Alert();
