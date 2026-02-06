
# 🌗 Theme Preference Web App

A **responsive web page** that allows users to **switch between light and dark themes**. It automatically detects the **OS color scheme** and also supports **manual toggling**. User preferences are saved in **localStorage**.

---

## 🚀 Features

* Automatic detection of **OS color scheme**.
* Manual **toggle button** to switch themes.
* Persistent theme preference using **localStorage**.
* Smooth **transition animation** between themes.
* Theme-aware **button styling**.
* Fully responsive layout.

---

## 📂 Project Structure

```
ThemePreference/
│
├─ ThemePreference.html           # Main HTML page
├─ ThemePreference.css  # Light and dark theme styles
└─ ThemePreference.js   # JS logic for theme detection and toggle
```

## OS theme changes dynamically (only if no user preference exists).

---

## ⚙️ Browser Support

* Chrome, Firefox, Edge, Safari
* Requires support for `prefers-color-scheme`, `classList`, `localStorage`, and media query `change` events.
