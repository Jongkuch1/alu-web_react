# React_inline_styling

Continuation of the school dashboard project: moving away from plain CSS
files toward inline styling and Aphrodite (CSS-in-JS), applying styles
conditionally, making the layout responsive with media queries, and
adding hover/keyframe animations.

## Tasks

- **task_0** - Base copy of `React_component/task_5`. `CourseListRow` now
  sets its row background color with a plain inline `style` object
  (`#f5f5f5ab` for default rows, `#deb5b545` for header rows) instead of
  CSS classes.
- **task_1** - Installs `aphrodite` and converts `App`, `Header`, `Login`,
  `CourseList`, `BodySectionWithMarginBottom`, and `Notifications` to
  define their styling with `StyleSheet.create`/`css()` instead of
  imported `.css` files (the now-unused stylesheets and imports are
  removed). Test files call
  `StyleSheetTestUtils.suppressStyleInjection()` to avoid style-injection
  side effects under Jest/jsdom.
- **task_2** - `NotificationItem` and `CourseListRow` move fully to
  Aphrodite, applying different styles conditionally (`default`/`urgent`
  notification color, `row`/`headerRow`/`headerCell` table styling). The
  remaining `CourseList.css`/`Notifications.css` rules they owned are
  deleted.
- **task_3** - Adds `@media (max-width: 900px)` rules (mobile-first in
  spirit, `max-width` in practice, per the project brief) so that on
  narrow screens: `Login`'s labels/inputs/button stack one per line, the
  open notifications panel takes over the full screen with no `ul`
  padding and 20px text, and each `NotificationItem` spans the full
  width with a bottom border, 20px text, and `10px 8px` padding.
- **task_4** - Adds two Aphrodite keyframe animations (an opacity pulse
  and a bounce via `translateY`) applied together on `:hover` of the
  notifications menu item (1s / 0.5s durations, 3 iterations). The menu
  item floats top-right over everything with a `#fff8f8` background and
  a pointer cursor, and is hidden (via a conditional Aphrodite class,
  not conditional rendering) while the notifications panel is open.

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
- `react`/`react-dom` stay pinned to `17.0.2` throughout, since Enzyme
  does not officially support React 18/19.
- The toolchain (`jest`, `webpack`, `webpack-cli`, `webpack-dev-server`,
  `css-loader`, `style-loader`, `babel-loader`, `cheerio`) is pinned to
  versions that install and run cleanly on Node 12.x/npm 6.x, matching
  the grading environment; each task's `npm install`/`npm test` was
  verified under real Node 12.22.12/npm 6.14.16 as well as a modern
  Node.
