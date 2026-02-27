# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Start the server (with auto-reload):**
```bash
npm run server
```
This runs `nodemon server/server.js` from the project root. The server starts on port `5050` (configured in `.env`).

No test runner is configured yet (`npm test` exits with an error).

## Architecture

This is a **Node.js + Express + MongoDB** REST API (backend only). There is no frontend yet — the `client/` directory does not exist. API testing is done via `request.rest` using the REST Client VS Code extension.

**Request flow:** `server.js` → `routes/` → `controllers/` → `models/` (Mongoose)

### Key files

- `server/server.js` — entry point: loads env, connects DB, mounts routes, registers error handler
- `server/config/db.js` — Mongoose connection using `MONGO_URI` from `.env`
- `server/middleware/errorHandler.js` — global Express error handler (4th-argument pattern)
- `server/routes/roomRoutes.js` — CRUD routes for `/api/rooms`
- `server/routes/bookingRoutes.js` — CRUD routes for `/api/bookings`
- `server/controllers/roomController.js` — Room business logic using `Room` model
- `server/controllers/bookingController.js` — Booking business logic using `Booking` model

### Data models

**Room** (`server/models/roomModel.js`): `name`, `price`, `desc`, `roomNumbers[]` (each has `number` and `unavailableDates[]`)

**Booking** (`server/models/bookingModel.js`): `room` (ref to Room), `name`, `email`, `checkInDate`, `checkOutDate`, `confirmed` (default: false), plus auto `createdAt`/`updatedAt` timestamps

### Environment

`.env` at the project root (not committed):
```
MONGO_URI=mongodb://localhost/book-app
PORT=5050
```

### API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/rooms` | List all rooms |
| POST | `/api/rooms` | Create a room |
| GET | `/api/rooms/:id` | Get a room |
| PUT | `/api/rooms/:id` | Update a room |
| DELETE | `/api/rooms/:id` | Delete a room |
| GET | `/api/bookings` | List all bookings |
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings/:id` | Get a booking |
| PUT | `/api/bookings/:id` | Update a booking |
| DELETE | `/api/bookings/:id` | Delete a booking |

Sample request bodies are in `request.rest`.
