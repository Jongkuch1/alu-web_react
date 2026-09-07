# react_intro

React intro project: building a small "school dashboard" application while
progressively learning React fundamentals, JSX, Enzyme testing, and a
hand-rolled Webpack/Babel build.

## Tasks

- **task_0** - Basic `create-react-app` app (`dashboard`) with a header, body,
  and footer.
- **task_1** - Embedding expressions/functions (`utils.js`), and a
  `Notifications` component rendered alongside `App`.
- **task_2** - Login form (email/password/OK) added to `App`, and the
  `Notifications` component extended with a close button, a notification
  list, and priority-based styling.
- **task_3** - Unit tests for `utils.js`, and Enzyme shallow-rendering tests
  for `App` and `Notifications`.
- **task_4** - GitHub Pages deployment configuration (`gh-pages` branch) for
  the `task_3` dashboard.
- **task_5** - The same dashboard rebuilt from scratch with a manual
  Webpack + Babel + Jest/Enzyme setup (no `create-react-app`), with files
  reorganized into `App/`, `Notifications/`, `utils/`, `assets/`, and
  `config/` folders.

## Usage

Each `task_X/dashboard` folder is a standalone npm project.

For `task_0` through `task_4` (create-react-app based):

```
cd task_X/dashboard
npm install
npm start   # dev server
npm test    # test suite (task_3, task_4)
```

For `task_5` (custom Webpack/Babel setup):

```
cd task_5/dashboard
npm install
npm start   # webpack-dev-server with hot reloading
npm run build
npm test    # jest + enzyme
```

## Notes

- The Holberton/ALU logo and favicon assets are locally generated
  placeholders (`src/holberton-logo.jpg`, `src/favicon.ico` /
  `src/assets/*`); swap them for the official brand assets before final
  submission if required.
- Enzyme does not officially support React 18/19, so `task_3` onward pin
  `react`/`react-dom` to `17.0.2` and use `@wojtekmaj/enzyme-adapter-react-17`.
