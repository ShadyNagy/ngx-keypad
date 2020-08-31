# ngx-keypad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Give a Star! :star:
If you like or are using this project please give it a star. Thanks!

## Screenshot 

![ngx-keypad](https://user-images.githubusercontent.com/6225593/91719292-51029680-eb95-11ea-9d43-a25ead8e5d15.gif)

## ✨ Features

- Insert numbers only.
- Numbers with mask so it is can use as password.
- Period can use.

## ☀️ License

<a href="https://github.com/ShadyNagy/ngx-keypad/blob/master/LICENSE" alt="license">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
</a>

## 🖥 Environment Support

* Angular `^9.0.0` [![npm package](https://img.shields.io/npm/v/ngx-keypad?style=flat-square)](https://www.npmjs.com/package/ngx-keypad)

## 📦 Installation

#### NPM

```bash
npm install angular-keypad --save
```

## 🔨 Usage

Import the component modules you want to use into your `app.module.ts` file and [feature modules](https://angular.io/guide/feature-modules).

```ts
import {NgxKeypadModule} from 'ngx-keypad';

@NgModule({
  imports: [ NgxKeypadModule ]
})
export class AppModule {
}
```

In your template write this code.
```html
<keypad [showPeriod]="true" [isPassword]="false" [(data)]="result"></keypad>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [showPeriod] | Show period button or not | boolean | true |
| [isPassword] | Write astrics in the field | boolean | false |
| [background] | Component background | string | '#ccc' |
| [width] | Component width can be for ex 400px | string | '100%' |
| [padding] | Component padding can be for ex 20px | string | '10px' |
| [(data)] | Data input and output | string | '' |

## 🔗 Links

* [NPM](https://www.npmjs.com/package/ngx-keypad)
* [Website](http://www.shadynagy.com)
* [LinkedIn](https://www.linkedin.com/in/shadynagy)
* [Twitter](https://twitter.com/ShadyNagy_)

## ⌨️ Development

```bash
$ git clone git@github.com:ShadyNagy/ngx-keypad.git
$ cd ngx-keypad
$ npm install
$ npm run start
```

## 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/shadynagy/ngx-keypad/pulls)

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/shadynagy/ngx-keypad/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/shadynagy/ngx-keypad/pulls) or as [GitHub issues](https://github.com/shadynagy/ngx-keypad/issues).

## 🎉 Users

- [ShadyNagy](http://www.shadynagy.com/)

> We list some users here, if your company or product uses ngx-keypad, let us know [here](https://github.com/shadynagy/ngx-keypad/issues/8)!
