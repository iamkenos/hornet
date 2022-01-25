Feature: 0. Something

  Background:
    Given I have a screen that is 1900 by 1200 pixels
      And I open the "Demo" page's url
      And I click the "I. Mouse Actions" navigation item
      And I expect the section header "I. Mouse Actions" to exist

  Scenario: This is a flow I want to test but all the steps aren't ready yet
    When I do something
      And I do something else
    Then I expect something to happen

  Scenario: This is a flow I want to test and some of the steps are ready
    When I click the "#createElemBtn" button
      And I do something else
    Then I expect the "#createElemDest" element to exist
