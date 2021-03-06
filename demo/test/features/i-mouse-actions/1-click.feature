Feature: I. Mouse Actions - Click

  Background:
    Given I am on the "demo" site
      And I click the "I. Mouse Actions" navigation item
      And I expect the section header "I. Mouse Actions" to exist

  Scenario: S01: Create element
    When I click the "#create" button
    Then I expect the "#create-result" element to exist
      But I click the "#create" button again
    Then I expect the "#create-result" element to not exist

  Scenario: S02: Change element text
    When I right click the "#change-txt" button
    Then I expect the "#change-txt-result" element text to contain "Change text"
      And I expect the "#change-txt-result" element text to be "Change text result"
      But I right click the "#change-txt" button again
    Then I expect the "#change-txt-result" element text to not contain "Change text"
      And  I expect the "#change-txt-result" element text to not be "Change text result"

  Scenario: S03: Change element value
    When I middle click the "#change-val" button
    Then I expect the "#change-val-result" field value to contain "Change value"
      And I expect the "#change-val-result" field value to be "Change value result"
      But I middle click the "#change-val" button again
    Then I expect the "#change-val-result" field value to not contain "Change value"
      And I expect the "#change-val-result" field value to not be "Change value result"

  Scenario: S04: Show element
    When I click the "#show" button
    Then I expect the "#show-result" element to be displayed
      But I click the "#show" button again
    Then I expect the "#show-result" element to not be displayed

  Scenario: S05: Enable element
    When I click the "#enable" button
    Then I expect the "#enable-result" element to be enabled
      But I click the "#enable" button again
    Then I expect the "#enable-result" element "disabled" attribute to be "true"

  Scenario: S06: Resize element
    When I click the "#resize" button
    Then I expect the "#resize-result" element to be 336px in width and 54px in height
      And I expect the "#resize-result" element to be 336px in width
      And I expect the "#resize-result" element to be 54px in height
      But I click the "#resize" button again
    Then I expect the "#resize-result" element to not be 336px in width and 54px in height
      And I expect the "#resize-result" element to not be 336px in width
      And I expect the "#resize-result" element to not be 54px in height
  Scenario: S07: Change inner html
    When I double click the "#change-inner-html" button
    Then I expect the "#change-inner-html-result" element text to contain:
      """
      Double click this element
      to revert the changes
      """
      And I expect the "#change-inner-html-result" element text to be:
      """
      Change inner html result

      Double click this element
      to revert the changes made by #change-inner-html
      """
      And I expect the "#change-inner-html-result" element "box-sizing" css property to exist
      But I double click the "#change-inner-html-result" button
    Then I expect the "#change-inner-html-result" element text to not contain:
      """
      Double click this element
      to revert the changes
      """
      And I expect the "#change-inner-html-result" element text to not be:
      """
      Change inner html result

      Double click this element
      to revert the changes made by #change-inner-html
      """
      And I expect the "#change-inner-html-result" element "lipsum" css property to not exist
