import { Given, Then, When } from "@wdio/cucumber-framework";
import dummyRegisterationPage from "../pageobjects/dummyRegisteration.page";
import registrationDetails from "../testdata/registrationDetails.json";
import registerPage from "../pageobjects/register.page";
import dropDownPage from "../pageobjects/dropDown.page";
import windowsPage from "../pageobjects/windows.page";
import faker from "faker";

Given(/^This is the Home page of way2automation$/, async () => {
    await dummyRegisterationPage.homePageLink()
    await browser.maximizeWindow()
});
When(/^I Click on Registration$/, async () => {
    await dummyRegisterationPage.clickOnRegistration.click()
});
When(/^I navigate to another page$/, async () => {
    const newtab = await browser.getWindowHandles()
    await browser.switchToWindow(newtab[1])
});

Then(/^I see the Heading Text as \"([^\"]*)\"$/, async (dummyregistrationform) => {
    await expect(dummyRegisterationPage.dummyRegistrationForm).toHaveText(dummyregistrationform)
});
When(/^I Enter the Personal information in all fields as$/, async () => {
    await dummyRegisterationPage.name.setValue(faker.name.firstName())
    await dummyRegisterationPage.phone.setValue(faker.phone.phoneNumber())
    await dummyRegisterationPage.email.setValue(faker.internet.email())
    await dummyRegisterationPage.city.setValue(faker.address.city())
    await dummyRegisterationPage.userName.setValue(faker.internet.userName())
    await dummyRegisterationPage.password.setValue(faker.internet.password())
});
When(/^I click on Submit Button$/, async () => {
    await dummyRegisterationPage.submitbutton.click()
});
Then(/^I see popup text as \"([^\"]*)\"$/, async (thisisjustadummyformyoujustclickedsubmitbutton) => {
    await expect(dummyRegisterationPage.subheadingText).toHaveText(thisisjustadummyformyoujustclickedsubmitbutton)
});
When(/^I Click on Enter The Testing Website$/, async () => {
    await dummyRegisterationPage.navigateToTestingWebsite.click()
});
Then(/^I should navigate to another page and see \"([^\"]*)\"$/, async (practiceyourautomationscriptshere) => {
    await expect(registerPage.practiseAutomationHeading).toHaveText(practiceyourautomationscriptshere)
});
Then(/^I scroll down and see test as \"([^\"]*)\"$/, async (registration) => {
    await expect(registerPage.registrationHeading).toHaveText(registration)
});
When(/^I click on the Registration tab$/, async () => {
    await registerPage.clickRegistrationTab.click()
});
When(/^I  get navigated to another page$/, async () => {
    const newtab = await browser.getWindowHandles()
    await browser.switchToWindow(newtab[2])
});
Then(/^I will navigate to another page and see heading subtitle \"([^\"]*)\"$/, async (registrationform) => {
    await expect(registerPage.registrationFormHeading).toHaveText(registrationform)
});

When(/^I fill all data fields in the page as And click submit$/, async () => {
    await registerPage.firstName.setValue(faker.name.firstName())
    await registerPage.lastName.setValue(faker.name.lastName())
    await registerPage.matrialStatus.click()
    await registerPage.hobby.click()
    await registerPage.phoneNumber.setValue(faker.phone.phoneNumber())
    await registerPage.eMail.setValue(faker.internet.email())
    await registerPage.aboutYourself.setValue(registrationDetails.AboutYoutself)
    await registerPage.username.setValue(faker.internet.userName())
    let password = faker.internet.password()
    await registerPage.password.setValue(password)
    await registerPage.confirmPassword.setValue(password)
    await registerPage.submitButton.click()
});
Then(/^the page gets reloaded and other form page gets displayed Heading text as \"([^\"]*)\"$/, async (registration) => {
    await expect(registerPage.registrationHeading).toHaveText(registration)
});


When(/^I hover on Dyanmic Elements and click on dropdown option$/, async () => {
    await dropDownPage.hover.scrollIntoView()
    await dropDownPage.hover.moveTo()
    await dropDownPage.clickDropdown.waitForClickable()
    await dropDownPage.clickDropdown.click()
});
Then(/^I see the Heading Text \"([^\"]*)\"$/, async (dropdown) => {
    await expect(dropDownPage.dropdownHeading).toHaveText(dropdown)
});
When(/^I click on Enter country$/, async () => {
    await dropDownPage.clickOnEnterCountry.click()
});


When(/^I select country India option from dropdown India is selected$/, async () => {
    await browser.switchToFrame(0)
    await dropDownPage.clickOnPleaseenter.click()
    await dropDownPage.clickOnPleaseenter.waitForClickable()
    await dropDownPage.selectOption.click()
});




When(/^I Click on Frame and windows$/, async () => {
    await windowsPage.clickOnFrameAndWindows.click()
});
Then(/^I see the Heading as \"([^\"]*)\"$/, async (framesandwindows) => {
    await expect(windowsPage.frameAndWindowsHeading).toHaveText(framesandwindows)
});
When(/^I click on Open Separate New Window$/, async () => {
    await windowsPage.clickOnNewWindow.click()
});


When(/^I click on Open New Separate Window$/, async () => {
    await browser.switchToFrame(0)
    await windowsPage.openNewWindow.click()
});
When(/^I get navigated to new Tab$/, async () => {
    const newtab = await browser.getWindowHandles()
    await browser.switchToWindow(newtab[3])
});
Then(/^I see text \"([^\"]*)\"$/, async (newbrowsertab) => {
    await expect(windowsPage.NewBrowserTab).toHaveText(newbrowsertab)
});