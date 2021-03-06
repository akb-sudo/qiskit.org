<p align="center">
  <a href="https://qiskit.org/">
    <img alt="Qiskit" src="https://qiskit.org/images/qiskit-logo.png" width="70" />
  </a>
</p>
<h1 align="center">
  Qiskit's website
</h1>

<h3 align="center">
  ⚛️ 💻
</h3>
<h3 align="center">
  Welcome to Quantum
</h3>
<p align="center">
  Qiskit is an open-source quantum computing software development framework for leveraging today's quantum processors in research, education, and business.
</p>
<p align="center">
  <a href="https://github.com/Qiskit/qiskit.org/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="Qiskit.org is released under the Apache 2.0 License." />
  </a>
  <a href="https://travis-ci.com/Qiskit/qiskit.org">
    <img src="https://travis-ci.com/Qiskit/qiskit.org.svg?branch=master" alt="Current CircleCI build status." />
  </a>
  <a href="https://github.com/Qiskit/qiskit.org/blob/master/CONTRIBUTING.rst">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=qiskit">
    <img src="https://img.shields.io/twitter/follow/qiskit.svg?label=Follow%20@qiskit" alt="Follow @qiskit" />
  </a>
</p>

<h3 align="center">
  <a href="https://qiskit.org/">Home page</a>
  <span> · </span>
  <a href="https://qiskit.org/education/">Education</a>
  <span> · </span>
  <a href="https://qiskit.org/documentation/">Documentation</a>
  <span> · </span>
  <a href="https://qiskit.org/experiments/">Experiments</a>
  <span> · </span>
  <a href="https://qiskit.org/advocates/">Advocates</a>
  <span> · </span>
  Support: <a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM">Slack</a>
</h3>

## What’s In This Document

