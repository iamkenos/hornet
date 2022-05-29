<!-- markdownlint-disable MD033 -->
<h1 align="center">HORNET</h1>

<p align="center">
  <a href="https://github.com/iamkenos/hornet/actions/workflows/unit-tests.yml">
      <img alt="Unit Tests" src="https://github.com/iamkenos/hornet/actions/workflows/unit-tests.yml/badge.svg">
  </a>
</p>

## About

[WebdriverIO](https://webdriver.io/) that comes with presets and additional features:

- write _**`async`**_ tests with [TypeScript](https://www.typescriptlang.org/docs/handbook/modules.html) and [Cucumber](https://cucumber.io/docs/guides/overview/)
- gherkin statements that can be used out of the box
- browser and elements expected conditions
- generic classes for page objects and custom webcomponents support
- multi-locale support
- internal polling and retries
- reporters:
  - [spec](https://webdriver.io/docs/spec-reporter/)
  - [junit](https://webdriver.io/docs/junit-reporter/)
  - [allure](https://webdriver.io/docs/allure-reporter/)
- services:
  - [devtools](https://webdriver.io/docs/devtools-service/)
  - [intercept](https://webdriver.io/docs/wdio-intercept-service/)
  - [selenium-standalone](https://webdriver.io/docs/selenium-standalone-service/)
  - [image-comparison](https://webdriver.io/docs/wdio-image-comparison-service/)

## Requirements

- NodeJS ≥ 16.3.0 or ≤ LTS
- JRE ≥ 8

## Get Started

You'll need a working knowledge of WebdriverIO to be able to use this library. They have rich documentation so head on over the site and read on if you're not familiar with it yet.

1. Get it: `npm install @iamkenos/hornet`

2. Create a `tsconfig.json` file:

   ```json
   {
     "compilerOptions": {
       "baseUrl": "./",
       "downlevelIteration": true,
       "esModuleInterop": true,
       "types": [
         "@wdio/cucumber-framework",
         "@wdio/selenium-standalone-service",
         "@wdio/browserstack-service",
         "@wdio/devtools-service",
         "wdio-intercept-service",
         "webdriverio/async",
         "@iamkenos/hornet",
         "node"
       ]
     },
     "include": ["./**/*.ts"]
   }
   ```

3. Create your WebdriverIO config file: `wdio.conf.ts`

   ```ts
   import { configure } from "@iamkenos/hornet/config";

   // you can set most of the wdio config props from here, leave some that are restricted.
   // e.g. the `framework` prop cannot be overriden as it's fixed to cucumber
   export const config = configure({
     baseUrl: "https://the-internet.herokuapp.com/"
   });
   ```

4. Create your page metadata files:

   ```ts
   // fixtures/app.meta.ts
   export default {
     default: {
       url: "/",
       title: "The Internet",
       selectors: {
         flash: "#flash"
       }
     }
   };

   // fixtures/login.meta.ts
   import merge from "lodash/merge";
   import app from "./app.meta";

   export default merge({}, app, {
     default: {
       url: "/login",
       selectors: {
         Username: "#username",
         Password: "#password",
         Login: "//button[@type='submit']"
       }
     }
   });

   // fixtures/secure.meta.ts
   import merge from "lodash/merge";
   import app from "./app.meta";

   export default merge({}, app, {
     default: {
       url: "/secure"
     }
   });
   ```

5. Create your feature file: `features/login.feature`

   ```gherkin
   Feature: Login

     Background:
       Given I am on the "login" page

     Scenario: S01: Login with valid credentials
       When I type on the fields:
         | Field    | Value                |
         | Username | tomsmith             |
         | Password | SuperSecretPassword! |
         And I click the "Login" button
       Then I expect to be on the "secure" page
         And I expect the "flash" element text to contain "You logged into a secure area!"

     Scenario: S02: Login with invalid credentials
       When I type on the fields:
         | Field    | Value  |
         | Username | foobar |
         | Password | barfoo |
         And I click the "Login" button
       Then I expect to still be on the "login" page
         And I expect the "flash" element text to contain "Your username is invalid!"
   ```

6. Run it: `npx wdio wdio.conf.ts`

7. Check the results: `npx allure open .reports/allure/html`

8. You can view other gherkin steps available out-of-the-box [here](./demo/test/features).

## Contribute

TODO

## Acknowledgements

Huge thanks to the [WebdriverIO team](https://github.com/webdriverio/webdriverio/blob/master/AUTHORS.md) for their awesome work!

## License

ISC

## TODO

- full api documentation
- other TODOs
