Feature: This is for Registration and validation of the way2automation page

    Scenario: Registration using Personal Information
        Given This is the Home page of way2automation
        When I Click on Registration
        Then I get navigated on another page and see the Heading Text as "DUMMY REGISTRATION FORM"
        When I Enter the Personal information in all fields as
        When I click on Submit Button
        Then I see popup text as "This is just a dummy form, you just clicked SUBMIT BUTTON"
        When I Click on Enter The Testing Website
        Then I should navigate to another page and see "Practice Your Automation Scripts Here..."
        Then I scroll down and see test as "Registration"
        When I click on the Registration tab
        Then I will navigate to another page and see heading subtitle "Registration Form"
        When I fill all data fields in the page as And click submit
        Then the page gets reloaded and other form page gets displayed Heading text as "Registration"


    Scenario: Select option in Dropdown

        When I hover on Dyanmic Elements and click on dropdown option
        Then I see the Heading Text "Dropdown"
        When I click on Enter country
        When I select country India option from dropdown India is selected

    Scenario: Handle the new window

        When I Click on Frame and windows
        Then I see the Heading as "Frames And Windows"
        When I click on New Browser Tab in open new window
        Then I should get navigated to new Tab and see text "New Browser Tab"
