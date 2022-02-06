Feature: II. Form Elements - Select

  Background:
    Given I am on the "demo" site
      And I click the "II. Form Elements" navigation item
      And I expect the section header "II. Form Elements" to exist

  Scenario: S01: Select option
    When I click the "<SELECT>" element
      And I script click the "<SELECT><OPTION>" element
    Then I expect the "<SELECT><OPTION>" field "class" attribute to contain "selected"
      And I expect the option with index "0" from the "#input-select" dropdown to be selected
      And I expect the option with index "1" from the "#input-select" dropdown to not be selected

    Examples:
      | SELECT                                 | OPTION                       |
      | //select[@id='input-select']/parent::* | //li[contains(.,'Option 1')] |

  Scenario: S02: Multiple select
    When I click the "<SELECT>" element
      And I script click the "<SELECT><OPTION_1>" element
      And I script click the "<SELECT><OPTION_2>" element
    Then I expect the "<SELECT><OPTION_1>" field "class" attribute to contain "selected"
    Then I expect the "<SELECT><OPTION_2>" field "class" attribute to contain "selected"
      And I expect the option with index "0" from the "#input-select-multi" dropdown to be selected
      And I expect the option with index "1" from the "#input-select-multi" dropdown to not be selected
      And I expect the option with index "2" from the "#input-select-multi" dropdown to not be selected

    Examples:
      | SELECT                                       | OPTION_1                     | OPTION_2                     |
      | //select[@id='input-select-multi']/parent::* | //li[contains(.,'Option 1')] | //li[contains(.,'Option 2')] |

  Scenario: S03: Option groups
    When I click the "<SELECT>" element
      And I script click the "<SELECT><OPTION>" element
    Then I expect the "<SELECT><OPTION>" field "class" attribute to contain "selected"
      And I expect the option with value "1" from the "#input-select-groups" dropdown to not be selected

    Examples:
      | SELECT                                        | OPTION                       |
      | //select[@id='input-select-groups']/parent::* | //li[contains(.,'Option 1')] |
