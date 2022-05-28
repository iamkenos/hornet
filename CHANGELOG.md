# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.1.1 (2022-05-28)

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
