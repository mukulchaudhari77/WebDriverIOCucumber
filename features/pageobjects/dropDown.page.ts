import report from "@wdio/allure-reporter"
class Dropdown {
    get hover() { return $('//a[text()="Dynamic Elements"]') }
    get menuDropdown() { return $('//a[text()="Dropdown"]') }
    get dropdownHeading() { return $('//h1[text()="Dropdown"]') }
    get selectEnterCountry() { return $('//ul[@class="responsive-tabs"]/li[2]/a') }
    get iframe() { return $('#example-1-tab-1>.freme_box>.demo-frame') }
    get selectCountryDropDown() { return $('//body/select') }
    get selectOption() { return $('//select[@id="combobox"]/option[102]') }
    async setHover() {
        await this.hover.scrollIntoView()
        await this.hover.moveTo()
        await browser.pause(3000)
    }
    async selectMenuDropdown() {
        await this.menuDropdown.waitForClickable()
        await this.menuDropdown.click()
        report.addStep(`Click Menu Dropdown: ${await this.menuDropdown.selector}`)
    }
    async clickOnEnterCountry() {
        await this.selectEnterCountry.click()
        report.addStep(`Click on the EnterCountry: ${await this.selectEnterCountry.selector}`)
    }
    async clickOnCountryDropdown() {
        await this.selectCountryDropDown.selectByVisibleText("India")
        report.addStep(`Select Country from Dropdown: ${await this.selectCountryDropDown.selector}`)
    }
}
export default new Dropdown();