import { Given, Then, When } from "@wdio/cucumber-framework";
import dummyRegisterationPage from "../pageobjects/dummyRegisteration.page";
import registrationDetails from "../testdata/registrationDetails.json";
import registerPage from "../pageobjects/register.page";
import dropDownPage from "../pageobjects/dropDown.page";
import windowsPage from "../pageobjects/windows.page";
import faker from "faker";
import homepagePage from "../pageobjects/homepage.page";
import alertPage from "../pageobjects/alert.page";

Given(/^This is the Home page of way2automation$/, async () => {
    await homepagePage.openWebsite()
});
When(/^I Click on Registration$/, async () => {
    await dummyRegisterationPage.clickRegistration()
});
When(/^I navigate to another page$/, async () => {
    const newtab = await browser.getWindowHandles()
    await browser.switchToWindow(newtab[1])
});
Then(/^I see the Heading Text as \"([^\"]*)\"$/, async (dummyregistrationform) => {
    await expect(dummyRegisterationPage.dummyRegistrationForm).toHaveText(dummyregistrationform)
});
When(/^I Enter the Personal information in all fields as$/, async () => {
    await dummyRegisterationPage.setName(faker.name.firstName())
    await dummyRegisterationPage.setPhone(faker.phone.phoneNumber())
    await dummyRegisterationPage.setEmail(faker.internet.email())
    await dummyRegisterationPage.setCity(faker.address.city())
    await dummyRegisterationPage.setUsername(faker.internet.userName())
    await dummyRegisterationPage.setPassword(faker.internet.password())
});
When(/^I click on Submit Button$/, async () => {
    await dummyRegisterationPage.clickSubmit()
});
Then(/^I see popup text as \"([^\"]*)\"$/, async (thisisjustadummyformyoujustclickedsubmitbutton) => {
    await expect(dummyRegisterationPage.subheadingText).toHaveText(thisisjustadummyformyoujustclickedsubmitbutton)
});
When(/^I Click on Enter The Testing Website$/, async () => {
    await dummyRegisterationPage.navigateToTestWebsite()
});
Then(/^I should navigate to another page and see \"([^\"]*)\"$/, async (practiceyourautomationscriptshere) => {
    await expect(registerPage.practiseAutomationHeading).toHaveText(practiceyourautomationscriptshere)
});
Then(/^I scroll down and see test as \"([^\"]*)\"$/, async (registration) => {
    await expect(registerPage.registrationHeading).toHaveText(registration)
});
When(/^I click on the Registration tab$/, async () => {
    await registerPage.clickOnRegisterTab()
});
When(/^I get navigated to another page$/, async () => {
    await registerPage.navigateToAnotherPage()
});
Then(/^I see heading subtitle \"([^\"]*)\"$/, async (registrationform) => {
    await expect(registerPage.registrationFormHeading).toHaveText(registrationform)
});
When(/^I fill all data fields in the page as And click submit$/, async () => {
    await registerPage.setName(faker.name.firstName(), faker.name.lastName())
    await registerPage.setMaritalStatus()
    await registerPage.setHobby()
    await registerPage.setPhoneNumber(faker.phone.phoneNumber())
    await registerPage.setEmail(faker.internet.email())
    await registerPage.setFileUpload()
    await registerPage.setAboutYourself(registrationDetails.AboutYoutself)
    await registerPage.setUsername(faker.internet.userName())
    let password = faker.internet.password()
    await registerPage.setPassword(password)
    await registerPage.setConfirmPassword(password)
    await registerPage.clickOnSubmitButton()
});
Then(/^the page gets reloaded and other form page gets displayed Heading text as \"([^\"]*)\"$/, async (registration) => {
    await expect(registerPage.registrationHeading).toHaveText(registration)
});
When(/^I hover on Dyanmic Elements and click on dropdown option$/, async () => {
    await dropDownPage.setHover()
    await dropDownPage.selectMenuDropdown()
});
Then(/^I see the Heading Text \"([^\"]*)\"$/, async (dropdown) => {
    await expect(dropDownPage.dropdownHeading).toHaveText(dropdown)
});
When(/^I click on Enter country$/, async () => {
    await dropDownPage.clickOnEnterCountry()
});
When(/^I select country India option from dropdown India is selected$/, async () => {
    await browser.switchToFrame(await dropDownPage.iframe)
    await dropDownPage.clickOnCountryDropdown()
    await browser.switchToParentFrame()
});
When(/^I click on alert$/, async () => {
    await alertPage.clickOnAlert()
});
Then(/^I will see the \"([^\"]*)\"$/, async (alert) => {
    await expect(alertPage.alertHeading).toHaveText(alert)
});
When(/^I Click the button to display an alert box:$/, async () => {
    await browser.switchToFrame(await alertPage.iframe)
    await alertPage.clickOnClickButtonToDiplayAlertBox()
    await browser.switchToParentFrame()
});
Then(/^The alert header contains \"([^\"]*)\"$/, async (iamanalertbox) => {
    const alertprompt = await browser.getAlertText()
    expect(alertprompt).toHaveText(iamanalertbox)
    console.log(alertprompt)
    await browser.acceptAlert()
});
When(/^I Click on Frame and windows$/, async () => {
    await windowsPage.clickOnFrameAndWindows()
});
Then(/^I see the Heading as \"([^\"]*)\"$/, async (framesandwindows) => {
    await expect(windowsPage.frameAndWindowsHeading).toHaveText(framesandwindows)
});
When(/^I click on Open Separate New Window$/, async () => {
    await windowsPage.clickOnNewWindow()
});
When(/^I click on Open New Separate Window$/, async () => {
    await browser.switchToFrame(await windowsPage.iframeElement)
    await windowsPage.clickOnOpenNewSeparateWindow()
    await browser.switchToParentFrame()
});
When(/^I get navigated to new Tab$/, async () => {
    await windowsPage.navigateToNewWindow()
});
Then(/^I see text \"([^\"]*)\"$/, async (newbrowsertab) => {
    await expect(windowsPage.NewBrowserTab).toHaveText(newbrowsertab)
});