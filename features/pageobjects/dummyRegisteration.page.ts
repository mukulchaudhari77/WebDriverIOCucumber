class DummyRegisteration {
    async homePageLink() { await browser.url("https://www.way2automation.com/demo.html"); }
    get clickOnRegistration() { return $('//ul[@id="toggleNav"]/li[6]/a'); }
    get dummyRegistrationForm() { return $('//form[@class="ajaxsubmit"]/h3'); }
    get name() { return $('//input[@name="name"]') }
    get phone() { return $('//input[@name="phone"]') }
    get city() { return $('//input[@name="city"]') }
    get email() { return $('//input[@name="email"]') }
    get userName() { return $('//form[@id="load_form"]/fieldset[6]/input') }
    get password() { return $('//form[@id="load_form"]/fieldset[7]/input') }
    get submitbutton() { return $('//form[@class="ajaxsubmit"]/div[1]/div[2]/input') }
    get subheadingText() { return $('//p[text()="This is just a dummy form, you just clicked SUBMIT BUTTON"]') }
    get navigateToTestingWebsite() { return $('//form[@class="ajaxsubmit"]/div[2]/div/p[1]/a') }
}
export default new DummyRegisteration()