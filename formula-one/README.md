# Formula 1 Stats App (Frontend)

This is the **Frontend** of a Formula 1 Statistics Web App. It allows users to explore up-to-date information about F1 drivers and teams, compare their stats, and manage a list of favorites.

---

## Features

- View current F1 **teams** and **drivers** with detailed stats
- Compare two drivers side-by-side
- Mark favorite teams and drivers
- Toggle between light and dark mode

---

## App Flow

### 1. **Home Page (`/`)**
- Displays an introduction or overview of the app.
  
### 2. **Teams Page (`/teams`)**
- Shows a list of current Formula 1 teams.
- Displays their colors, logos, points, and number of championships won.

### 3. **Drivers Page (`/drivers`)**
- Lists current drivers with stats such as position, points, and team.

### 4. **Comparison Page (`/compare`)**
- Allows users to pick two drivers and compare them head-to-head.

### 5. **Favorites Page (`/favorites`)**
- Users can mark teams or drivers as favorites and view them here.

---

## Tech Stack

- **React** (with functional components)
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Context API** for theme and favorites state
- **Fetch API** to get data from a backend connected to the Ergast API

---

## Getting Started

```bash
npm install
npm start