- [Live](#%EF%B8%8F-live)
- [Technology Used](#-technology-used)
- [Get Up and Running](#-get-up-and-running)
- [Folder Structure](#-folder-structure)
- [How to Contribute](#%EF%B8%8F-how-to-contribute)
- [Available Scripts](#-available-scripts)
- [Open Backlog](#-open-backlog)
- [Maintainers](#-maintainers)

## ⚡️ Live
[Go to Qiskit.org's website](https://qiskit.org/)

## 💻 Technology Used

Qiskit.org is a pre-rendering SPA using [Nuxt.js](https://nuxtjs.org/).

A **pre-rendering SPA** is a single page application that generates a static markup (HTML) at build time. The user, when entering the web, receives HTML (as if it were a static web) but in the meantime, JS files belonging to the SPA are loaded “hydrating” the web until it's completely dynamic.

**[Nuxt.js](https://nuxtjs.org/)** is the biggest framework on top of **[Vue.js](https://vuejs.org/)** to generate *universal* SPAs. Universal or "isomorphic" apps can be pre-rendering or SSR. Since so far we don't need server functions, our website it's just pre-rendering.

We create and run unit tests using [Jest](https://jestjs.io/), ensure avoiding syntax errors using [ESLint](https://eslint.org/) and automate all these previous tools and deployment using [Travis](https://travis-ci.org/).

With this technology we want to **achieve**:
- Separation between content edition and development concerns.
- Use a component based framework like Vue that allow us to reuse part of the UI code in different parts of the application.
- Fast initial page load.
- Index content on Search Engines.
- Test JS unit functions.
- Avoid syntax errors.
- Continuous integration pipeline.

## 🚀 Get Up and Running


1. **Download this repository and go to its folder**

    ```shell
    git clone git@github.com:Qiskit/qiskit.org.git && cd qiskit.org
    ```

2. **Install dependencies**

    ```shell
     npm install
     ```

3. **Run a local server with hot reload at [localhost:3000](localhost:3000)**

    ```shell
    npm run dev
    ```

## 🧐 Folder Structure

    .
    ├── assets
    ├── components
    ├── constants
    ├── content
    ├── deploy
    ├── hooks
    ├── layouts
    ├── mixins
    ├── pages
    ├── plugins
    ├── static
    ├── store
    ├── tests
    ├── textbook
    ├── nuxt.config.js
    ... other third-parties configuration files like ESLint, Jest or Travis

1.  **`/assets`**: Images and assets for the project. You can find more information at [Nuxt's assets directory documentation](https://nuxtjs.org/guide/assets/)

2.  **`/components`**: Vue components for the project. You can find more information at [Nuxt's components directory documentation](https://nuxtjs.org/guide/directory-structure#the-components-directory)

3.  **`/constants`**: Constants shared through the whole project.

4.  **`/content`**: Markdown files, website's editable content. They are divided in folders by sections.

5.  **`/deploy`**: Deploy configuration.

6.  **`/hooks`**: Hook functions shared through the whole project.

7.  **`/layouts`**: You can find information at [Nuxt's layout directory documentation](https://nuxtjs.org/guide/directory-structure#the-layouts-directory)

8.  **`/mixins`**: Mixin functions shared through the whole project.

9.  **`/pages`**: This is a starting point because if you want to know what is the website structure, it's the same as this folder's structure. Nuxt reads all the `.vue` files inside this directory and creates the application router based on it. You can find information at [Nuxt's pages directory documentation](https://nuxtjs.org/guide/directory-structure#the-pages-directory). All `.vue` pages prefixed by an underscore are [dynamic routes](https://nuxtjs.org/guide/routing/#dynamic-routes) and we use them to create different pages based on the same template. We also use [nuxt-link](https://nuxtjs.org/guide/routing/) to keep the user inside our webapp router.

10.  **`/plugins`**: You can find information at [Nuxt's plugins directory documentation](https://nuxtjs.org/guide/directory-structure#the-plugins-directory)

11.  **`/statics`**: You can find information at [Nuxt's statics directory documentation](https://nuxtjs.org/guide/directory-structure#the-static-directory)

12.  **`/tests`**: Unit tests made with Jest

13.  **`/textbook`**: Redirect page for textbook

14. **`nuxt-config.js`**: This is the main configuration file for a Nuxt site. You can find information at [Nuxt's config documentation](https://nuxtjs.org/guide/configuration)

## ✏️ How to Contribute

Contributions are always welcome, no matter how large or small. Before contributing, please read the [contributing guide](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md).

## 🛠 Available Scripts

Run a local server enabling inspector agent:
```shell
  npm run dev-debug
```

Run unit tests made with [Jest](https://jestjs.io/):
```shell
  npm run test
```

Build static version ready for production, output will generated inside a new folder called `dist`:
```shell
  npm run build
```

Run a local server on the website's production built. Make sure you ran `npm run build` first:
```shell
  npm run start
```

Find syntax errors. We use [ESLint](https://eslint.org/):
```shell
  npm run lint
```

Autofix linter:
```shell
  npm run fix-lint
```

## 🗓 Open backlog

You can see our backlog [here](https://github.com/Qiskit/qiskit.org/projects/2).

## 👩‍💻 Maintainers

by alphabetical order:
<table><tr>
<td align="center"><a href="https://github.com/CatherineKlauss "><img src="https://avatars1.githubusercontent.com/u/50955024?s=460&v=4" width="120px;" alt="Catherine Klauss"/><br /><sub><b>Catherine Klauss</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3ACatherineKlauss" title="Bug reports">🐛</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
<td align="center"><a href="https://github.com/lerongil"><img src="https://avatars3.githubusercontent.com/u/9096989?s=460&v=4" width="120px;" alt="Leron Gil"/><br /><sub><b>Leron Gil</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3Alerongil" title="Bug reports">🐛</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
<td align="center"><a href="https://github.com/marinaaisa"><img src="https://avatars3.githubusercontent.com/u/8567677?s=460&v=4" width="120px;" alt="Marina Aisa"/><br /><sub><b>Marina Aísa</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3Amarinaaisa" title="Bug reports">🐛</a><a href="https://github.com/qiskit/qiskit.org/commits?author=marinaaisa" title="Code">💻</a><span aria-label="Design">🎨</span><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
<td align="center"><a href="https://github.com/delapuente"><img src="https://avatars1.githubusercontent.com/u/757942?s=460&v=4" width="120px;" alt="Salvador de la Puente"/><br /><sub><b>Salvador de la Puente</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3Adelapuente" title="Bug reports">🐛</a><a href="https://github.com/qiskit/qiskit.org/commits?author=delapuente" title="Code">💻</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
<td align="center"><a href="https://github.com/y4izus"><img src="https://avatars2.githubusercontent.com/u/17231966?s=460&v=4" width="120px;" alt="Yaiza García"/><br /><sub><b>Yaiza García</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3Ay4izus" title="Bug reports">🐛</a><a href="https://github.com/qiskit/qiskit.org/commits?author=y4izus" title="Code">💻</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
</tr></table>
