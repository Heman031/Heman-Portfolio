# Heman Raj L — Portfolio Website

A production-quality portfolio site built with React (Vite) + Tailwind CSS v3 + Framer Motion on the frontend, and Node.js + Express + MongoDB on the backend.

---

## 🗂 Folder Structure

```
portfolio/
├── frontend/          # React + Vite app
└── backend/           # Express API server
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or Atlas URI)

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:5173
```

To build for production:
```bash
npm run build
npm run preview
```

---

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and fill in your MONGO_URI
node server.js
# Runs at http://localhost:5000
```

For development with auto-reload:
```bash
npm run dev   # requires nodemon (installed as devDependency)
```

---

## ⚙️ Environment Variables (backend/.env)

| Variable | Default | Description |
|---|---|---|
| `PORT` | `5000` | Express server port |
| `MONGO_URI` | `mongodb://localhost:27017/portfolio` | MongoDB connection string |
| `FRONTEND_URL` | `http://localhost:5173` | Allowed CORS origin |

---

## 📄 Resume

Place your resume PDF at:
```
frontend/public/resume.pdf
```
The "Download Resume" button in the navbar will automatically link to it.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS v3, Framer Motion |
| Animations | Framer Motion, CSS keyframes |
| Typing | react-type-animation |
| Notifications | react-hot-toast |
| HTTP client | axios |
| Icons | react-icons |
| Backend | Node.js, Express |
| Database | MongoDB via Mongoose |

---

## 📬 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/contact` | Save contact form message to DB |
| GET | `/api/health` | Server health check |

---

## ✏️ Customisation

- Update social links, email, and GitHub URLs in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`
- Update proficiency percentages in `Skills.jsx`
- Add your actual internship durations in `Experience.jsx`
- Add a real profile photo by replacing the "HR" initials div with an `<img>` tag

---

Built with ❤ by Heman Raj L
