Feature: III. Browser Context - Browser prompts

  Background:
    Given I am on the "demo" site
      And I click the "III. Browser Context" navigation item
      And I expect the section header "III. Browser Context" to exist

  Scenario: S01: Show alert prompt
    When I click the "#show-alert-prompt" button
    Then I expect an alert to be opened
      And I expect the alert text to contain "Show alert"
      And I expect the alert text to be "Show alert prompt result"
      But I accept the alert
    Then I expect the alert to not be opened

  Scenario: S02: Show confirm prompt
    When I click the "#show-confirm-prompt" button
    Then I expect a confirm box to be opened
      And I expect the confirm box text to contain "Show confirm prompt"
      And I expect the confirm box text to be "Show confirm prompt result"
      But I dismiss the confirm box
    Then I expect the confirm box to not be opened
      And I expect the "#show-confirm-prompt-result" element text to be "false"

  Scenario: S03: Show input prompt
    When I click the "#show-input-prompt" button
      And I type "lorem ipsum" on the prompt
      And I accept the prompt
    Then I expect the prompt to not be opened
      And I expect the "#show-input-prompt-result" element text to be "lorem ipsum"