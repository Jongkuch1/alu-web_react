# Task 3 — manual steps

Screenshots for this task must come from the real **React Developer Tools**
Chrome extension, so they need to be captured by hand:

1. Install the [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
   extension in Chrome, if not already installed.
2. Run the task_2 dashboard locally:
   ```
   cd task_2/dashboard
   npm install   # if not already done
   npm start
   ```
   This opens `http://localhost:8564` in your browser.
3. Open Chrome DevTools (Cmd+Option+I) and switch to the **Components** tab.
4. Select the first `NotificationItem` in the tree (the "New course
   available" item). In the props panel on the right, change `type` from
   `"default"` to `"urgent"`. The first notification's text should turn red.
   Take a screenshot and save it as `task_3/change_property.png`.
5. Switch to the **Profiler** tab, click the record button, reload the page
   (or interact with the app) to capture a render, then stop recording.
   Screenshot the flame graph / ranked chart showing render time per
   component (App and its children). Save it as `task_3/profiler.png`.

I can't perform these two steps for you since they require the real Chrome
extension UI, but the dev server is ready to go — just run `npm start` in
`task_2/dashboard`.
