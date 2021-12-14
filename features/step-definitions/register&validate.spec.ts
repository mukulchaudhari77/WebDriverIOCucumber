import { Given, Then, When } from "@wdio/cucumber-framework";
import dummyRegisterationPage from "../pageobjects/dummyRegisteration.page";
import registrationDetails from "../testdata/registrationDetails.json";
import registerPage from "../pageobjects/register.page";
import dropDownPage from "../pageobjects/dropDown.page";
import windowsPage from "../pageobjects/windows.page";

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
    await dummyRegisterationPage.name.setValue(registrationDetails.DummyRegistrationDetails.Name)
    await dummyRegisterationPage.phone.setValue(registrationDetails.DummyRegistrationDetails.phone)
    await dummyRegisterationPage.email.setValue(registrationDetails.DummyRegistrationDetails.email)
    await dummyRegisterationPage.city.setValue(registrationDetails.DummyRegistrationDetails.city)
    await dummyRegisterationPage.userName.setValue(registrationDetails.DummyRegistrationDetails.username)
    await dummyRegisterationPage.password.setValue(registrationDetails.DummyRegistrationDetails.password)
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
    await registerPage.firstName.setValue(registrationDetails.registrationDetails.FirstName)
    await registerPage.lastName.setValue(registrationDetails.registrationDetails.LastName)
    await registerPage.matrialStatus.click()
    await registerPage.hobby.click()
    await registerPage.phoneNumber.setValue(registrationDetails.registrationDetails.PhoneNumber)
    await registerPage.eMail.setValue(registrationDetails.registrationDetails.Email)
    await registerPage.aboutYourself.setValue(registrationDetails.registrationDetails.AboutYoutself)
    await registerPage.password.setValue(registrationDetails.registrationDetails.Password)
    await registerPage.confirmPassword.setValue(registrationDetails.registrationDetails.ConfirmPassword)
    await registerPage.submitButton.click()
});
Then(/^the page gets reloaded and other form page gets displayed Heading text as \"([^\"]*)\"$/, async (registration) => {
    await expect(registerPage.registrationHeading).toHaveText(registration)
});




When(/^I hover on Dyanmic Elements and click on dropdown option$/, async () => {
    await dropDownPage.hover.scrollIntoView()
    // await dropDownPage.hover.moveTo()
    await dropDownPage.clickDropdown.click()
});
Then(/^I see the Heading Text \"([^\"]*)\"$/, async (dropdown) => {
    await expect(dropDownPage.dropdownHeading).toHaveText(dropdown)
});

When(/^I click on Enter country$/, async () => {
    await dropDownPage.clickOnEnterCountry.click()
});

When(/^I select country India option from dropdown India is selected$/, async () => {
    await dropDownPage.clickOnPleaseenter.click()
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
// Then(/^I should see the text as \"([^\"]*)\"$/, async (opennewsepratewindow) =>{
//   await expect(windowsPage.openNewWindowtext).toHaveText(opennewsepratewindow)
//   });
// When(/^I click on Open New Separate Window$/, async () => {
//     await windowsPage.openNewWindow.click()
// });

// When(/^I get navigated to new Tab$/, async () => {
//     const newtab = await browser.getWindowHandles()
//     await browser.switchToWindow(newtab[3])
// });
// Then(/^I see text \"([^\"]*)\"$/, async (newbrowsertab) => {
//     await expect(windowsPage.NewBrowserTab).toHaveText(newbrowsertab)
// });