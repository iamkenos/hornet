# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0](https://github.com/iamkenos/hornet/compare/v0.2.0...v0.3.0) (2022-12-20)


### Features

* **commands:** click with delay option ([8098aa3](https://github.com/iamkenos/hornet/commit/8098aa3dcb34c6a2534dac472d818e8a0628f276))
* **commands:** scroll direction enum ([a30d391](https://github.com/iamkenos/hornet/commit/a30d3912b3f6f5dca211aabfe94451803d1da658))
* expand action enum ([a08b170](https://github.com/iamkenos/hornet/commit/a08b1701a9332c2ef228ae0c1a4413fc60f264ae))
* **gherkin:** reload session ([898424a](https://github.com/iamkenos/hornet/commit/898424a9a0b0aadd85b2562ccb22cccba46f7a87))


### Bug Fixes

* **commands:** add a soft wait for element to be clickable before doing a click action ([fd00322](https://github.com/iamkenos/hornet/commit/fd00322c9d3a8f074b610162e21728b697c39399))
* **commands:** return execute function result ([88e0b53](https://github.com/iamkenos/hornet/commit/88e0b536b9328b2f8a369db75b93f2a6efbd6c99))
* **conditions:** add displayed condition on element snapshot checking ([a9f6575](https://github.com/iamkenos/hornet/commit/a9f6575494a912040509ed3aea84cbb5ae4b3b86))
* **conditions:** allow nullish on getAttribute ([367f2aa](https://github.com/iamkenos/hornet/commit/367f2aa4984d1115395727a13108c16bd3067e79))
* **conditions:** clear conditions upon calling expect ([98de6d4](https://github.com/iamkenos/hornet/commit/98de6d4ca6181312ff89c04abfd1a877b30dfa5e))
* **conditions:** enabled condition ([969515b](https://github.com/iamkenos/hornet/commit/969515b8c1aeeffc0b4e6766cfcd1e2d7b4c2179))
* **conditions:** missing await on snapshot match condition ([b83d129](https://github.com/iamkenos/hornet/commit/b83d129aea08eee151eace4f8e29f8a8e6b3ecdd))
* **conditions:** string contains ([dbb7bdb](https://github.com/iamkenos/hornet/commit/dbb7bdbb15a9ca527a5afb237fa584b743ebf719))
* **config:** add runner and selenium default configurations ([6ab518a](https://github.com/iamkenos/hornet/commit/6ab518a0f689314d702f7e58b1ca9ebf492d9ff3))
* **gherkin:** add href attribute for locating links ([b8567dc](https://github.com/iamkenos/hornet/commit/b8567dc72cb5d7a195f020a5dc948d2057cccb92))


### Refactor

* **generics:** removed toTextArray ([91e31fe](https://github.com/iamkenos/hornet/commit/91e31fe357dff1327f3b8f059f7aea22ebe3659f))


### Chore

* shrinkwrap ([69cef27](https://github.com/iamkenos/hornet/commit/69cef270d09e2057b809c9e31156c93e82f37155))

## [0.2.0](https://github.com/iamkenos/hornet/compare/v0.1.2...v0.2.0) (2022-06-04)


### Features

* **commands:** text compare context enum ([93886ab](https://github.com/iamkenos/hornet/commit/93886abe086c6c3010e290c87ff3a957b1db52a7))
* **generics:** getByIndexedXPath ([08c14c6](https://github.com/iamkenos/hornet/commit/08c14c6ff57988e18eeb1d1ba0c9cc46939a69fa))


### Bug Fixes

* **conditions:** import path on ga and request matchign expected conditions ([ba2c6b5](https://github.com/iamkenos/hornet/commit/ba2c6b5042d0d5a2ee702aaee2cb411906ce81cf))


### Refactor

* **conditions:** change not param to preferred to avoid confusion ([492c1f9](https://github.com/iamkenos/hornet/commit/492c1f9977863c605c242624074e6acbb09ee595))
* **gherkin:** negate not condition for then steps ([f9fc00c](https://github.com/iamkenos/hornet/commit/f9fc00c75a6f40d82ff71b92b9d1e64df9f0629f))

### [0.1.2](https://github.com/iamkenos/hornet/compare/v0.1.1...v0.1.2) (2022-05-28)

### Features

- **all:** add types ([1170f42](https://github.com/iamkenos/hornet/commit/1170f42d446ea150bc7bb04d2b1c82248e985742))
- **commands:** element custom commands ([13103f8](https://github.com/iamkenos/hornet/commit/13103f8299c43beb8f35a81916a4a863d7258b53))
- **commands:** expected conditions & browser custom commands ([6070dae](https://github.com/iamkenos/hornet/commit/6070dae8462512b84f3de971e351e3b503fcac22))
- **commands:** introduced clearLocalStorage and clearSessionStorage browser commands ([ead9ada](https://github.com/iamkenos/hornet/commit/ead9ada931902aced388fe28bd882af50f4209fb))
- **commands:** more browser commands and steps ([a9d0d01](https://github.com/iamkenos/hornet/commit/a9d0d01d547cb8016a3344e2ccd21a60368e10c0))
- **conditions:** devtools and intercept service ([27aea21](https://github.com/iamkenos/hornet/commit/27aea21c2725219e4a847006abbb2db365d364e2))
- **conditions:** image snapshot diffing ([1150b52](https://github.com/iamkenos/hornet/commit/1150b522ba70051a474014d97e75fc88f68cc501))
- **generics:** generic page ([38759e9](https://github.com/iamkenos/hornet/commit/38759e993d0d319a123d54103e7ad8d76a993f6e))
- **generics:** generic web component ([f30dd7d](https://github.com/iamkenos/hornet/commit/f30dd7d6726e64d92b7e8aa5f3f165925061f279))
- **gherkin:** added new gherkin tokens ([23764d7](https://github.com/iamkenos/hornet/commit/23764d7b5fe38145e2c597f2549109f2dae3dd39))
- **gherkin:** return status of PENDING documents as pending ([9d00a83](https://github.com/iamkenos/hornet/commit/9d00a833aa958bfc717ef85c34afc9f3673342e5))
- **gherkin:** seeded gherkin steps ([cd48f0c](https://github.com/iamkenos/hornet/commit/cd48f0c380f52876f6364dbcaaec085c26fc5add))
- **gherkin:** support conf and rand tokens ([3763c5a](https://github.com/iamkenos/hornet/commit/3763c5ad1e0996cd2b472c31273a0c94644e59a1))
- limited exports ([bd8b9fe](https://github.com/iamkenos/hornet/commit/bd8b9fea6a95f7b7846f75cceb78ecd790d55975))
- **matchers:** experimented with wdio expect matchers ([8fc2c2f](https://github.com/iamkenos/hornet/commit/8fc2c2fe8876c9ea715725bba66445866da20af4))
- **wdio:** wdio samples and packages ([4c574cb](https://github.com/iamkenos/hornet/commit/4c574cb08f160bea9f3dcea5738b8b8e7d364c2b))

### Bug Fixes

- **common:** image attachment and drag action ([016a2ba](https://github.com/iamkenos/hornet/commit/016a2ba53290691ebfa981138acb7eeb56910629))
- **conditions:** add another check for enabled condition ([d77381f](https://github.com/iamkenos/hornet/commit/d77381fef336269e96792073d49d9ec8ad8ec696))
- **conditions:** build filename should take from options on snapshot match condition ([c172b30](https://github.com/iamkenos/hornet/commit/c172b309584a9678697ad95420d10a030f518e82))
- **generics:** selector stitching and incorrect conditions ([1e7a9d5](https://github.com/iamkenos/hornet/commit/1e7a9d5b1a85179f10c187412775e77803dea449))
- **gherkin:** browser and element defs ([29710b1](https://github.com/iamkenos/hornet/commit/29710b118aaa1fc88dba6dabbd7b9709f07382e4))
- **gherkin:** when set values ([757d567](https://github.com/iamkenos/hornet/commit/757d567a1917ebf4428f8f556bf379839168b630))

### Refactor

- **all:** imports, config, named exports ([8f1642f](https://github.com/iamkenos/hornet/commit/8f1642fa5484e0bfc1a5742ed41771da84e3e37b))
- **all:** tspaths ([25acca6](https://github.com/iamkenos/hornet/commit/25acca6c93dc81dc5ac80c82fbb92554db3d82ec))
- **build:** types ([693ab48](https://github.com/iamkenos/hornet/commit/693ab48bfd3de4ec9e0a4a015e800c76ea10f0f2))
- **commands,common,conditions,gherkin:** string and file utils ([bede1f6](https://github.com/iamkenos/hornet/commit/bede1f6b5cf8dd6c82f4af0025ef273e47a334b0))
- **common:** allure and files adapter ([bd2b57e](https://github.com/iamkenos/hornet/commit/bd2b57e345e55164f501ddac00d7eaa2750ffaf2))
- **conditions:** destructure options network request match build include props ([b936561](https://github.com/iamkenos/hornet/commit/b93656167bcdb2763068a44d55b2194622a9a466))
- **conditions:** expected conditions ([6661d85](https://github.com/iamkenos/hornet/commit/6661d859a39d13845177be4b7d9490947a11f775))
- **config:** reworked base configuration ([637cc62](https://github.com/iamkenos/hornet/commit/637cc62dd546aa5cf4d4cdc23707761136458539))
- **generics:** removed merge on meta adapter ([a034248](https://github.com/iamkenos/hornet/commit/a034248051ce699d341feb79eaaf432266c33676))
- **gherkin:** convert meta and gherkin utils to static classes ([3178052](https://github.com/iamkenos/hornet/commit/3178052bc763a901d3f05e6b207e9bb240d8309f))
- **gherkin:** include optional element index on steps ([44e6249](https://github.com/iamkenos/hornet/commit/44e6249729deb8b3db10e9a66b4d25033e110c4d))
- **imports:** move packages out of core ([de13083](https://github.com/iamkenos/hornet/commit/de13083c7c0c14a1ea21738df35175aeae5b9719))
- **imports:** smaller lodash imports ([127ff04](https://github.com/iamkenos/hornet/commit/127ff041031e7568ac1577204c8d4cffb3cb61b2))
- **matchers:** matchers and assert commands ([671ce5f](https://github.com/iamkenos/hornet/commit/671ce5fba7b2344007786481085dccbbfb453987))
- rename Json references to JSON ([b7bf255](https://github.com/iamkenos/hornet/commit/b7bf2551648acd2e35f4d90157f21cc5a33c6c5e))
- **types:** tsconfig ([1e4264f](https://github.com/iamkenos/hornet/commit/1e4264f04b876e4005cb95c716a965b1bdac8b89))

### Chore

- **build:** build script ([5d052bc](https://github.com/iamkenos/hornet/commit/5d052bce3aeef41004470ac46ac8efc46d923f92))
- check tsc version ([9af83b3](https://github.com/iamkenos/hornet/commit/9af83b32ac1345b71be3033670f1bf7d7fdf9ca6))
- **conditions:** standardize actual vs expected matching ([fb04988](https://github.com/iamkenos/hornet/commit/fb049886f1f273523cd2a990c9a307bc4250733a))
- **demo:** cleanup demo and sample files ([028d755](https://github.com/iamkenos/hornet/commit/028d7554f92970a120221b9aee7e0f812d0619be))
- **demo:** create new demo app from material theme ([25fc0c6](https://github.com/iamkenos/hornet/commit/25fc0c6e236832da98a63dc8fd5b57ea99bf4a79))
- **demo:** samples and demo files ([1c913d9](https://github.com/iamkenos/hornet/commit/1c913d93c690c02c02b6dfc68d420dfbfd753813))
- **demo:** update demo files ([3e792bc](https://github.com/iamkenos/hornet/commit/3e792bcc618225be26ffeb6377f30caf6c684d19))
- **demo:** update demo tests ([a6faf4d](https://github.com/iamkenos/hornet/commit/a6faf4d1970bc64f5cb73171eab6dc08f03783f8))
- **deps:** add ts-node ([999cec6](https://github.com/iamkenos/hornet/commit/999cec6e639f9579765e37ede2127b6fa8c44883))
- **deps:** dependency bump ([1464e8a](https://github.com/iamkenos/hornet/commit/1464e8afd696931779b76f79c1cedaec1f16d7a5))
- **deps:** dependency upgrades ([5d6dfcc](https://github.com/iamkenos/hornet/commit/5d6dfcc18f1688897ce5afcfba52e2534636f804))
- **deps:** deps housekeeping ([caa9857](https://github.com/iamkenos/hornet/commit/caa9857af202a5500d8d63cc6a65ac823491e0cd))
- **deps:** install callsites ([2007578](https://github.com/iamkenos/hornet/commit/2007578807fa10b4ce8e865acb5ac5146bc14903))
- **deps:** release dependency pins ([9835fac](https://github.com/iamkenos/hornet/commit/9835facd40497edf78dc5e114bb64ff1f59781bd))
- github UT action ([e83a56b](https://github.com/iamkenos/hornet/commit/e83a56b48bdddbdbccaf07b1768eeddd717231ec))
- **linting:** add linting ([ea1c263](https://github.com/iamkenos/hornet/commit/ea1c2632514acceb8bcdae138124da0aa782b5a4))
- **linting:** fix commit lint ([838adbe](https://github.com/iamkenos/hornet/commit/838adbe7af5b2829e878fb94c2706297bc4d81ae))
- **release:** 0.0.1 ([3069dd4](https://github.com/iamkenos/hornet/commit/3069dd47b3de6e9e03b09704211553b5de90bbd8))
- **release:** 0.1.0 ([c867b8d](https://github.com/iamkenos/hornet/commit/c867b8dc0cdab8e748996f0c446f79c2e3763c84))
- **setup:** initial commit ([de473e5](https://github.com/iamkenos/hornet/commit/de473e54b4d44df5fc33140c711b0f9104b1839d))
- **types:** update page and component typings ([81b5107](https://github.com/iamkenos/hornet/commit/81b5107b4a473248bc5a6971f9022aef840eb320))
