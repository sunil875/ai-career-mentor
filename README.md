# AI Career Mentor

A full-stack web application that helps students discover career paths and learn about different career opportunities using AI-powered recommendations.

## Features

- 🎓 AI Career Mentor Chatbot
- 💼 Career recommendations based on skills
- 🚀 Real-time chat interface
- 📱 Responsive design
- 🔄 Full-stack JavaScript/React

## Project Structure

```
ai-career-mentor/
├── frontend/          # React Vite application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── App.jsx
│   └── package.json
├── backend/           # Node.js Express server
│   ├── routes/        # API endpoints
│   ├── server.js
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js >= 14.x
- npm or yarn

## Installation & Setup

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

- `GET /api/health` - Backend health check
- `POST /api/chatbot` - Chat with the AI mentor
- `POST /api/career` - Get career recommendations

## Technologies Used

### Frontend
- React 18
- Vite
- CSS3

### Backend
- Node.js
- Express
- CORS

## Development

To run both frontend and backend in development mode:

1. Terminal 1 - Start backend:
```bash
cd backend
npm run dev
```

2. Terminal 2 - Start frontend:
```bash
cd frontend
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Troubleshooting

If you see "Backend disconnected" warning:
- Make sure backend is running on port 5000
- Check that both terminals have the dev servers running
- Verify no port conflicts

## License

MIT
