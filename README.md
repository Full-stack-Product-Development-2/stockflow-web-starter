# StockFlow Web — Starter

Starting point for the **FED 2.0 Build-Along: Stock Manager Dashboard** activity.

This is the project as it stood *before* the dashboard session: a working layout,
a sidebar that does not navigate yet, a login page and a placeholder home page.
You build everything else by following the activity document.

## Get started

1. **Fork** this repository to your own GitHub profile.
2. **Clone your fork** (not this repository):

   ```bash
   git clone https://github.com/<your-username>/<your-fork-name>.git
   cd <your-fork-name>
   ```

3. Install and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000

## What is already here

| Path | What it is |
| --- | --- |
| `src/App.jsx` | `BrowserRouter` with two hardcoded routes: `/` (home) and `/login` |
| `src/layouts/` | `DashboardLayout` (sidebar + top nav) and `AuthLayout` |
| `src/components/sidebar/` | Sidebar that renders its items from data. Not clickable yet, and the highlighted item is fixed in the data |
| `src/components/ui/` | shadcn components: `button`, `card`, `input`, `label` |
| `src/data/nav_sidebar.jsx` | Sidebar menu data |
| `src/data/mock/` | Test data for the four dashboard pages |
| `src/pages/home`, `src/pages/login` | The two existing pages. `home/com/` shows where page-only components live |

## What you will build

- Data-driven routing and an active sidebar
- Stock Summary, Stock Requests, Distribution Runs and Return Approvals pages

## Saving your work

Commit after every part of the activity, then push to your fork:

```bash
git add .
git commit -m "Part 1: data-driven routing and active sidebar"
git push
```
