Feature: V. Delays

  Background:
    Given I open the "Demo" page's url
      And I click the "V. Delays" navigation item
      And I expect the section header "V. Delays" to be existing

  Scenario: Toggle element visibility with delay on button click
    When I click the "#makeElemVisibleBtn" button
    Then I expect the "#makeElemVisibleDest" element to be displayed
      And I expect the page image to match the snapshot "05-delays/01-page"
      And I script click the "#makeElemVisibleBtn" button
    Then I expect the "#makeElemVisibleDest" element to not be displayed

  Scenario: Toggle element enabled state with delay on button click
    When I click the "#makeElemEnabledBtn" button
    Then I expect the "#makeElemEnabledDest" element to be enabled
      And I move to the "#makeElemEnabledDest" element
      And I expect the "#makeElemEnabledDest" element image to match the snapshot "05-delays/02-element"
      But I click the "#makeElemEnabledBtn" button again
    Then I expect the "#makeElemEnabledDest" element to not be enabled

  Scenario: Resize element with delay on button click
    When I move to the "#resizeElemDest" element
      And I click the "#resizeElemBtn" button
    Then I expect the "#resizeElemDest" element to be 250px in width and 250px in height
      And I expect the "#resizeElemDest" element to be 250px in width
      And I expect the "#resizeElemBtn" element to be 46px in height
      And I expect the viewport image to match the snapshot "05-delays/03-viewport"
      But I click the "#resizeElemBtn" button again
    Then I expect the "#resizeElemDest" element to not be 250px in width and 250px in height
      And I expect the "#resizeElemDest" element to not be 250px in width
      And I expect the "#resizeElemBtn" element to not be 45px in height
