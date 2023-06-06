
<p align="center">
    <img alt="logo" src="https://img11.360buyimg.com/imagetools/jfs/t1/211965/25/7152/22022/61b16785E433119bb/aa41d7a9f7e823f3.png" width="150" style="margin-bottom: 10px;">
</p>

<p align="center">JD-style mobile UI components based on Vue2 & Vue3 that support users to develop H5 and mini-programs.</p>

<p align="center">
    <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
    <img src="https://img.shields.io/codecov/c/github/jdf2e/nutui" alt="coverage"/>
    <img src="https://img.shields.io/npm/l/@nutui/nutui.svg" alt="license"/>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/v/@nutui/nutui.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@nutui/nutui">
    <img src="https://img.shields.io/npm/dt/@nutui/nutui.svg?style=flat-square">
    </a>
</p>
<p align="center">
    <img src="https://img.shields.io/github/contributors/jdf2e/nutui" alt="GitHub contributors">
    <img src="https://img.shields.io/github/commit-activity/m/jdf2e/nutui" alt="GitHub commit activity">
    <img src="https://img.shields.io/github/issues-closed/jdf2e/nutui" alt="GitHub closed issues">
    <img src="https://img.shields.io/github/commits-since/jdf2e/nutui/latest/v4" alt="GitHub commits since latest release (by date)">
    <img src="https://img.shields.io/github/release-date/jdf2e/nutui" alt="GitHub Release Date">
</p>

<p align="center">
   <img src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png" width="164" alt="NutUI" />
  &nbsp;
   <img src="https://img10.360buyimg.com/imagetools/jfs/t1/211804/23/22232/12144/634e4801Eac435cb6/cfd9e1773cf9423d.png" width="167" title="Scan the QR code with JD APP">
  &nbsp;
  <img src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg" width="166" title="Scan the QR code with WeChat">
  &nbsp;
   <img src="https://img12.360buyimg.com/imagetools/jfs/t1/205124/1/15643/30360/62aad730Ea5734bf9/703bb91a0b73282f.png" width="170" title="Scan the QR code with Alipay">
</p>

---

> Nut[nʌt]: the one Squirrel Scrat pursues resolutely for a lifetime and will never let go even if it causes a catastrophe from the animated film ***Ice Age***.

[简体中文](./README.md) | English

## Features

* 🚀 70+ High Quality Components
* 💪 Write Once, Multi-End Use
* 📖 Based on JD APP 10.0 Visual Specifications
* 🍭 Support Tree Shaking
* 📖 Extensive Documentation and Demos
* 💪 Written in TypeScript
* 💪 Support SSR (Experimental)
* 🍭 Support Custom Themes with 700+ Style Variables
* 🌍 Support i18n
* 🍭 80%+ Unit Test Coverage
* 📖 Provide Sketch Design Resources

## Document

