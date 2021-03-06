Feature: III. Browser Context - Browser windows

  Background:
    Given I am on the "demo" site
      And I click the "III. Browser Context" navigation item
      And I expect the section header "III. Browser Context" to exist

  Scenario: S01: Open on same window
    When I click the "#open-same-window" button
    Then I expect the tab count to be 1
      And I expect to be on the "iframe" page
      But I navigate back from the current page
    Then I expect to be on the "demo" site
    When I navigate forward from the current page
    Then I expect to be back on the "iframe" page

  Scenario: S02: Open on new window
    When I open the "demo" page's url on a new window
    Then I expect the tab count to be more than 1
      And I expect the tab count to be less than 3
      But I close the last opened window
    Then I expect the tab count to not be more than 3
      And I expect the tab count to not be less than 0
    When I click the "#open-new-window" button
    Then I expect to still be on the "demo" page
      But I focus on the last opened window
    Then I expect to be on the "iframe" page
      And I expect the page title to be "Demo Iframe"
      And I expect the page title to be the "iframe" page's title
      And I expect the url to be the "iframe" page's url
      And I expect the "#card-1" element image to match the snapshot "iii-browser-context/3-browser-windows/card"
      And I expect the viewport image to match the snapshot "iii-browser-context/3-browser-windows/viewport"
      But I close all other windows
    Then I expect the page title to not be "Demo Iframe"
      And I expect the page title to not be the "iframe" page's title
      And I expect the url to not be the "iframe" page's url
      And I expect the page image to match the snapshot "iii-browser-context/3-browser-windows/page"

  Scenario: S03: Iframe
    When I focus on the "#iframe" iframe
    Then I expect the "iframe" page's "tabs" elements text array to contain:
      | Values |
      | TAB 1  |
      | TAB 3  |
      And I expect the "iframe" page's "tabs" elements text array to be:
      | Values |
      | TAB 1  |
      | TAB 2  |
      | TAB 3  |
      And I expect the "iframe" page's "tabs" elements text array to not contain:
      | Values |
      | TAB 4  |
      | TAB 5  |
      And I expect the "iframe" page's "tabs" elements text array to not be:
      | Values |
      | TAB 1  |
      | TAB 3  |
    When I switch to the parent context
    Then I expect the "iframe" page's "tabs" element to not exist
    When I start observing the network calls
      And I refresh the page
    Then I expect the captured google analytics to not match the snapshot "iii-browser-context/3-browser-windows/ga-tracking"
