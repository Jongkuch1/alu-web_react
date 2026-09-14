# React_component

Continuation of the school dashboard project: converting components to
ES6 classes, wiring up lifecycle methods, building reusable/specialized
"containment" components, a logging Higher-Order Component, and
performance-optimized pure components.

## Tasks

- **task_0** - Converts the `App` function component into an ES6 class
  component (`App extends React.Component`). Same rendered output as the
  final `react_props` task.
- **task_1** - Adds a `logOut` prop (`func`, defaults to a no-op) to
  `App`. Adds a `keydown` listener in `componentDidMount` (removed in
  `componentWillUnmount`) that triggers `alert('Logging you out')` and
  calls `logOut` when `ctrl+h` is pressed.
- **task_2** - Converts `Notifications` into a class component with a
  constructor-bound `markAsRead(id)` method that logs
  `Notification $id has been marked as read`. `markAsRead` is passed down
  to `NotificationItem`, whose `<li>` now calls it `onClick` with the
  notification's `id`.
- **task_3** - Introduces `BodySection` (a "containment" component that
  renders a title + arbitrary children) and `BodySectionWithMarginBottom`
  (a specialized wrapper adding a bottom margin via CSS, forwarding props
  with the spread operator). `App` wraps `CourseList` and `Login` in
  `BodySectionWithMarginBottom` and adds a `BodySection` for
  "News from the School".
- **task_4** - Adds a `WithLogging` Higher-Order Component that logs when
  the wrapped component mounts/unmounts and sets a `WithLogging(Name)`
  `displayName`. `App` wraps `Login` with it.
- **task_5** - Wraps `NotificationItem` in `React.memo` so it only
  re-renders when its props change. Adds `shouldComponentUpdate` to
  `Notifications`, re-rendering only when `listNotifications` grows
  longer than before.

## Usage

Each `task_X/dashboard` folder is a standalone Webpack/Babel/Jest project
(no `create-react-app`).

```
cd task_X/dashboard
npm install
npm start        # webpack-dev-server with hot reloading
npm run build
npm test          # jest + enzyme
npm run test-watch
```

## Notes

- Each task folder builds on the previous one's `dashboard`, so the
  project is meant to be reviewed task by task in order.
- `react`/`react-dom` stay pinned to `17.0.2` throughout, since Enzyme does
  not officially support React 18/19.
