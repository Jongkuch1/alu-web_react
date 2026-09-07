# react_props

Continuation of the school dashboard project: splitting the monolithic
`App` into reusable, typed components with props, propTypes, shapes, and
list rendering.

## Tasks

- **task_0** - Split `App` into `Header`, `Footer`, and `Login` components
  (Login wrapped in a `Fragment`); `App` becomes the shell that composes
  them plus `Notifications`.
- **task_1** - Enzyme shallow-render tests for `Header`, `Footer`, `Login`,
  and `App` (checks it contains each child component). Adds a
  `test-watch` script.
- **task_2** - Extracts the repeated `<li>` markup in `Notifications` into a
  reusable `NotificationItem` component (`type`, `html`, `value` props),
  with its own tests.
- **task_3** - Manual React DevTools screenshots (prop editing + Profiler).
  See `task_3/HOW_TO.md` — these need to be captured by hand in a real
  Chrome browser with the React Developer Tools extension.
- **task_4** - Introduces `prop-types`, a `CourseList`/`CourseListRow`
  component pair, an `isLoggedIn` toggle on `App` (Login vs CourseList),
  prop types + defaults on `NotificationItem`, and a collapsible
  `displayDrawer` state on `Notifications` with a `menuItem` toggle.
- **task_5** - Adds `CourseShape` and `NotificationItemShape`, drives
  `CourseList`/`Notifications` from `listCourses`/`listNotifications`
  arrays defined in `App`, renders empty-state messages, and loops with
  keys.

## Usage

Each `task_X/dashboard` folder is a standalone Webpack/Babel/Jest project
(no `create-react-app`).

```
cd task_X/dashboard
npm install
npm start        # webpack-dev-server with hot reloading
npm run build
npm test          # jest + enzyme
npm run test-watch  # (task_1 onward) jest --watch
```

## Notes

- Same placeholder logo/favicon/close-icon assets as `react_intro`; swap
  for the official ALU/Holberton assets before final submission if
  required.
- `react`/`react-dom` stay pinned to `17.0.2` throughout, since Enzyme does
  not officially support React 18/19.
