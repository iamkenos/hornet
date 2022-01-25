Feature: VI. Requests

  Background:
    Given I open the "Demo" page's url
      And I click the "VI. Requests" navigation item
      And I expect the section header "VI. Requests" to be existing

  Scenario: Send HTTP request by providing a path relative to the base url
    Then I expect the response to the following request to match the snapshot "06-requests/01-get-iframe":
      """
      {
        "url": "/iframe.html"
      }
      """

  Scenario: Send HTTP requests to a completely external url
    Then I expect the response to the following request to not match the snapshot "06-requests/02-get-reqres-users":
      """
      {
        "url": "https://reqres.in/api/users",
        "qs": {
          "page": 2
        }
      }
      """
      And I expect the response to the following request to match the snapshot "06-requests/02-post-reqres-register":
      """
      {
        "url": "https://reqres.in/api/register",
        "method": "POST",
        "content-type": "application/json",
        "form": {
          "email": "lipsum@foobar.com",
          "password": "lipsum"
        }
      }
      """

  Scenario: Intercept AJAX requests sent on button click
    When I start observing the network requests
      And I click the "#ajaxSubmitBtn" button
    Then I expect the network requests with headers to match the snapshot "06-requests/03-post-reqres-login"

  Scenario: Intercept AJAX requests sent on button click and match dynamically
    When I start observing the api calls
      And I click the "#ajaxSubmitBtn" button
    Then I expect the api calls to match the snapshot "06-requests/04-post-reqres-login" with expressions:
      | JSON Path   | Expression |
      | $[0].method | POST       |
      | $[0].body   | ^.+$       |

  Scenario: Intercept AJAX requests sent on button click and match with filtered paths
    When I start to intercept ajax requests
      And I click the "#ajaxSubmitBtn" button
    Then I expect the ajax requests with headers to the following paths to match the snapshot "06-requests/03-post-reqres-login":
      | URL Path   |
      | /api/login |

  Scenario: Manipulate site cookies
    When I delete the site cookies
      And I set the "cookie-1" site cookie value to "value-1"
      And I set the "cookie-2" site cookie value to "value-2"
      And I set the "cookie-3" site cookie value to "value-3"
      And I click the "#showCookiesBtn" button
    Then I expect the "#showCookiesDest" element text to be:
      """
      {
        "cookie-1": "value-1",
        "cookie-2": "value-2",
        "cookie-3": "value-3"
      }
      """
    Then I expect the "cookie-1" site cookie value to contain "ue-1"
      And I expect the "cookie-1" site cookie value to not contain "ue-2"
      And I expect the "cookie-2" site cookie value to be "value-2"
      And I expect the "cookie-2" site cookie value to not be "value-1"
      And I expect the "cookie-2" site cookie to be existing
      And I delete the "cookie-3" site cookie
      And I expect the "cookie-3" site cookie to not be existing
    When I delete the site cookies
      And I click the "#showCookiesBtn" button
    Then I expect the "#showCookiesDest" element text to be:
      """
      {
        "": ""
      }
      """

  Scenario: Check google analytics tracking
    When I start to intercept ajax requests
      And I refresh the page
    Then I expect the captured google analytics to not match the snapshot "06-requests/05-ga-tracking"
