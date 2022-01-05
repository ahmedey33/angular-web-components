# WebCompTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server
### 1) Build the first web component `ng build --configuration production --output-hashing=none --project=app-demo1 && node ./app-demo1.js`
### 2) Build the second web component `ng build --configuration production --output-hashing=none --project=app-demo2 && node ./app-demo2.js`
### 3) Run the first webcomponents in http server `cd dist/app-demo1 && http-server -p 9010 --cors=\"*\"`
### 4) Run the first webcomponents in http server `cd dist/app-demo1 && http-server -p 9010 --cors=\"*\"`
### 5) Run the main angular application `ng serve`


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
