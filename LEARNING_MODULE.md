# Fullstack Web Development — Your Learning Module

**Project:** Booking Meeting Room App  
**For:** Beginners  
**Goal:** Build a fullstack app from zero and learn the skills you need along the way.

---

## What You’ll Have at the End

A **Meeting Room Booking App** where users can:

- See available rooms  
- Pick a date and time  
- Book a room  
- (Later) See their bookings, cancel, maybe log in  

You’ll build both the **website (frontend)** and the **server + database (backend)**.

---

## What You Need Before Starting

### 1. Tools (install these first)

| Tool | What it does | Get it |
|------|----------------|--------|
| **Code editor** | Where you write code (you already have Cursor) | ✅ Cursor |
| **Node.js** | Runs JavaScript on your computer and server | [nodejs.org](https://nodejs.org) — pick "LTS" |
| **Git** | Saves versions of your project | [git-scm.com](https://git-scm.com) |
| **Browser** | To test your app | Chrome or Edge (you have one) |

### 2. Mindset

- **One step at a time** — follow the module in order.  
- **Build small first** — one screen, one feature, then add more.  
- **It’s okay to forget** — use this doc and search when stuck.  
- **Practice by doing** — type the code yourself; don’t only copy.

---

## Skills You’ll Learn (Overview)

| Area | Skills |
|------|--------|
| **Frontend** | HTML, CSS, JavaScript, React (or similar), calling APIs |
| **Backend** | Node.js, Express, REST API, validation |
| **Data** | JSON, database (e.g. SQLite or PostgreSQL), basic SQL |
| **Dev habits** | Git, reading errors, simple debugging |

You don’t need to “master” everything before building. You’ll get better by using these in the booking app.

---

## Module Structure: 6 Phases

Each phase has:

- **Goal** — what you’re learning  
- **Skills** — what to focus on  
- **App step** — what you add to the booking app  
- **Checkpoint** — how to know you’re done  

Do Phase 1, then 2, then 3, and so on.

---

# Phase 1: Foundations (HTML, CSS, JavaScript)

**Goal:** Make a simple webpage that looks okay and can react to clicks.

## 1.1 What to learn

- **HTML:** structure (headings, paragraphs, forms, buttons, lists).  
- **CSS:** layout (flexbox), colors, fonts, spacing, simple responsive idea.  
- **JavaScript (basics):** variables, functions, `if`, arrays, DOM (get element, change text, handle click).

## 1.2 Booking app step

- One page: “Meeting Room Booker.”  
- Static list of 3–4 rooms (e.g. Room A, B, C).  
- A form: date, time, which room, your name.  
- A button “Book” that, when clicked, shows an alert like “Booked Room A for [date].”

No server yet — everything in the browser.

## 1.3 Checkpoint

- [ ] You can explain what HTML, CSS, and JS do in one sentence each.  
- [ ] The page has rooms, a form, and a button that shows an alert.  
- [ ] You changed at least one style (e.g. color, font) with CSS.

**Suggested time:** 1–2 weeks (a bit every day).

---

# Phase 2: Frontend App (React or “vanilla” JS)

**Goal:** Turn your page into a small “app”: multiple views or a clear list of bookings on the same page.

## 2.1 What to learn

- **Option A — React:** components, `useState`, lists, forms, `fetch` to call an API later.  
- **Option B — Vanilla JS:** separate “screens” with show/hide, store bookings in an array, render list from array.

Pick one and stick with it. React is better if you plan to go fullstack and keep learning.

## 2.2 Booking app step

- A simple “view”: list of rooms.  
- A “book a room” form.  
- After “booking,” add it to a list on the page (e.g. “My bookings”) — still in memory only, no server.  
- Optional: simple “room detail” when you click a room.

## 2.3 Checkpoint

- [ ] You have at least 2 “views” or sections (e.g. room list + bookings list).  
- [ ] Booking adds an item to the list.  
- [ ] You understand what “state” means (data that, when it changes, updates the screen).

**Suggested time:** 2–3 weeks.

---

# Phase 3: Backend API (Node.js + Express)

**Goal:** A server that “remembers” bookings and gives them to the frontend.

## 3.1 What to learn

- **Node.js:** running JS outside the browser.  
- **Express:** routes (e.g. `GET /rooms`, `POST /bookings`), JSON, `req.body`, `res.json`.  
- **REST:** GET = read, POST = create, status codes (200, 201, 400).  
- **CORS:** allow your frontend (different port) to call the API.

## 3.2 Booking app step

- Express server with:  
  - `GET /rooms` → list of rooms.  
  - `GET /bookings` → list of bookings.  
  - `POST /bookings` → create a booking (send room, date, time, name); store in memory (array).  
- Frontend uses `fetch()` to load rooms and bookings and to submit a new booking.  
- After booking, list updates from the server (no more “only in memory in the browser”).

## 3.3 Checkpoint

- [ ] You can start the server with `node` or `npm start`.  
- [ ] Postman or browser can call `GET /rooms` and `POST /bookings` and get correct JSON.  
- [ ] Your frontend shows data from the server and new bookings appear after refresh or after you update the list.

**Suggested time:** 2–3 weeks.

---

# Phase 4: Database

**Goal:** Store rooms and bookings in a real database so they don’t disappear when the server restarts.

## 4.1 What to learn

- **SQL basics:** `SELECT`, `INSERT`, `WHERE`, tables, columns.  
- **Database choice:** SQLite (easiest, one file) or PostgreSQL (more like “real” production).  
- **Using DB from Node:** a library like `better-sqlite3` (SQLite) or `pg` (PostgreSQL); run queries in your Express routes.

## 4.2 Booking app step

- Create tables: e.g. `rooms` (id, name, capacity), `bookings` (id, room_id, date, time, user_name, created_at).  
- Replace in-memory arrays with database:  
  - `GET /rooms` and `GET /bookings` read from DB.  
  - `POST /bookings` inserts into DB.  
- Optional: `DELETE /bookings/:id` to cancel a booking.

## 4.3 Checkpoint

- [ ] You can describe what a “table” and “row” are.  
- [ ] Restarting the server does not delete bookings.  
- [ ] At least one query uses `WHERE` (e.g. bookings for a room or date).

**Suggested time:** 1–2 weeks.

---

# Phase 5: Polish and Good Habits

**Goal:** Make the app nicer and easier to maintain.

## 5.1 What to learn

- **Validation:** check date, time, room, name on the server; return 400 and clear error messages.  
- **Environment variables:** e.g. `PORT`, `DATABASE_URL` in a `.env` file (never commit secrets).  
- **Git:** `git init`, `add`, `commit`, `.gitignore` (ignore `node_modules`, `.env`).  
- **README:** how to install and run the project (one paragraph).

## 5.2 Booking app step

- Server validates: required fields, date not in the past, time in reasonable range.  
- `.env` for port and DB path/URL.  
- Project in Git with a sensible `.gitignore`.  
- Simple error messages on the frontend (e.g. “Please pick a future date”).

## 5.3 Checkpoint

- [ ] Invalid data is rejected by the API with a clear message.  
- [ ] Another person could clone the repo and run the app using only the README.  
- [ ] `.env` is in `.gitignore` and not committed.

**Suggested time:** ~1 week.

---

# Phase 6: One Step Beyond (Optional)

**Goal:** Add one “real” feature so you see how it fits in.

## 6.1 Ideas (pick one)

- **Auth:** simple login (sessions or JWT); “My bookings” per user.  
- **UI:** use a component library (e.g. Material UI, Tailwind) and make the app responsive.  
- **Deploy:** run frontend and backend on a free tier (e.g. Vercel + Railway, or one platform for both).

## 6.2 Booking app step

- Implement the one feature you chose.  
- Document it in your README (e.g. “How to log in,” “How to deploy”).

## 6.3 Checkpoint

- [ ] The new feature works locally (or deployed).  
- [ ] You can explain in 2–3 sentences how it works.

---

## Suggested Project Folder Structure

When you’re ready (e.g. from Phase 3), you can organize like this:

```
book-app/
├── LEARNING_MODULE.md     ← You are here
├── README.md              ← How to run the project
├── PROJECT_ROADMAP.md     ← Your current phase & next tasks
├── .gitignore
├── client/                ← Frontend (HTML/CSS/JS or React)
│   ├── index.html
│   ├── style.css
│   ├── app.js (or src/ if React)
│   └── package.json       (if you use npm for frontend)
├── server/                ← Backend (Node + Express)
│   ├── index.js or app.js
│   ├── package.json
│   ├── .env.example       (example env vars, no secrets)
│   └── db/                (database file or migrations later)
└── docs/                  ← Optional: your own notes per phase
```

You can start with everything in one folder and split into `client/` and `server/` when you add the backend.

---

## How to Use This Module

1. **Start with Phase 1.** Don’t jump to backend or database first.  
2. **Do the “Booking app step”** in each phase — that’s your practice.  
3. **Use the checkpoints** to know when you’re ready for the next phase.  
4. **Keep PROJECT_ROADMAP.md updated** with “Current phase” and “Next 3 tasks.”  
5. **When stuck:** read the error message, check the relevant section (e.g. Express, SQL), search one specific question, then try one small change.

---

## Quick Reference: Skills by Phase

| Phase | Main skills |
|-------|-------------|
| 1 | HTML, CSS, JS (DOM, events, forms) |
| 2 | React or structured vanilla JS, state, list UI |
| 3 | Node, Express, REST, fetch, CORS |
| 4 | SQL, DB driver, tables, INSERT/SELECT |
| 5 | Validation, env vars, Git, README |
| 6 | Auth or UI lib or Deploy (pick one) |

---

You’re ready to start. Begin with **Phase 1**: one HTML page, a bit of CSS, and a “Book” button that shows an alert. When that works, come back and do the rest of Phase 1, then move to Phase 2.

Good luck — and have fun building your Meeting Room Booker.
