# HomeServe

> A full-stack platform for discovering and booking trusted home-service professionals.

HomeServe connects customers with local professionals for everyday household needs such as electrical work, plumbing, carpentry, painting, cleaning, and general repairs. The project currently provides a polished browsing experience and a working authentication system for customer and provider accounts.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)

## What it does

- Presents a responsive HomeServe landing page and service catalogue.
- Lets visitors browse a sample list of local professionals.
- Supports customer and professional registration.
- Authenticates users with JSON Web Tokens (JWTs).
- Persists users in MongoDB and restores signed-in sessions on refresh.
- Includes a customer dashboard route guarded by authentication and role checks.

## How it works

```text
React client (Vite, port 5173)
        |
        | HTTP requests via Axios + Bearer JWT
        v
Express API (port 5000)  ---->  MongoDB
        |
        +-- /api/auth/register
        +-- /api/auth/login
        +-- /api/auth/me
```

1. A visitor creates a customer or provider account through the React app.
2. The API validates the request, hashes the password with bcrypt, stores the user in MongoDB, and returns a JWT.
3. The client stores that JWT in `localStorage` as `homeserve_token`.
4. Axios adds the token to future API requests as `Authorization: Bearer <token>`.
5. On page load, the auth context calls `/api/auth/me` to restore the current user. Protected routes redirect unauthenticated visitors to the login page.

## Tech stack

| Area | Tools |
| --- | --- |
| Frontend | React 19, Vite, React Router, Tailwind CSS, Lucide icons |
| Backend | Node.js, Express 5 |
| Database | MongoDB with Mongoose |
| Authentication | JWT, bcryptjs |
| HTTP client | Axios |

## Project structure

```text
Home-services/
├── client/                    # React single-page application
│   ├── src/
│   │   ├── components/         # Reusable UI and layout components
│   │   ├── context/            # Authentication state
│   │   ├── pages/              # Home, services, providers, login, register
│   │   ├── routes/             # Public and protected routes
│   │   └── services/           # Axios API client
│   └── package.json
├── server/                    # Express API
│   ├── src/
│   │   ├── config/             # MongoDB connection
│   │   ├── controllers/        # Authentication logic
│   │   ├── middleware/         # JWT protection and role authorization
│   │   ├── models/             # User, service, provider, booking, review
│   │   ├── routes/             # API route definitions
│   │   └── utils/              # JWT creation helper
│   ├── server.js               # API entry point
│   └── package.json
└── README.md
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (installed with Node.js)
- A MongoDB database — local MongoDB or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### 1. Clone and install dependencies

```bash
git clone <your-repository-url>
cd Home-services

cd server
npm install

cd ../client
npm install
```

### 2. Configure the API environment

Create `server/.env` and add your own database connection string and a long, private JWT secret:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/homeserve?retryWrites=true&w=majority
JWT_SECRET=replace-with-a-long-random-secret
```

> Keep `.env` files and credentials out of version control. If a connection string or password has ever been committed, rotate it in MongoDB Atlas before sharing the repository.

### 3. Start the backend

In one terminal:

```bash
cd server
npm run dev
```

The API starts at `http://localhost:5000`. Confirm it is available at `http://localhost:5000/api/health`.

### 4. Start the frontend

In a second terminal:

```bash
cd client
npm run dev
```

Open the local URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

## Available commands

| Location | Command | Purpose |
| --- | --- | --- |
| `client` | `npm run dev` | Run the Vite development server |
| `client` | `npm run build` | Create a production frontend build |
| `client` | `npm run preview` | Preview the production build locally |
| `client` | `npm run lint` | Run ESLint |
| `server` | `npm run dev` | Run the API with automatic restart via Nodemon |
| `server` | `npm start` | Run the API with Node.js |

## API reference

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Authentication | Description |
| --- | --- | --- | --- |
| `POST` | `/auth/register` | No | Creates a `customer` or `provider` account and returns a JWT |
| `POST` | `/auth/login` | No | Signs a user in and returns a JWT |
| `GET` | `/auth/me` | Bearer token | Returns the authenticated user |
| `GET` | `/health` | No | Reports API and MongoDB connection status |

Example registration request:

```json
{
  "name": "Aarav Sharma",
  "email": "aarav@example.com",
  "phone": "+91 98765 43210",
  "password": "secure-password",
  "role": "customer",
  "address": "123 Main Street",
  "city": "Amravati"
}
```

## Routes in the frontend

| Route | Access | Purpose |
| --- | --- | --- |
| `/` | Public | Landing page |
| `/services` | Public | Home service categories |
| `/providers` | Public | Sample provider directory and search UI |
| `/register` | Public | Customer/provider account creation |
| `/login` | Public | Sign in |
| `/customer/dashboard` | Customer | Customer dashboard shell |

## Data model

The API already defines MongoDB models for the platform’s core entities:

- **User** — account information, role, address, and active status.
- **Service** — service category name, description, image, and active status.
- **ServiceProvider** — provider profile, service, experience, availability, rate, rating, and verification state.
- **Booking** — customer/provider/service relationship, schedule, address, price, and booking status.
- **Review** — one customer review per booking.

## Current scope and next steps

Authentication is fully wired between the client and server. The service catalogue and provider list are currently static UI data, while the database models for services, providers, bookings, and reviews are ready for the next API layer.

> **Current implementation note:** the protected-route component checks `user.Role`, while the API returns `user.role`. Update that check to `user.role` before relying on the customer dashboard role gate.

Useful next additions include:

- CRUD APIs and database-backed screens for services and providers.
- Provider profiles, availability, and search/filter functionality.
- Booking creation, provider acceptance, cancellation, and history.
- Reviews and rating updates after completed bookings.
- Provider and administrator dashboards.
- Automated tests, deployment configuration, and production CORS/environment settings.

## Security notes

- Passwords are hashed with bcrypt before storage.
- JWTs expire after seven days.
- The client currently targets `http://localhost:5000/api`; make this configurable with an environment variable before deployment.
- Never place database credentials or JWT secrets directly in source files. Use `server/.env` and rotate any credentials that were previously exposed.

## License

No license has been specified yet. Add a license file before distributing or open-sourcing the project.
