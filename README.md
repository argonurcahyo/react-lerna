# MONOREPO

Monorepo Using Lerna

Nodejs: `v10.15.3`

NPM: `6.9.0`

Yarn: `1.17.3`

Lerna: `3.16.4`

### Clean all lerna projects

`lerna clean -y`

### Install all packages

`lerna bootstrap`

### Run all projects

`lerna run dev`

### Run specific packages

`lerna run dev --scope=@sample/sample-app`

### Run all tests

`lerna run test`

### Add/Install npm package to specific packages

`lerna ls`

`lerna add <package-name> --scope=<lerna-package>`