Site: [nutui.jd.com](https://nutui.jd.com)

[@nutui/nutui](https://nutui.jd.com/h5/vue/4x/#/zh-CN/guide/intro): Mobile H5 Components

[@nutui/nutui-taro](https://nutui.jd.com/taro/vue/4x/#/zh-CN/guide/intro): Taro Mini Programs(weapp, alipay, jd...) & Taro-H5

## Installation

```bash
// H5
npm i @nutui/nutui
```

```bash
// Taro Mini Programs
npm i @nutui/nutui-taro
```

## Usage

```js
import { createApp } from "vue"
import App from "./App.vue"

import NutUI from "@nutui/nutui"
import "@nutui/nutui/dist/style.css"

createApp(App).use(NutUI).mount("#app")
```

## Resources

[NutUI Quick Start](https://www.bilibili.com/video/BV14r4y1e7LK)

[Awesome-NutUI](https://github.com/jdf2e/nutui/blob/v4/awesome.md)

## Themes

NutUI provides several sets of official themes from actual business inside JD.com. If they don't meet your needs, you can use `ConfigProvider`.

* <a href="https://nutui.jd.com" target="_blank">JD APP 10.0 Design (Vue3, default)</a>
* <a href="https://nutui.jd.com/h5/vue/4x/?jdb#/en-US/component/button" target="_blank">JD ToB Mall Design (Vue3)</a>
* <a href="https://nutui.jd.com/h5/vue/4x/?jddkh#/en-US/component/button" target="_blank">JD Enterprise Business Design (Vue3)</a>
* <a href="https://nutui.jd.com/jdt/#/en-US/component/button" target="_blank">JDT Design (Vue3, NutUI3.0)</a>
* <a href="https://nutui.jd.com/jdl/#/cell" target="_blank">JDL Design (Vue2, NutUI4.0)</a>

## Cases

NutUI has been used in our production environment, and widely used in the industry for cross-platform development.
<p>
<img src="https://raw.githubusercontent.com/jdf2e/nutui-user-cases/master/user-cases.jpg" alt="NutUI" />
</p>
<p><a href="https://nutui.jd.com/#/case">View more cases</a></p>
<p>We are collecting more excellent cases, please click <a href="https://get.jd.com/#/survey/index?id=4217247740034539"> here </a> to submit.</p>

## Links

<ul>
    <li>
        <a href="https://github.com/jdf2e/nutui/discussions">
            Discussions (vote with 👍)
        </a>
    </li>
    <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22">
            Feature Requests (vote with 👍)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/labels/bug%203.0">
            Bugs (vote with 👍)
        </a>
    </li>
     <li>
        <a href="https://github.com/jdf2e/nutui/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion">
            Question (vote with 👍)
        </a>
    </li>
</ul>

## Communication

| Version | WeChat Group | JD Dongdong Group |
| --- | --- |--- |
| [NutUI Vue](https://github.com/jdf2e/nutui/issues) | <img src="https://storage.360buyimg.com/nutui-static/image/wx-code.png" width="100" /> Reply 'NutUI' after following | 82957939
| [NutUI x Taro](https://github.com/jdf2e/nutui/issues) | <img src="https://camo.githubusercontent.com/db4276b4ee4b443158195e943e9e678cb4d2afb7580f70d4d817ef0a90413aec/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f7461726f2d6a642d636f6d2f7374617469632f636f6e746163745f7461726f5f6e757475695f71722e706e67" width="100" /> Reply 'NutUI' after following | 1022545110 |

## Join Us

#### NutUI Community

[*Welcome To NutUI  Community*](https://github.com/jdf2e/nutui/issues/1789)

#### Contribute to NutUI

There are some choices of contributing to NutUI as follows, solving issues, fixing bugs, adding new components, i18n, UI customization, platform and cross-end adaptation, etc.

You are very welcome to contribute code to NutUI. Before your pull requests, please read [*NutUI Developer Contributing Guide*](https://github.com/jdf2e/nutui/issues/1671).

## Issue & Discussion

[Report issues to NutUI](https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=en)

> It is highly recommended to read [*How To Ask Questions The Smart Way*](http://www.catb.org/~esr/faqs/smart-questions.html), [*How To Ask Questions Of GitHub Community*](https://github.com/seajs/seajs/issues/545) and [*How to Report Bugs Effectively*](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html), then you can get understanding and help more easily.

[NutUI Discussion](https://github.com/jdf2e/nutui/discussions)

If you have any ideas, questions or suggestions, you can share your opinions here.

## Contributors

Thanks to all the following [developers](https://github.com/jdf2e/nutui/graphs/contributors) who have contributed code to NutUI.

<a href="https://github.com/jdf2e/nutui/graphs/contributors">
  <img src="https://opencollective.com/nutui/contributors.svg?width=890&button=false" alt="contributors">
</a>

## Milestones

[Milestones](https://github.com/jdf2e/nutui/projects)

## Release Notes

NutUI follows [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153). The up-to-date release notes are available on [Release](https://github.com/jdf2e/nutui/releases).

## Github Stargazers

![stargazers](https://starchart.cc/jdf2e/nutui.svg)
